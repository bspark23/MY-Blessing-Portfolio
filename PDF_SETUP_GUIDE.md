# PDF Setup Guide for Portfolio

## 📁 File Structure
```
portfolio/
├── pdfs/
│   ├── blessing-mbata-cv.pdf          (Your CV/Resume)
│   ├── aws-developer-certificate.pdf   (AWS Certificate)
│   ├── react-advanced-certificate.pdf  (React Certificate)
│   ├── fullstack-web-certificate.pdf   (Full Stack Certificate)
│   ├── nodejs-ibm-certificate.pdf      (Node.js Certificate)
│   └── typescript-fundamentals-certificate.pdf (TypeScript Certificate)
├── portfolio.html
├── portfolio-script.js
└── portfolio-styles.css
```

## 🚀 How to Add Your PDFs

### Step 1: Prepare Your PDF Files
1. **CV/Resume**: Name it `blessing-mbata-cv.pdf`
2. **Certificates**: Use the exact names listed above
3. **File Size**: Keep under 5MB for faster loading
4. **Optimization**: Ensure PDFs are optimized for web viewing

### Step 2: Add Files to pdfs Folder
1. Copy your PDF files to the `pdfs/` folder
2. Make sure filenames match exactly (case-sensitive)
3. No spaces or special characters in filenames

### Step 3: Test the Functionality
1. Open `portfolio.html` in your browser
2. Click "View My CV" button to test CV viewing
3. Click "View" buttons on certificates to test certificate viewing

## 🎯 Features Included

### ✅ CV Viewing
- **Button Location**: Hero section "View My CV" button
- **File**: `./pdfs/blessing-mbata-cv.pdf`
- **Modal**: Opens in full-screen PDF viewer

### ✅ Certificate Viewing
- **Button Location**: Certificate cards "View" buttons
- **Files**: Individual certificate PDFs
- **Modal**: Opens in full-screen PDF viewer with proper titles

### ✅ Error Handling
- **Missing Files**: Shows user-friendly error message
- **Loading States**: Displays loading spinner while PDF loads
- **File Validation**: Checks if PDF exists before loading

### ✅ User Experience
- **Full Screen**: PDFs open in modal overlay
- **Responsive**: Works on desktop and mobile
- **Close Options**: Click X button or outside modal to close
- **Loading Feedback**: Visual feedback during PDF loading

## 🛠 Customization Options

### Add New PDF Categories
```javascript
// In portfolio-script.js, add to openCustomPDF function
function openCustomPDF(filename, title) {
    const pdfPath = `./pdfs/${filename}`;
    openPDFModal(pdfPath, title);
}

// Usage example:
// <button onclick="openCustomPDF('my-portfolio.pdf', 'My Portfolio')">View Portfolio</button>
```

### Update CV Path
```javascript
// In portfolio-script.js, update openCV function
function openCV() {
    const cvPath = './pdfs/your-cv-filename.pdf';
    openPDFModal(cvPath, 'Your Name - CV');
}
```

## 📱 Browser Compatibility
- ✅ Chrome, Firefox, Safari, Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ PDF.js fallback for unsupported browsers

## 🔧 Troubleshooting

### PDF Not Loading?
1. Check filename spelling (case-sensitive)
2. Ensure PDF is in `pdfs/` folder
3. Verify PDF file is not corrupted
4. Check browser console for errors

### PDF Too Large?
1. Compress PDF using online tools
2. Optimize for web viewing
3. Keep under 5MB for best performance

### Mobile Issues?
1. Test on actual mobile devices
2. Ensure PDFs are mobile-optimized
3. Check touch interactions work properly

## 🎨 Styling Customization
The PDF modal styling can be customized in `portfolio-styles.css`:
- `.pdf-modal`: Main modal container
- `.pdf-modal-content`: Modal content area
- `.pdf-modal-header`: Header with title and close button
- `.pdf-modal-body`: PDF viewing area
- `.pdf-loading`: Loading indicator styles

## 📞 Support
If you need help setting up PDFs or encounter issues:
1. Check this guide first
2. Verify file paths and names
3. Test in different browsers
4. Check browser developer console for errors