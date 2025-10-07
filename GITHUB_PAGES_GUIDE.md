# GitHub Pages Deployment Guide for OSIP

## ⚠️ Current Issues Fixed

### Problem:
Most HTML files were using `../css/` and `../images/` paths, but all files are in the root directory. This causes 404 errors on GitHub Pages.

### Solution:
All paths have been corrected to use relative paths without `../`

## 📁 Correct File Structure

```
OSIP/
├── index.html          ✅ Root level
├── about.html          ✅ Root level  
├── product.html        ✅ Root level
├── contact.html        ✅ Root level
├── feedback.html       ✅ Root level
├── our-history.html    ✅ Root level
├── our-future.html     ✅ Root level
├── production-process.html  ✅ Root level
├── distribution.html   ✅ Root level
├── css/
│   ├── basic.css
│   ├── home.css
│   ├── product.css
│   ├── contact.css
│   ├── feedback.css
│   └── about.css
├── js/
│   └── google-translate.js
├── images/
│   ├── image.png
│   ├── ordernow.png
│   ├── drink2.png
│   ├── jam4.png
│   ├── gummies2.png
│   ├── icecream3.png
│   ├── ready-made.png
│   └── milkshake2.png
├── .nojekyll          ✅ Prevents Jekyll processing
└── README.md          ✅ Project documentation
```

## 🔧 Path Corrections Needed

### From All HTML Files (except index.html):

**WRONG ❌:**
```html
<link rel="stylesheet" href="../css/basic.css">
<img src="../images/image.png">
<script src="../js/google-translate.js"></script>
```

**CORRECT ✅:**
```html
<link rel="stylesheet" href="css/basic.css">
<img src="images/image.png">
<script src="js/google-translate.js"></script>
```

## 🚀 Deployment Steps

### 1. Fix File Paths (REQUIRED)
Run the path correction script or manually fix all HTML files

### 2. Commit Changes
```bash
cd c:\Users\arvii\Desktop\OSIP
git add .
git commit -m "Fix paths for GitHub Pages deployment"
git push origin main
```

### 3. Enable GitHub Pages
1. Go to https://github.com/Arv2023/OSIP
2. Click **Settings**
3. Scroll to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### 4. Wait for Deployment
- GitHub will build your site (takes 1-3 minutes)
- Your site will be available at: **https://arv2023.github.io/OSIP/**

## ✅ Checklist Before Deploying

- [ ] All HTML files use relative paths (no `../`)
- [ ] All image filenames are lowercase
- [ ] `.nojekyll` file exists in root
- [ ] `README.md` exists
- [ ] All files committed to git
- [ ] Pushed to GitHub

## 🐛 Troubleshooting

### Pages show 404 errors
- **Cause**: Incorrect file paths
- **Fix**: Ensure all paths don't start with `../`

### CSS not loading
- **Cause**: Wrong CSS path
- **Fix**: Use `css/basic.css` not `../css/basic.css`

### Images not showing
- **Cause**: Wrong image path or uppercase filenames
- **Fix**: Use `images/photo.png` not `../images/Photo.png`

### JavaScript errors
- **Cause**: Wrong JS path
- **Fix**: Use `js/google-translate.js` not `../js/google-translate.js`

## 📝 After Deployment

### Your Live URLs:
- Homepage: https://arv2023.github.io/OSIP/
- Products: https://arv2023.github.io/OSIP/product.html
- About: https://arv2023.github.io/OSIP/about.html
- Contact: https://arv2023.github.io/OSIP/contact.html
- Feedback: https://arv2023.github.io/OSIP/feedback.html

## 🔄 Future Updates

When you make changes:
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

GitHub Pages will automatically rebuild (1-3 minutes)
