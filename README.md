# AltVision - AI-Powered Image Descriptions

Making the web **visible** to everyone through AI-generated ALT text for images.

## Why This Matters

- **285 million** people worldwide are visually impaired
- **96.3%** of websites fail basic accessibility standards
- **55.5%** of images on the web lack ALT text

When images don't have descriptions, screen readers simply say *"image"* — leaving millions unable to understand the visual web. AltVision demonstrates how AI can bridge this gap instantly.

## What is ALT Text?

ALT (alternative) text is a written description of an image that:
- Helps **screen reader users** understand image content
- Displays when images **fail to load**
- Improves **SEO** for search engines
- Is **required** by accessibility laws (WCAG, ADA)

## Features

- **AI-Powered Descriptions** - Automatically generates meaningful image descriptions using Cloudinary's AI
- **Drag & Drop Upload** - Simply drag an image or click to upload
- **Interactive Demo** - See how ALT text works in a Twitter/X-style post
- **Mobile Friendly** - Fully responsive design that works on all devices
- **Accessibility First** - Built with screen readers and keyboard navigation in mind
- **Copy to Clipboard** - One-click copy for generated descriptions

## Demo

Try the live demo: [Your Railway URL here]

### How It Works

1. Upload any image (JPG, PNG, WEBP, GIF)
2. AI analyzes the image content
3. Get a human-readable description in seconds
4. Copy and use in your websites, social media, or documents

## Getting Started

### Prerequisites

- Python 3.8 or higher
- A free [Cloudinary](https://cloudinary.com) account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/az1zz/AltVision.git
   cd AltVision
   ```

2. **Create a virtual environment** (recommended)
   ```bash
   python -m venv venv

   # On Windows
   venv\Scripts\activate

   # On macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up your Cloudinary API keys**

   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

   Open `.env` and add your Cloudinary credentials:
   ```env
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

   **Where to find your credentials:**
   1. Sign up at [cloudinary.com](https://cloudinary.com) (free)
   2. Go to your [Dashboard](https://cloudinary.com/console)
   3. Copy the Cloud Name, API Key, and API Secret
   4. Or copy from your `CLOUDINARY_URL` (format: `cloudinary://API_KEY:API_SECRET@CLOUD_NAME`)

5. **Enable AI Captioning Add-on**
   - Go to Cloudinary Console → Add-ons
   - Enable "AI Content Analysis" or "Cloudinary AI"
   - This is required for automatic image descriptions

6. **Run the application**
   ```bash
   python app.py
   ```

7. **Open in browser**
   ```
   http://localhost:5000
   ```

## Deployment

### Deploy to Railway

1. Push your code to GitHub
2. Go to [railway.app](https://railway.app)
3. Create new project → Deploy from GitHub repo
4. Select your repository
5. Add environment variables in the Variables tab:
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`
6. Railway will automatically deploy your app

## Tech Stack

- **Backend**: Python, Flask
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **AI**: Cloudinary AI Captioning
- **Deployment**: Railway (or any Python hosting)

## Project Structure

```
AltVision/
├── app.py              # Flask backend server
├── requirements.txt    # Python dependencies
├── Procfile           # Railway/Heroku deployment config
├── .env.example       # Environment variables template
├── templates/
│   └── index.html     # Main HTML page
└── static/
    ├── css/
    │   ├── styles.css     # Main styles
    │   └── x-clone.css    # Demo post styles
    ├── js/
    │   ├── app.js         # Upload & animations
    │   └── x-clone.js     # Demo functionality
    └── images/
        ├── favicon.svg    # Site icon
        └── demo-post.jpg  # Demo image
```

## API Endpoint

### POST `/api/generate-alt`

Generate ALT text for an image.

**Request:**
```json
{
  "image": "base64_encoded_image_data",
  "mimeType": "image/jpeg"
}
```

**Response:**
```json
{
  "altText": "A golden retriever playing fetch in a sunny park"
}
```

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Ideas for Contributions

- Add support for more AI providers (Google Vision, Azure, etc.)
- Implement batch image processing
- Add language translation for descriptions
- Create browser extension
- Improve UI/UX

## Resources

- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- [The A11Y Project](https://www.a11yproject.com/)
- [Cloudinary AI Captioning Docs](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Abdulaziz Binruqush**

- Email: abdulaziz.ruqush@gmail.com
- LinkedIn: [abdulaziz-binruqush](https://www.linkedin.com/in/abdulaziz-binruqush-262448252/)
- GitHub: [@az1zz](https://github.com/az1zz)

---

**Remember**: Every image tells a story. Don't let millions miss out. Make your content accessible today.
