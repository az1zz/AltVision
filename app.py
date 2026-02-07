import os
import cloudinary
import cloudinary.uploader
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from deep_translator import GoogleTranslator

load_dotenv()

app = Flask(__name__)
CORS(app)

# Configure Cloudinary
cloudinary.config(
    cloud_name=os.getenv('CLOUDINARY_CLOUD_NAME'),
    api_key=os.getenv('CLOUDINARY_API_KEY'),
    api_secret=os.getenv('CLOUDINARY_API_SECRET')
)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/generate-alt', methods=['POST'])
def generate_alt():
    try:
        data = request.json
        image_data = data.get('image')
        mime_type = data.get('mimeType', 'image/jpeg')
        lang = data.get('lang', 'en')

        if not image_data:
            return jsonify({'error': 'No image data provided'}), 400

        # Check if Cloudinary is configured
        cloud_name = os.getenv('CLOUDINARY_CLOUD_NAME')
        api_key = os.getenv('CLOUDINARY_API_KEY')
        api_secret = os.getenv('CLOUDINARY_API_SECRET')

        if not all([cloud_name, api_key, api_secret]) or \
           cloud_name == 'your_cloud_name_here' or \
           api_key == 'your_api_key_here':
            return jsonify({'error': 'Cloudinary not configured. Please add your credentials to the .env file.'}), 500

        # Create data URI from base64
        data_uri = f"data:{mime_type};base64,{image_data}"

        # Upload to Cloudinary with AI captioning
        result = cloudinary.uploader.upload(
            data_uri,
            detection="captioning",
            auto_tagging=0.6
        )

        # Extract the AI-generated caption
        alt_text = None

        # Try to get caption from info.detection.captioning.data.caption
        if 'info' in result and 'detection' in result['info']:
            detection = result['info']['detection']
            if 'captioning' in detection and 'data' in detection['captioning']:
                captions = detection['captioning']['data']
                if captions and 'caption' in captions:
                    alt_text = captions['caption']

        # Alternative: check for captioning_analysis field (per documentation)
        if not alt_text and 'captioning_analysis' in result:
            alt_text = result['captioning_analysis']

        # Fallback: use auto-generated tags if no caption
        if not alt_text and 'tags' in result and result['tags']:
            tags = result['tags'][:5]  # Get first 5 tags
            alt_text = f"Image containing: {', '.join(tags)}"

        # If still no result, provide a generic response
        if not alt_text:
            alt_text = "Image uploaded successfully but no description could be generated. Please ensure AI captioning add-on is enabled."

        # Translate to Arabic if requested
        if lang == 'ar' and alt_text:
            try:
                alt_text = GoogleTranslator(source='en', target='ar').translate(alt_text)
            except Exception:
                pass  # Fall back to English if translation fails

        # Optionally delete the uploaded image to save storage
        try:
            cloudinary.uploader.destroy(result['public_id'])
        except:
            pass  # Ignore cleanup errors

        return jsonify({'altText': alt_text.strip()})

    except Exception as e:
        error_message = str(e)
        if 'Invalid API Key' in error_message or 'unknown api_key' in error_message:
            return jsonify({'error': 'Invalid Cloudinary API key. Please check your credentials.'}), 401
        return jsonify({'error': f'Error: {error_message}'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
