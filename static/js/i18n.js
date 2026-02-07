/**
 * AltVision - Internationalization (i18n) Engine
 * Supports English (en) and Arabic (ar) with RTL layout
 */

(function () {
    const translations = {
        en: {
            // Nav
            'nav.about': 'About',
            'nav.demo': 'Demo',
            'nav.howItWorks': 'How It Works',
            'nav.tryIt': 'Try It',

            // POC Banner
            'poc.text': '<strong>Proof of Concept:</strong> This is a demonstration of how the web could become more accessible. Imagine every platform with this feature built-in.',

            // Hero
            'hero.badge': 'Reimagining Accessibility',
            'hero.title': 'What If Blind Users Could <span class="title-highlight">See</span> Every Image?',
            'hero.subtitle1': 'When blind users scroll through <strong>X (Twitter)</strong>, they encounter countless images. Their screen reader says <em>"image"</em> \u2014 nothing more. They miss the memes, the photos, the visual stories that everyone else enjoys.',
            'hero.subtitle2': '<strong>The solution?</strong> An <span class="alt-badge-inline">ALT</span> button on every image. One tap, and AI describes what\u2019s in the picture \u2014 giving blind users access to the visual web.',
            'hero.cta.primary': 'See It In Action',
            'hero.cta.secondary': 'How It Works',

            // Stats
            'stats.title': 'The Accessibility Gap',
            'stats.label1': 'of websites fail basic accessibility standards',
            'stats.label2': 'of images on the web lack ALT text',
            'stats.label3': 'visually impaired users globally',
            'stats.sr.voice': '"Image. Image. Image. Link: Read more."',
            'stats.sr.explanation': 'This is what a screen reader says when images lack descriptions.',

            // Demo
            'demo.overline': 'Live Demo',
            'demo.title': 'Experience It Like a Blind User',
            'demo.subtitle': 'Below is a post from X. For blind users, the image is invisible \u2014 their screen reader just says "image." But with the <span class="alt-badge-inline">ALT</span> button, they can tap once and hear exactly what\u2019s in the picture.',
            'demo.postText': 'AI is transforming how we make the web accessible for everyone! Every image deserves a description. <span class="hashtag">#accessibility</span> <span class="hashtag">#AIforGood</span>',
            'demo.instruction': 'Tap the <span class="alt-badge-inline">ALT</span> button \u2014 just like a blind user would \u2014 to hear what\u2019s in the image',

            // Modal
            'modal.title': 'Image Description',
            'modal.loading': 'Generating description...',
            'modal.regenerate': 'Regenerate',
            'modal.readAloud': 'Read Aloud',
            'modal.stopReading': 'Stop Reading',

            // Upload
            'upload.overline': 'Interactive Demo',
            'upload.title': 'Try It Yourself',
            'upload.subtitle': 'Upload any image and watch AI generate an accessible description in seconds.',
            'upload.dragText': 'Drag & drop an image here',
            'upload.or': 'or',
            'upload.browse': 'Browse Files',
            'upload.formats': 'Supports: JPG, PNG, WEBP, GIF (Max 4MB)',
            'upload.resultTitle': 'Generated ALT Text',
            'upload.resultBadge': 'AI Generated',
            'upload.analyzing': 'Analyzing image...',
            'upload.copy': 'Copy to Clipboard',
            'upload.another': 'Upload Another',
            'upload.readAloud': 'Read Aloud',
            'upload.stopReading': 'Stop Reading',
            'upload.retry': 'Try Again',

            // How It Works
            'hiw.overline': 'Behind the Scenes',
            'hiw.title': 'How Does It Work?',
            'hiw.subtitle': 'The magic is simple: AI vision models can describe images in natural language. Here\u2019s what happens when you click the ALT button.',
            'hiw.step1.title': 'Image Capture',
            'hiw.step1.desc': 'When you tap the ALT button, the image is sent to an AI vision service (Cloudinary\u2019s AI in this demo).',
            'hiw.step2.title': 'AI Analysis',
            'hiw.step2.desc': 'The AI examines the image \u2014 identifying objects, people, actions, text, colors, and context.',
            'hiw.step3.title': 'Natural Description',
            'hiw.step3.desc': 'A human-readable description is generated and spoken aloud by the screen reader.',
            'hiw.prompt.title': 'The Prompt Philosophy',
            'hiw.prompt.intro': 'Good ALT text isn\u2019t just about listing objects \u2014 it\u2019s about conveying meaning. The AI is guided to create descriptions that are:',
            'hiw.principle1.title': 'Concise',
            'hiw.principle1.desc': 'Short enough to not interrupt the flow of browsing',
            'hiw.principle2.title': 'Contextual',
            'hiw.principle2.desc': 'Focuses on what matters in the context of the post',
            'hiw.principle3.title': 'Natural',
            'hiw.principle3.desc': 'Written like how you\u2019d describe it to a friend',
            'hiw.example.label': 'Example of a good AI-generated description:',
            'hiw.example.quote': '\u201CA woman laughing while holding a coffee cup at an outdoor cafe, sunlight streaming through the trees behind her.\u201D',
            'hiw.example.note': 'Not just "woman with cup" \u2014 but the emotion, the setting, the atmosphere.',

            // Footer
            'footer.text': 'A proof-of-concept demonstrating how AI could make social media accessible for blind users. Imagine if every platform had this built-in.',
            'footer.copyright': '\u00A9 2025 AltVision Demo. Educational purposes only.',

            // JS Error Messages
            'error.invalidType': 'Invalid file type. Please use JPG, PNG, WEBP, or GIF.',
            'error.tooLarge': 'File too large. Maximum size is 4MB.',
            'error.generateFailed': 'Failed to generate ALT text',
            'toast.copied': 'Copied to clipboard!',
        },

        ar: {
            // Nav
            'nav.about': '\u062D\u0648\u0644',
            'nav.demo': '\u0639\u0631\u0636 \u062A\u0648\u0636\u064A\u062D\u064A',
            'nav.howItWorks': '\u0643\u064A\u0641 \u064A\u0639\u0645\u0644',
            'nav.tryIt': '\u062C\u0631\u0651\u0628\u0647',

            // POC Banner
            'poc.text': '<strong>\u0625\u062B\u0628\u0627\u062A \u0645\u0641\u0647\u0648\u0645:</strong> \u0647\u0630\u0627 \u0639\u0631\u0636 \u062A\u0648\u0636\u064A\u062D\u064A \u0644\u0643\u064A\u0641\u064A\u0629 \u062C\u0639\u0644 \u0627\u0644\u0648\u064A\u0628 \u0623\u0643\u062B\u0631 \u0633\u0647\u0648\u0644\u0629 \u0641\u064A \u0627\u0644\u0648\u0635\u0648\u0644. \u062A\u062E\u064A\u0644 \u0644\u0648 \u0643\u0627\u0646\u062A \u0643\u0644 \u0645\u0646\u0635\u0629 \u062A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u0645\u064A\u0632\u0629.',

            // Hero
            'hero.badge': '\u0625\u0639\u0627\u062F\u0629 \u062A\u0635\u0648\u0631 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644',
            'hero.title': '\u0645\u0627\u0630\u0627 \u0644\u0648 \u0627\u0633\u062A\u0637\u0627\u0639 \u0627\u0644\u0645\u0643\u0641\u0648\u0641\u0648\u0646 <span class="title-highlight">\u0631\u0624\u064A\u0629</span> \u0643\u0644 \u0635\u0648\u0631\u0629\u061F',
            'hero.subtitle1': '\u0639\u0646\u062F\u0645\u0627 \u064A\u062A\u0635\u0641\u062D \u0627\u0644\u0645\u0643\u0641\u0648\u0641\u0648\u0646 \u0645\u0646\u0635\u0629 <strong>X (\u062A\u0648\u064A\u062A\u0631)</strong>\u060C \u064A\u0648\u0627\u062C\u0647\u0648\u0646 \u0635\u0648\u0631\u064B\u0627 \u0644\u0627 \u062D\u0635\u0631 \u0644\u0647\u0627. \u0642\u0627\u0631\u0626 \u0627\u0644\u0634\u0627\u0634\u0629 \u064A\u0642\u0648\u0644 <em>"\u0635\u0648\u0631\u0629"</em> \u2014 \u0644\u0627 \u0634\u064A\u0621 \u0623\u0643\u062B\u0631. \u064A\u0641\u0648\u062A\u0647\u0645 \u0627\u0644\u0645\u064A\u0645\u0632 \u0648\u0627\u0644\u0635\u0648\u0631 \u0648\u0627\u0644\u0642\u0635\u0635 \u0627\u0644\u0628\u0635\u0631\u064A\u0629 \u0627\u0644\u062A\u064A \u064A\u0633\u062A\u0645\u062A\u0639 \u0628\u0647\u0627 \u0627\u0644\u062C\u0645\u064A\u0639.',
            'hero.subtitle2': '<strong>\u0627\u0644\u062D\u0644\u061F</strong> \u0632\u0631 <span class="alt-badge-inline">ALT</span> \u0639\u0644\u0649 \u0643\u0644 \u0635\u0648\u0631\u0629. \u0646\u0642\u0631\u0629 \u0648\u0627\u062D\u062F\u0629\u060C \u0648\u064A\u0635\u0641 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0645\u0627 \u0641\u064A \u0627\u0644\u0635\u0648\u0631\u0629 \u2014 \u0645\u0645\u0627 \u064A\u0645\u0646\u062D \u0627\u0644\u0645\u0643\u0641\u0648\u0641\u064A\u0646 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0648\u064A\u0628 \u0627\u0644\u0628\u0635\u0631\u064A.',
            'hero.cta.primary': '\u0634\u0627\u0647\u062F\u0647 \u0639\u0645\u0644\u064A\u064B\u0627',
            'hero.cta.secondary': '\u0643\u064A\u0641 \u064A\u0639\u0645\u0644',

            // Stats
            'stats.title': '\u0641\u062C\u0648\u0629 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644',
            'stats.label1': '\u0645\u0646 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u062A\u0641\u0634\u0644 \u0641\u064A \u0645\u0639\u0627\u064A\u064A\u0631 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629',
            'stats.label2': '\u0645\u0646 \u0627\u0644\u0635\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0648\u064A\u0628 \u062A\u0641\u062A\u0642\u0631 \u0625\u0644\u0649 \u0646\u0635 ALT',
            'stats.label3': '\u0645\u0644\u064A\u0648\u0646 \u0645\u0633\u062A\u062E\u062F\u0645 \u0636\u0639\u064A\u0641 \u0628\u0635\u0631 \u062D\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645',
            'stats.sr.voice': '"\u0635\u0648\u0631\u0629. \u0635\u0648\u0631\u0629. \u0635\u0648\u0631\u0629. \u0631\u0627\u0628\u0637: \u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u0632\u064A\u062F."',
            'stats.sr.explanation': '\u0647\u0630\u0627 \u0645\u0627 \u064A\u0642\u0648\u0644\u0647 \u0642\u0627\u0631\u0626 \u0627\u0644\u0634\u0627\u0634\u0629 \u0639\u0646\u062F\u0645\u0627 \u062A\u0641\u062A\u0642\u0631 \u0627\u0644\u0635\u0648\u0631 \u0625\u0644\u0649 \u0623\u0648\u0635\u0627\u0641.',

            // Demo
            'demo.overline': '\u0639\u0631\u0636 \u0645\u0628\u0627\u0634\u0631',
            'demo.title': '\u062C\u0631\u0651\u0628\u0647 \u0643\u0645\u0633\u062A\u062E\u062F\u0645 \u0643\u0641\u064A\u0641',
            'demo.subtitle': '\u0623\u062F\u0646\u0627\u0647 \u0645\u0646\u0634\u0648\u0631 \u0645\u0646 X. \u0628\u0627\u0644\u0646\u0633\u0628\u0629 \u0644\u0644\u0645\u0643\u0641\u0648\u0641\u064A\u0646\u060C \u0627\u0644\u0635\u0648\u0631\u0629 \u063A\u064A\u0631 \u0645\u0631\u0626\u064A\u0629 \u2014 \u0642\u0627\u0631\u0626 \u0627\u0644\u0634\u0627\u0634\u0629 \u064A\u0642\u0648\u0644 \u0641\u0642\u0637 "\u0635\u0648\u0631\u0629". \u0644\u0643\u0646 \u0645\u0639 \u0632\u0631 <span class="alt-badge-inline">ALT</span>\u060C \u064A\u0645\u0643\u0646\u0647\u0645 \u0627\u0644\u0646\u0642\u0631 \u0645\u0631\u0629 \u0648\u0627\u062D\u062F\u0629 \u0648\u0633\u0645\u0627\u0639 \u0645\u0627 \u0641\u064A \u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u0627\u0644\u0636\u0628\u0637.',
            'demo.postText': '\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u064A\u063A\u064A\u0651\u0631 \u0637\u0631\u064A\u0642\u0629 \u062C\u0639\u0644 \u0627\u0644\u0648\u064A\u0628 \u0645\u062A\u0627\u062D\u064B\u0627 \u0644\u0644\u062C\u0645\u064A\u0639! \u0643\u0644 \u0635\u0648\u0631\u0629 \u062A\u0633\u062A\u062D\u0642 \u0648\u0635\u0641\u064B\u0627. <span class="hashtag">#\u0625\u062A\u0627\u062D\u0629</span> <span class="hashtag">#\u0630\u0643\u0627\u0621_\u0627\u0635\u0637\u0646\u0627\u0639\u064A_\u0644\u0644\u062E\u064A\u0631</span>',
            'demo.instruction': '\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u0632\u0631 <span class="alt-badge-inline">ALT</span> \u2014 \u062A\u0645\u0627\u0645\u064B\u0627 \u0643\u0645\u0627 \u064A\u0641\u0639\u0644 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0643\u0641\u064A\u0641 \u2014 \u0644\u0633\u0645\u0627\u0639 \u0645\u0627 \u0641\u064A \u0627\u0644\u0635\u0648\u0631\u0629',

            // Modal
            'modal.title': '\u0648\u0635\u0641 \u0627\u0644\u0635\u0648\u0631\u0629',
            'modal.loading': '\u062C\u0627\u0631\u064D \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0648\u0635\u0641...',
            'modal.regenerate': '\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0648\u0644\u064A\u062F',
            'modal.readAloud': '\u0627\u0642\u0631\u0623 \u0628\u0635\u0648\u062A \u0639\u0627\u0644\u064D',
            'modal.stopReading': '\u0623\u0648\u0642\u0641 \u0627\u0644\u0642\u0631\u0627\u0621\u0629',

            // Upload
            'upload.overline': '\u0639\u0631\u0636 \u062A\u0641\u0627\u0639\u0644\u064A',
            'upload.title': '\u062C\u0631\u0651\u0628\u0647 \u0628\u0646\u0641\u0633\u0643',
            'upload.subtitle': '\u0627\u0631\u0641\u0639 \u0623\u064A \u0635\u0648\u0631\u0629 \u0648\u0634\u0627\u0647\u062F \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u064A\u0648\u0644\u0651\u062F \u0648\u0635\u0641\u064B\u0627 \u0645\u062A\u0627\u062D\u064B\u0627 \u0641\u064A \u062B\u0648\u0627\u0646\u064D.',
            'upload.dragText': '\u0627\u0633\u062D\u0628 \u0648\u0623\u0641\u0644\u062A \u0627\u0644\u0635\u0648\u0631\u0629 \u0647\u0646\u0627',
            'upload.or': '\u0623\u0648',
            'upload.browse': '\u062A\u0635\u0641\u062D \u0627\u0644\u0645\u0644\u0641\u0627\u062A',
            'upload.formats': '\u0627\u0644\u0635\u064A\u063A \u0627\u0644\u0645\u062F\u0639\u0648\u0645\u0629: JPG, PNG, WEBP, GIF (\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 4MB)',
            'upload.resultTitle': '\u0646\u0635 ALT \u0627\u0644\u0645\u064F\u0648\u0644\u0651\u062F',
            'upload.resultBadge': '\u0645\u064F\u0648\u0644\u0651\u062F \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A',
            'upload.analyzing': '\u062C\u0627\u0631\u064D \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0635\u0648\u0631\u0629...',
            'upload.copy': '\u0646\u0633\u062E \u0625\u0644\u0649 \u0627\u0644\u062D\u0627\u0641\u0638\u0629',
            'upload.another': '\u0627\u0631\u0641\u0639 \u0635\u0648\u0631\u0629 \u0623\u062E\u0631\u0649',
            'upload.readAloud': '\u0627\u0642\u0631\u0623 \u0628\u0635\u0648\u062A \u0639\u0627\u0644\u064D',
            'upload.stopReading': '\u0623\u0648\u0642\u0641 \u0627\u0644\u0642\u0631\u0627\u0621\u0629',
            'upload.retry': '\u062D\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649',

            // How It Works
            'hiw.overline': '\u0645\u0627 \u0648\u0631\u0627\u0621 \u0627\u0644\u0643\u0648\u0627\u0644\u064A\u0633',
            'hiw.title': '\u0643\u064A\u0641 \u064A\u0639\u0645\u0644\u061F',
            'hiw.subtitle': '\u0627\u0644\u0623\u0645\u0631 \u0628\u0633\u064A\u0637: \u0646\u0645\u0627\u0630\u062C \u0627\u0644\u0631\u0624\u064A\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u064A\u0645\u0643\u0646\u0647\u0627 \u0648\u0635\u0641 \u0627\u0644\u0635\u0648\u0631 \u0628\u0644\u063A\u0629 \u0637\u0628\u064A\u0639\u064A\u0629. \u0625\u0644\u064A\u0643 \u0645\u0627 \u064A\u062D\u062F\u062B \u0639\u0646\u062F \u0627\u0644\u0646\u0642\u0631 \u0639\u0644\u0649 \u0632\u0631 ALT.',
            'hiw.step1.title': '\u0627\u0644\u062A\u0642\u0627\u0637 \u0627\u0644\u0635\u0648\u0631\u0629',
            'hiw.step1.desc': '\u0639\u0646\u062F \u0627\u0644\u0646\u0642\u0631 \u0639\u0644\u0649 \u0632\u0631 ALT\u060C \u064A\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0635\u0648\u0631\u0629 \u0625\u0644\u0649 \u062E\u062F\u0645\u0629 \u0631\u0624\u064A\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A (Cloudinary AI \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0639\u0631\u0636).',
            'hiw.step2.title': '\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A',
            'hiw.step2.desc': '\u064A\u0641\u062D\u0635 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0627\u0644\u0635\u0648\u0631\u0629 \u2014 \u0645\u062D\u062F\u062F\u064B\u0627 \u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062A \u0648\u0627\u0644\u0623\u0634\u062E\u0627\u0635 \u0648\u0627\u0644\u0623\u0641\u0639\u0627\u0644 \u0648\u0627\u0644\u0646\u0635\u0648\u0635 \u0648\u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0648\u0627\u0644\u0633\u064A\u0627\u0642.',
            'hiw.step3.title': '\u0648\u0635\u0641 \u0637\u0628\u064A\u0639\u064A',
            'hiw.step3.desc': '\u064A\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0648\u0635\u0641 \u0645\u0642\u0631\u0648\u0621 \u0648\u064A\u0642\u0631\u0623\u0647 \u0642\u0627\u0631\u0626 \u0627\u0644\u0634\u0627\u0634\u0629 \u0628\u0635\u0648\u062A \u0639\u0627\u0644\u064D.',
            'hiw.prompt.title': '\u0641\u0644\u0633\u0641\u0629 \u0627\u0644\u0648\u0635\u0641',
            'hiw.prompt.intro': '\u0646\u0635 ALT \u0627\u0644\u062C\u064A\u062F \u0644\u064A\u0633 \u0645\u062C\u0631\u062F \u0633\u0631\u062F \u0644\u0644\u0643\u0627\u0626\u0646\u0627\u062A \u2014 \u0628\u0644 \u0647\u0648 \u0646\u0642\u0644 \u0644\u0644\u0645\u0639\u0646\u0649. \u064A\u062A\u0645 \u062A\u0648\u062C\u064A\u0647 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0644\u0625\u0646\u0634\u0627\u0621 \u0623\u0648\u0635\u0627\u0641:',
            'hiw.principle1.title': '\u0645\u0648\u062C\u0632',
            'hiw.principle1.desc': '\u0642\u0635\u064A\u0631 \u0628\u0645\u0627 \u064A\u0643\u0641\u064A \u0644\u0639\u062F\u0645 \u0645\u0642\u0627\u0637\u0639\u0629 \u062A\u062F\u0641\u0642 \u0627\u0644\u062A\u0635\u0641\u062D',
            'hiw.principle2.title': '\u0633\u064A\u0627\u0642\u064A',
            'hiw.principle2.desc': '\u064A\u0631\u0643\u0632 \u0639\u0644\u0649 \u0645\u0627 \u064A\u0647\u0645 \u0641\u064A \u0633\u064A\u0627\u0642 \u0627\u0644\u0645\u0646\u0634\u0648\u0631',
            'hiw.principle3.title': '\u0637\u0628\u064A\u0639\u064A',
            'hiw.principle3.desc': '\u0645\u0643\u062A\u0648\u0628 \u0643\u0645\u0627 \u062A\u0635\u0641\u0647 \u0644\u0635\u062F\u064A\u0642',
            'hiw.example.label': '\u0645\u062B\u0627\u0644 \u0639\u0644\u0649 \u0648\u0635\u0641 \u062C\u064A\u062F \u0645\u064F\u0648\u0644\u0651\u062F \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A:',
            'hiw.example.quote': '\u201C\u0627\u0645\u0631\u0623\u0629 \u062A\u0636\u062D\u0643 \u0648\u0647\u064A \u062A\u062D\u0645\u0644 \u0641\u0646\u062C\u0627\u0646 \u0642\u0647\u0648\u0629 \u0641\u064A \u0645\u0642\u0647\u0649 \u0641\u064A \u0627\u0644\u0647\u0648\u0627\u0621 \u0627\u0644\u0637\u0644\u0642\u060C \u0648\u0623\u0634\u0639\u0629 \u0627\u0644\u0634\u0645\u0633 \u062A\u062A\u062E\u0644\u0644 \u0627\u0644\u0623\u0634\u062C\u0627\u0631 \u062E\u0644\u0641\u0647\u0627.\u201D',
            'hiw.example.note': '\u0644\u064A\u0633 \u0641\u0642\u0637 "\u0627\u0645\u0631\u0623\u0629 \u0645\u0639 \u0641\u0646\u062C\u0627\u0646" \u2014 \u0628\u0644 \u0627\u0644\u0645\u0634\u0627\u0639\u0631 \u0648\u0627\u0644\u0645\u0643\u0627\u0646 \u0648\u0627\u0644\u0623\u062C\u0648\u0627\u0621.',

            // Footer
            'footer.text': '\u0625\u062B\u0628\u0627\u062A \u0645\u0641\u0647\u0648\u0645 \u064A\u0648\u0636\u062D \u0643\u064A\u0641 \u064A\u0645\u0643\u0646 \u0644\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u062C\u0639\u0644 \u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A \u0645\u062A\u0627\u062D\u0629 \u0644\u0644\u0645\u0643\u0641\u0648\u0641\u064A\u0646. \u062A\u062E\u064A\u0644 \u0644\u0648 \u0643\u0627\u0646\u062A \u0643\u0644 \u0645\u0646\u0635\u0629 \u062A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u0645\u064A\u0632\u0629.',
            'footer.copyright': '\u00A9 2025 AltVision \u0639\u0631\u0636 \u062A\u0648\u0636\u064A\u062D\u064A. \u0644\u0623\u063A\u0631\u0627\u0636 \u062A\u0639\u0644\u064A\u0645\u064A\u0629 \u0641\u0642\u0637.',

            // JS Error Messages
            'error.invalidType': '\u0646\u0648\u0639 \u0645\u0644\u0641 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D. \u064A\u0631\u062C\u0649 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 JPG \u0623\u0648 PNG \u0623\u0648 WEBP \u0623\u0648 GIF.',
            'error.tooLarge': '\u0627\u0644\u0645\u0644\u0641 \u0643\u0628\u064A\u0631 \u062C\u062F\u064B\u0627. \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 4 \u0645\u064A\u063A\u0627\u0628\u0627\u064A\u062A.',
            'error.generateFailed': '\u0641\u0634\u0644 \u0641\u064A \u062A\u0648\u0644\u064A\u062F \u0646\u0635 ALT',
            'toast.copied': '\u062A\u0645 \u0627\u0644\u0646\u0633\u062E \u0625\u0644\u0649 \u0627\u0644\u062D\u0627\u0641\u0638\u0629!',
        },
    };

    let currentLang = localStorage.getItem('altVisionLang') || 'en';

    function getCurrentLang() {
        return currentLang;
    }

    function t(key) {
        const lang = currentLang;
        return (translations[lang] && translations[lang][key]) || (translations.en && translations.en[key]) || key;
    }

    function applyTranslations(lang) {
        // Handle data-i18n (text content)
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            var translation = translations[lang] && translations[lang][key];
            if (translation !== undefined) {
                el.textContent = translation;
            }
        });

        // Handle data-i18n-html (innerHTML for elements with inline HTML)
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-html');
            var translation = translations[lang] && translations[lang][key];
            if (translation !== undefined) {
                el.innerHTML = translation;
            }
        });
    }

    function applyDirection(lang) {
        var html = document.documentElement;
        if (lang === 'ar') {
            html.setAttribute('dir', 'rtl');
            html.setAttribute('lang', 'ar');
        } else {
            html.setAttribute('dir', 'ltr');
            html.setAttribute('lang', 'en');
        }
    }

    function updateToggleButtons(lang) {
        var btnEn = document.getElementById('langEn');
        var btnAr = document.getElementById('langAr');
        if (btnEn && btnAr) {
            btnEn.classList.toggle('active', lang === 'en');
            btnAr.classList.toggle('active', lang === 'ar');
        }
    }

    function setLanguage(lang) {
        if (lang !== 'en' && lang !== 'ar') return;
        currentLang = lang;
        localStorage.setItem('altVisionLang', lang);
        applyDirection(lang);
        applyTranslations(lang);
        updateToggleButtons(lang);
    }

    // Initialize on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', function () {
        applyDirection(currentLang);
        applyTranslations(currentLang);
        updateToggleButtons(currentLang);
    });

    // Expose globally
    window.i18n = {
        setLanguage: setLanguage,
        t: t,
        getCurrentLang: getCurrentLang,
    };
})();
