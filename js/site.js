/* ===== Site-wide configuration =====
   Change BRAND_NAME in ONE place and it updates everywhere:
   the header logo, hero text, footers, and every page <title>.
   Replace the placeholder below with your real brand name when ready. */
var BRAND_NAME = 'PunjabStickers';

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
});
