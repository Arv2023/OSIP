# Quick Implementation Guide - Google Translate

## ✅ COMPLETED FILES:
1. index.html - ✅ Widget added, ✅ Scripts added
2. product.html - ✅ Widget added
3. contact.html - ✅ Widget added  
4. feedback.html - ✅ Widget added

## ⬜ FILES THAT STILL NEED UPDATES:

### Need Both Widget + Scripts:
- about.html
- our-history.html
- production-process.html
- distribution.html
- our-future.html

### Need Only Scripts (widget already added):
- product.html
- contact.html
- feedback.html

---

## STEP 1: Add Widget to Navigation (if not already added)

Find this section in the HTML file:
```html
<li class="nav-item">
    <a class="nav-link" href="contact.html">Contacts</a>
</li>
```

Add AFTER it:
```html
<li class="nav-item">
    <div id="google_translate_element"></div>
</li>
```

---

## STEP 2: Add Scripts Before </body>

Find the closing `</body>` tag and add these TWO lines BEFORE it:

```html
<!-- Google Translate Script -->
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
<script src="../js/google-translate.js"></script>

</body>
</html>
```

---

## COMPLETE EXAMPLE:

Here's how the bottom of your HTML should look:

```html
    <!-- Bootstrap Bundle JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
        crossorigin="anonymous"></script>
    
    <!-- Google Translate Script -->
    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
    <script src="../js/google-translate.js"></script>
</body>

</html>
```

---

## TESTING:

1. Open the page in a browser
2. Look for the language dropdown in the navigation bar
3. Select "Indonesian" from the dropdown
4. Page should translate to Bahasa Indonesia
5. Select "English" to switch back

---

## TROUBLESHOOTING:

### Widget not appearing?
- Check if `<div id="google_translate_element"></div>` is added
- Check if both script tags are present
- Check browser console for errors (Press F12)

### Translation not working?
- Wait 2-3 seconds for Google Translate to load
- Check internet connection
- Clear browser cache and refresh

### Google banner showing at top?
- Clear browser cache (Ctrl + Shift + Delete)
- Hard refresh (Ctrl + F5)
- Check if `basic.css` is loaded

---

**Files Locations:**
- JavaScript: `/js/google-translate.js`
- CSS: `/css/basic.css` (already updated)
- HTML files: `/html/*.html`

**Last Updated:** October 6, 2025
