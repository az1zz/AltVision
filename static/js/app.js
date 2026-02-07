/**
 * AltVision - Main Application JavaScript
 * Handles upload functionality, animations, and general interactivity
 */

// ========================================
// Scroll Animations
// ========================================
function initScrollAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    // Trigger counter animation for stat cards
                    if (entry.target.classList.contains('stat-card')) {
                        const counter = entry.target.querySelector('.counter');
                        if (counter && !counter.dataset.animated) {
                            animateCounter(counter);
                            counter.dataset.animated = 'true';
                        }
                    }
                }
            });
        },
        { threshold: 0.2 }
    );

    // Observe stat cards
    document.querySelectorAll('.stat-card').forEach((card) => {
        observer.observe(card);
    });
}

// ========================================
// Counter Animation
// ========================================
function animateCounter(element) {
    const target = parseFloat(element.dataset.target);
    const duration = 2000;
    const startTime = performance.now();
    const isDecimal = target % 1 !== 0;

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = target * easeOutQuart;

        if (isDecimal) {
            element.textContent = current.toFixed(1);
        } else {
            element.textContent = Math.floor(current);
        }

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = isDecimal ? target.toFixed(1) : target;
        }
    }

    requestAnimationFrame(update);
}

// ========================================
// File Upload Handling
// ========================================
function initUpload() {
    const uploadZone = document.getElementById('uploadZone');
    const fileInput = document.getElementById('fileInput');
    const uploadResults = document.getElementById('uploadResults');
    const previewImage = document.getElementById('previewImage');
    const resultLoading = document.getElementById('resultLoading');
    const resultContent = document.getElementById('resultContent');
    const resultError = document.getElementById('resultError');
    const resultErrorText = document.getElementById('resultErrorText');
    const generatedAlt = document.getElementById('generatedAlt');
    const copyAlt = document.getElementById('copyAlt');
    const tryAnother = document.getElementById('tryAnother');
    const retryUpload = document.getElementById('retryUpload');

    if (!uploadZone) return;

    // Drag and drop events
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((event) => {
        uploadZone.addEventListener(event, preventDefaults);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach((event) => {
        uploadZone.addEventListener(event, () => uploadZone.classList.add('dragging'));
    });

    ['dragleave', 'drop'].forEach((event) => {
        uploadZone.addEventListener(event, () => uploadZone.classList.remove('dragging'));
    });

    // Handle drop
    uploadZone.addEventListener('drop', (e) => {
        const file = e.dataTransfer.files[0];
        if (file) processFile(file);
    });

    // Handle click
    uploadZone.addEventListener('click', () => fileInput.click());

    // Handle keyboard
    uploadZone.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            fileInput.click();
        }
    });

    // Handle file selection
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) processFile(file);
    });

    // Read Aloud button for upload results
    const readAloudUploadBtn = document.getElementById('readAloudUploadBtn');

    function stopUploadSpeech() {
        window.speechSynthesis.cancel();
        if (readAloudUploadBtn) {
            readAloudUploadBtn.classList.remove('reading');
            const label = readAloudUploadBtn.querySelector('[data-i18n]');
            if (label) {
                label.setAttribute('data-i18n', 'upload.readAloud');
                label.textContent = window.i18n.t('upload.readAloud');
            }
        }
    }

    function toggleUploadReadAloud() {
        if (window.speechSynthesis.speaking) {
            stopUploadSpeech();
            return;
        }

        const text = generatedAlt?.textContent;
        if (!text) return;

        const utterance = new SpeechSynthesisUtterance(text);
        const lang = window.i18n.getCurrentLang();
        utterance.lang = lang === 'ar' ? 'ar-SA' : 'en';

        readAloudUploadBtn.classList.add('reading');
        const label = readAloudUploadBtn.querySelector('[data-i18n]');
        if (label) {
            label.setAttribute('data-i18n', 'upload.stopReading');
            label.textContent = window.i18n.t('upload.stopReading');
        }

        utterance.onend = () => stopUploadSpeech();
        utterance.onerror = () => stopUploadSpeech();

        window.speechSynthesis.speak(utterance);
    }

    readAloudUploadBtn?.addEventListener('click', toggleUploadReadAloud);

    // Try another button
    tryAnother?.addEventListener('click', () => { stopUploadSpeech(); resetUpload(); });
    retryUpload?.addEventListener('click', resetUpload);

    // Copy button
    copyAlt?.addEventListener('click', () => {
        const text = generatedAlt.textContent;
        copyToClipboard(text);
    });

    function resetUpload() {
        fileInput.value = '';
        uploadResults.hidden = true;
        uploadZone.style.display = '';
        resultContent.hidden = true;
        resultError.hidden = true;
        resultLoading.style.display = '';
    }

    async function processFile(file) {
        // Validate file
        const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
        const maxSize = 4 * 1024 * 1024; // 4MB

        if (!validTypes.includes(file.type)) {
            showError(window.i18n.t('error.invalidType'));
            return;
        }

        if (file.size > maxSize) {
            showError(window.i18n.t('error.tooLarge'));
            return;
        }

        // Show preview
        const previewUrl = URL.createObjectURL(file);
        previewImage.src = previewUrl;

        // Show results section, hide upload zone
        uploadZone.style.display = 'none';
        uploadResults.hidden = false;
        resultLoading.style.display = '';
        resultContent.hidden = true;
        resultError.hidden = true;

        try {
            // Convert to base64
            const base64Data = await fileToBase64(file);

            // Call API
            const response = await fetch('/api/generate-alt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    image: base64Data,
                    mimeType: file.type,
                    lang: window.i18n.getCurrentLang(),
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || window.i18n.t('error.generateFailed'));
            }

            // Show result
            generatedAlt.textContent = data.altText;
            resultLoading.style.display = 'none';
            resultContent.hidden = false;
        } catch (error) {
            showResultError(error.message);
        }
    }

    function showError(message) {
        showToast(message, 'error');
    }

    function showResultError(message) {
        resultLoading.style.display = 'none';
        resultError.hidden = false;
        resultErrorText.textContent = message;
    }
}

// ========================================
// File to Base64 Conversion
// ========================================
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            // Remove data URL prefix
            const base64 = reader.result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// ========================================
// Toast Notifications
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;

    // Update icon color based on type
    const icon = toast.querySelector('.toast-icon');
    if (type === 'error') {
        toast.style.background = '#ef4444';
    } else {
        toast.style.background = '#22c55e';
    }

    toast.hidden = false;

    // Auto hide after 3 seconds
    setTimeout(() => {
        toast.hidden = true;
    }, 3000);
}

// ========================================
// Copy to Clipboard
// ========================================
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showToast(window.i18n.t('toast.copied'));
    } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(window.i18n.t('toast.copied'));
    }
}

// ========================================
// Smooth Scroll for Navigation
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth',
                });
            }
        });
    });
}

// ========================================
// Navigation Scroll Effect
// ========================================
function initNavScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.style.background = 'rgba(10, 10, 15, 0.95)';
        } else {
            nav.style.background = 'rgba(10, 10, 15, 0.8)';
        }

        lastScroll = currentScroll;
    });
}

// ========================================
// Initialize Everything
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initUpload();
    initSmoothScroll();
    initNavScroll();
});

// Export for use in other modules
window.AltVision = {
    showToast,
    copyToClipboard,
    fileToBase64,
};
