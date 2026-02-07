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
- **Bilingual Support (EN/AR)** - Full English and Arabic interface with RTL layout support
- **Arabic Translation** - Generated descriptions are automatically translated to Arabic when in Arabic mode (via Google Translate)
- **Read Aloud (TTS)** - "Read Aloud" button uses the browser's Web Speech API to speak descriptions out loud, with correct voice for English and Arabic
- **Drag & Drop Upload** - Simply drag an image or click to upload
- **Interactive Demo** - See how ALT text works in a Twitter/X-style post
- **Mobile Friendly** - Fully responsive design that works on all devices
- **Accessibility First** - Built with screen readers and keyboard navigation in mind
- **Copy to Clipboard** - One-click copy for generated descriptions

## Demo

**[Try the Live Demo](https://web-production-8e258.up.railway.app/)** - No installation required!

### How It Works

1. Upload any image (JPG, PNG, WEBP, GIF)
2. AI analyzes the image content
3. Get a human-readable description in seconds (in English or Arabic)
4. Listen to the description with the "Read Aloud" button, or copy it to your clipboard

## Language Support

AltVision supports **English** and **Arabic** with a toggle in the navigation bar:

- **EN/AR toggle** switches the entire UI (labels, buttons, headings, instructions)
- **RTL layout** automatically activates in Arabic mode — all text, spacing, and alignment flip correctly
- **Arabic font** (Noto Sans Arabic) loads for proper Arabic typography
- **API descriptions** are translated server-side using `deep-translator` (Google Translate) when Arabic is active
- **Read Aloud** uses `ar-SA` locale for Arabic speech and `en` for English

### Adding a New Language

1. Add a new translation object in `static/js/i18n.js` (e.g., `fr: { ... }`)
2. Add a language button in the `<nav>` in `templates/index.html`
3. Update `setLanguage()` validation in `i18n.js` to accept the new code
4. Add server-side translation support in `app.py` if needed

## Read Aloud (Text-to-Speech)

Both the demo modal and the upload results section have a **"Read Aloud"** button:

- Uses the browser's built-in **Web Speech API** (`speechSynthesis`) — no external dependencies
- Detects the active language and sets the correct `utterance.lang` (`en` or `ar-SA`)
- Button toggles between "Read Aloud" and "Stop Reading" during playback
- Speech automatically cancels when: closing the modal, regenerating, clicking "Upload Another", or pressing the button again
- Visual `.reading` state highlights the button while speaking

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

## Tech Stack

- **Backend**: Python, Flask
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **AI**: Cloudinary AI Captioning
- **Translation**: deep-translator (Google Translate)
- **Text-to-Speech**: Web Speech API (browser built-in)
- **i18n**: Custom client-side engine (`i18n.js`)
- **Deployment**: Railway (or any Python hosting)

## Project Structure

```
AltVision/
├── app.py              # Flask backend server
├── requirements.txt    # Python dependencies
├── Procfile           # Railway/Heroku deployment config
├── .env.example       # Environment variables template
├── CLAUDE.md          # Project documentation for Claude
├── templates/
│   └── index.html     # Main HTML page (Jinja2)
└── static/
    ├── css/
    │   ├── styles.css     # Main styles + RTL support
    │   └── x-clone.css    # Demo post styles
    ├── js/
    │   ├── i18n.js        # Internationalization engine (EN/AR translations)
    │   ├── app.js         # Upload, animations & upload TTS
    │   └── x-clone.js     # Demo modal, ALT generation & modal TTS
    └── images/
        ├── favicon.svg    # Site icon
        ├── X_avatar.jpg   # Demo post avatar
        └── demo-post.jpg  # Demo image
```

## API Endpoint

### POST `/api/generate-alt`

Generate ALT text for an image.

**Request:**
```json
{
  "image": "base64_encoded_image_data",
  "mimeType": "image/jpeg",
  "lang": "en"
}
```

The `lang` parameter is optional (defaults to `"en"`). Set to `"ar"` to get the description translated to Arabic.

**Response:**
```json
{
  "altText": "A golden retriever playing fetch in a sunny park"
}
```

## Contributing

Contributions are welcome!

### Ideas for Contributions

- Add support for more AI providers (Google Vision, Azure, etc.)
- Implement batch image processing
- Add more languages beyond English and Arabic
- Create browser extension
- Improve UI/UX

## Resources

- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- [Cloudinary AI Captioning Docs](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon)
- [Web Speech API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Abdulaziz Binruqush**

- Email: abdulaziz.ruqush@gmail.com
- LinkedIn: [abdulaziz-binruqush](https://www.linkedin.com/in/abdulaziz-binruqush-262448252/)
- GitHub: [@az1zz](https://github.com/az1zz)

---

**Remember**: Every image tells a story. Don't let millions miss out. Make your content accessible today.
