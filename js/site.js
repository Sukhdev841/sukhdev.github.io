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
  // Tap a sticker design or featured-work image to enlarge it. Inside the
  // lightbox, tap the image to zoom in for fine detail and drag/scroll to pan;
  // tap again to zoom back out. Close with the × button, a tap on the backdrop,
  // or the Escape key. Background scrolling is locked while it is open.
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

    // A scrollable stage lets the zoomed image be panned on touch and desktop.
    var stage = document.createElement('div');
    stage.className = 'lightbox-stage';

    var bigImg = document.createElement('img');
    bigImg.alt = '';

    stage.appendChild(bigImg);
    lightbox.appendChild(closeBtn);
    lightbox.appendChild(stage);
    document.body.appendChild(lightbox);

    var resetZoom = function () {
      bigImg.classList.remove('zoomed');
    };

    var openLightbox = function (src, alt) {
      resetZoom();
      bigImg.src = src;
      bigImg.alt = alt || '';
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('no-scroll');
    };

    var closeLightbox = function () {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('no-scroll');
      resetZoom();
      bigImg.src = '';
    };

    zoomables.forEach(function (img) {
      img.addEventListener('click', function () {
        openLightbox(img.currentSrc || img.src, img.alt);
      });
    });

    // Tap/click the enlarged image to toggle a deeper zoom, centring the
    // tapped point so users can inspect fine detail and pan around it.
    bigImg.addEventListener('click', function (e) {
      e.stopPropagation();
      var willZoom = !bigImg.classList.contains('zoomed');
      bigImg.classList.toggle('zoomed');
      if (willZoom) {
        // Centre the stage scroll on the point that was tapped.
        var rect = bigImg.getBoundingClientRect();
        var ratioX = rect.width ? (e.clientX - rect.left) / rect.width : 0.5;
        var ratioY = rect.height ? (e.clientY - rect.top) / rect.height : 0.5;
        // Defer until the zoomed size is applied, then scroll into place.
        requestAnimationFrame(function () {
          stage.scrollLeft = ratioX * (bigImg.offsetWidth - stage.clientWidth);
          stage.scrollTop = ratioY * (bigImg.offsetHeight - stage.clientHeight);
        });
      }
    });

    closeBtn.addEventListener('click', closeLightbox);
    // Close when tapping the backdrop (the overlay or empty stage area).
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target === stage) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
    });
  }
});
