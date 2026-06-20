/* ===== Site-wide configuration =====
   Change BRAND_NAME in ONE place and it updates everywhere:
   the header logo, hero text, footers, and every page <title>.
   Replace the placeholder below with your real brand name when ready. */
var BRAND_NAME = 'Punjab Stickers';

document.addEventListener('DOMContentLoaded', function () {
  // Fill every brand placeholder, e.g. <span data-brand></span>
  document.querySelectorAll('[data-brand]').forEach(function (el) {
    el.textContent = BRAND_NAME;
  });

  // Build the page <title> from a per-page label + the brand name.
  // Add data-page-title="..." on <body> to set the label.
  var pageTitle = document.body.getAttribute('data-page-title');
  document.title = pageTitle ? pageTitle + ' | ' + BRAND_NAME : BRAND_NAME;

  // Auto-update any copyright year, e.g. <span data-year></span>
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // ===== Image lightbox =====
  // Click a sticker design or featured-work image to enlarge it, then
  // close with the × button, a click on the backdrop, or the Escape key.
  var zoomables = document.querySelectorAll('.design-card .img-wrap img, .collage-item img');
  if (zoomables.length) {
    var lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-hidden', 'true');

    var closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'lightbox-close';
    closeBtn.setAttribute('aria-label', 'Close enlarged image');
    closeBtn.innerHTML = '&times;';

    var bigImg = document.createElement('img');
    bigImg.alt = '';

    lightbox.appendChild(closeBtn);
    lightbox.appendChild(bigImg);
    document.body.appendChild(lightbox);

    var openLightbox = function (src, alt) {
      bigImg.src = src;
      bigImg.alt = alt || '';
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
    };

    var closeLightbox = function () {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      bigImg.src = '';
    };

    zoomables.forEach(function (img) {
      img.addEventListener('click', function () {
        openLightbox(img.currentSrc || img.src, img.alt);
      });
    });

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
    });
  }
});
