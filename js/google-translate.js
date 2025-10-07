// Google Translate Configuration
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "en,id",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    "google_translate_element"
  );
}

// Remove the annoying top banner
window.addEventListener("load", function () {
  setTimeout(function () {
    const banner = document.querySelector(".goog-te-banner-frame");
    if (banner) {
      banner.style.display = "none";
    }
    document.body.style.top = "0";
  }, 1000);
});

// Keep the banner hidden
setInterval(function () {
  const banner = document.querySelector(".goog-te-banner-frame");
  if (banner) {
    banner.style.display = "none";
  }
  document.body.style.top = "0";
}, 500);
