/**
 * X Clone - ALT Button and Modal Functionality
 * Handles the interactive demo section
 */

// ========================================
// State Management
// ========================================
let currentAltText = null;
let isLoading = false;

// ========================================
// DOM Elements
// ========================================
const altBadgeBtn = document.getElementById('altBadgeBtn');
const altModal = document.getElementById('altModal');
const altModalClose = document.getElementById('altModalClose');
const altLoading = document.getElementById('altLoading');
const altResult = document.getElementById('altResult');
const altText = document.getElementById('altText');
const altError = document.getElementById('altError');
const altErrorText = document.getElementById('altErrorText');
const regenerateBtn = document.getElementById('regenerateBtn');
const demoImage = document.getElementById('demoImage');

// ========================================
// Modal Functions
// ========================================
function openModal() {
    altModal.hidden = false;
    altModal.setAttribute('aria-hidden', 'false');
    altBadgeBtn.setAttribute('aria-expanded', 'true');

    // Focus trap
    const firstFocusable = altModal.querySelector('button, [tabindex]:not([tabindex="-1"])');
    if (firstFocusable) {
        setTimeout(() => firstFocusable.focus(), 100);
    }

    // Close on escape
    document.addEventListener('keydown', handleEscape);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    altModal.hidden = true;
    altModal.setAttribute('aria-hidden', 'true');
    altBadgeBtn.setAttribute('aria-expanded', 'false');

    // Remove escape listener
    document.removeEventListener('keydown', handleEscape);

    // Restore body scroll
    document.body.style.overflow = '';

    // Return focus to trigger
    altBadgeBtn.focus();
}

function handleEscape(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
}

// ========================================
// ALT Text Generation
// ========================================
async function generateAltText() {
    if (isLoading) return;

    isLoading = true;
    altBadgeBtn.classList.add('loading');

    // Show loading state
    altLoading.style.display = '';
    altResult.hidden = true;
    altError.hidden = true;

    openModal();

    try {
        // Get image data
        const imageData = await getImageBase64();

        if (!imageData) {
            throw new Error('Could not load image. Please add a demo image.');
        }

        // Call API
        const response = await fetch('/api/generate-alt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                image: imageData.base64,
                mimeType: imageData.mimeType,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to generate ALT text');
        }

        // Show result
        currentAltText = data.altText;
        altText.textContent = currentAltText;
        altLoading.style.display = 'none';
        altResult.hidden = false;
    } catch (error) {
        showAltError(error.message);
    } finally {
        isLoading = false;
        altBadgeBtn.classList.remove('loading');
    }
}

function showAltError(message) {
    altLoading.style.display = 'none';
    altError.hidden = false;
    altErrorText.textContent = message;
}

// ========================================
// Image Processing
// ========================================
async function getImageBase64() {
    // Check if we have a demo image
    if (!demoImage || !demoImage.src || demoImage.style.display === 'none') {
        // Try to use a fallback or placeholder
        return await createPlaceholderImage();
    }

    try {
        // For same-origin images
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Wait for image to load if needed
        if (!demoImage.complete) {
            await new Promise((resolve, reject) => {
                demoImage.onload = resolve;
                demoImage.onerror = reject;
            });
        }

        canvas.width = demoImage.naturalWidth || 400;
        canvas.height = demoImage.naturalHeight || 300;
        ctx.drawImage(demoImage, 0, 0);

        const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
        const base64 = dataUrl.split(',')[1];

        return {
            base64,
            mimeType: 'image/jpeg',
        };
    } catch (error) {
        // CORS or other error - try fetch
        return await fetchImageAsBase64(demoImage.src);
    }
}

async function fetchImageAsBase64(url) {
    try {
        const response = await fetch(url);
        const blob = await response.blob();

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const base64 = reader.result.split(',')[1];
                resolve({
                    base64,
                    mimeType: blob.type || 'image/jpeg',
                });
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    } catch (error) {
        return null;
    }
}

async function createPlaceholderImage() {
    // Create a simple placeholder image
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 300;
    const ctx = canvas.getContext('2d');

    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, 400, 300);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 300);

    // Add some shapes
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.beginPath();
    ctx.arc(300, 200, 80, 0, Math.PI * 2);
    ctx.fill();

    // Text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 20px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('Demo Image', 200, 155);
    ctx.font = '14px system-ui';
    ctx.fillText('Add your image to static/images/', 200, 180);

    const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
    const base64 = dataUrl.split(',')[1];

    return {
        base64,
        mimeType: 'image/jpeg',
    };
}

// ========================================
// Event Listeners
// ========================================
if (altBadgeBtn) {
    altBadgeBtn.addEventListener('click', generateAltText);
}

if (altModalClose) {
    altModalClose.addEventListener('click', closeModal);
}

if (regenerateBtn) {
    regenerateBtn.addEventListener('click', generateAltText);
}

// Close modal on backdrop click
altModal?.querySelector('.alt-modal-backdrop')?.addEventListener('click', closeModal);

// ========================================
// Initialize Demo Image Fallback
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // If demo image fails to load, show fallback
    if (demoImage) {
        demoImage.addEventListener('error', () => {
            demoImage.style.display = 'none';
            const fallback = demoImage.nextElementSibling;
            if (fallback && fallback.classList.contains('image-fallback')) {
                fallback.style.display = 'flex';
            }
        });
    }
});
