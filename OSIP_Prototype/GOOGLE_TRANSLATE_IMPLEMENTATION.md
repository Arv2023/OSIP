# Google Translate Implementation Guide

## Overview
This guide explains how to add Google Translate functionality to your Malino Passion Fruit website, allowing users to switch between English and Bahasa Indonesia.

## Files Created/Modified

### 1. New Files Created:
- `/js/google-translate.js` - JavaScript configuration for Google Translate
- This documentation file

### 2. Modified Files:
- `/css/basic.css` - Added Google Translate styling
- `/html/index.html` - Added Google Translate widget and scripts (example)

## Implementation Steps for Each HTML Page

### Step 1: Add the Google Translate Element to Navigation

In each HTML file, add this line inside the `<ul class="navbar-nav ms-auto">` section (inside the navbar):

```html
<li class="nav-item">
    <div id="google_translate_element"></div>
</li>
```

**Where to place it:**
```html
<ul class="navbar-nav ms-auto">
    <li class="nav-item">
        <a class="nav-link" href="index.html">Home</a>
    </li>
    <!-- ... other nav items ... -->
    <li class="nav-item">
        <a class="nav-link" href="contact.html">Contacts</a>
    </li>
    <!-- ADD THIS: -->
    <li class="nav-item">
        <div id="google_translate_element"></div>
    </li>
</ul>
```

### Step 2: Add Google Translate Scripts

At the **bottom** of each HTML file, just before the closing `</body>` tag, add these two script tags:

```html
<!-- Google Translate Script -->
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
<script src="../js/google-translate.js"></script>

</body>
</html>
```

## Files That Need Updates

You need to add the above code to all these HTML files:

1. ✅ index.html (DONE)
2. ⬜ about.html
3. ⬜ product.html
4. ⬜ contact.html
5. ⬜ feedback.html
6. ⬜ our-history.html
7. ⬜ production-process.html
8. ⬜ distribution.html
9. ⬜ our-future.html

## How It Works

1. **Google Translate API** is loaded from Google's servers
2. **googleTranslateElementInit()** function creates the translate widget
3. **Custom CSS** styles the widget to match your website design
4. **Custom JavaScript** hides unwanted Google branding and top bar

## Features

✅ **Two Languages**: English and Bahasa Indonesia only
✅ **Custom Styling**: Matches your website's purple gradient theme
✅ **No Google Banner**: Annoying top bar is hidden
✅ **Mobile Responsive**: Works well on all devices
✅ **Easy to Use**: Simple dropdown for language selection

## Customization Options

### Option 1: Dropdown (Current Implementation)
Users select language from a dropdown menu in the navigation bar.

### Option 2: Custom Buttons
If you prefer buttons instead of dropdown, replace the widget div with:

```html
<li class="nav-item">
    <div class="language-switcher">
        <button class="lang-btn" onclick="switchLanguage('en')">EN</button>
        <button class="lang-btn" onclick="switchLanguage('id')">ID</button>
    </div>
</li>
```

## Supported Languages

- **en** = English (default)
- **id** = Bahasa Indonesia

To add more languages, edit `/js/google-translate.js`:
```javascript
includedLanguages: 'en,id,zh-CN,ja', // Example: adds Chinese and Japanese
```

## Common Language Codes
- English: `en`
- Indonesian: `id`
- Chinese (Simplified): `zh-CN`
- Japanese: `ja`
- Korean: `ko`
- Spanish: `es`
- French: `fr`
- German: `de`

## Troubleshooting

### Widget Not Showing
1. Check if both script tags are added
2. Verify `google-translate.js` file path is correct
3. Check browser console for errors (F12)

### Translation Not Working
1. Wait 2-3 seconds after page load
2. Clear browser cache
3. Make sure internet connection is active

### Google Banner Still Showing
1. Clear browser cache
2. Hard refresh (Ctrl + F5)
3. Check if CSS is properly loaded

### Styling Issues
1. Make sure `basic.css` includes the Google Translate styles
2. Check if CSS file is properly linked
3. Clear browser cache

## Testing

1. Open any page with Google Translate
2. Select "Indonesian" from the dropdown
3. Page content should translate to Bahasa Indonesia
4. Switch back to "English" to return to original

## Browser Compatibility

✅ Chrome/Edge (Recommended)
✅ Firefox
✅ Safari
✅ Mobile browsers

## Notes

- Translation is done automatically by Google
- Quality may vary for technical terms
- First load might be slightly slower
- Translations are cached by browser
- Free to use (Google Translate API)

## Support

For issues or questions:
1. Check browser console for errors (F12)
2. Verify all file paths are correct
3. Ensure scripts load in correct order
4. Test with browser cache disabled

---

**Last Updated**: October 6, 2025
**Implementation Status**: Completed for index.html
**Remaining Pages**: 8 pages need script additions
