# PDF Files for Portfolio

This folder contains all the PDF files used in your portfolio.

## Current Files

### ✅ Working Files
- `cv.pdf` - Your main CV/Resume (already set up and working!)
- `DOC-20251003-WA0021._20251104_132447_0000.pdf` - Original CV file
- `sample-cv.pdf` - Sample CV file

### 📋 Certificate Placeholders Needed
To add your certificates, simply place your PDF files here with these exact names:

1. `aws-developer-certificate.pdf`
2. `react-advanced-certificate.pdf`  
3. `fullstack-web-certificate.pdf`
4. `nodejs-ibm-certificate.pdf`
5. `typescript-fundamentals-certificate.pdf`

## How It Works

### CV Functionality
- **View CV**: Click "View My CV" button → Opens PDF in modal viewer
- **Download CV**: Click "Download CV" button → Downloads PDF directly
- **Navigation**: CV link in navbar → Opens PDF in modal viewer

### Certificate Functionality  
- Each certificate has a "View" button that opens the PDF in the modal
- If PDF doesn't exist, shows helpful error message
- Easy to add - just drop your PDF files with the correct names

### PDF Modal Features
- **View**: Full-screen PDF viewer
- **Download**: Download button in modal header
- **Open in New Tab**: External link button in modal header
- **Close**: X button or click outside modal

## Adding Your Files

1. **For CV**: Already done! Your CV is working as `cv.pdf`

2. **For Certificates**: 
   - Save your certificate PDFs with the exact names listed above
   - Drop them in this `pdfs` folder
   - They'll work automatically!

3. **For Additional PDFs**:
   - Add any PDF to this folder
   - Use `openCustomPDF('filename.pdf', 'Title')` function in your code

## File Structure
```
pdfs/
├── cv.pdf (✅ Your CV - Working!)
├── aws-developer-certificate.pdf (📋 Add your certificate)
├── react-advanced-certificate.pdf (📋 Add your certificate)  
├── fullstack-web-certificate.pdf (📋 Add your certificate)
├── nodejs-ibm-certificate.pdf (📋 Add your certificate)
└── typescript-fundamentals-certificate.pdf (📋 Add your certificate)
```

## Tips
- Keep PDF file sizes reasonable (under 5MB) for faster loading
- Use descriptive filenames
- Test the "View" functionality after adding new files
- The system automatically handles file existence checking