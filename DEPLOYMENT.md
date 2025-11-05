# 🚀 Netlify Deployment Guide

Follow these steps to deploy your portfolio to Netlify.

## Method 1: Deploy via GitHub (Recommended)

### Step 1: Push to GitHub
1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### Step 2: Deploy on Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with your GitHub account
3. Click "New site from Git"
4. Choose GitHub and authorize Netlify
5. Select your portfolio repository
6. Configure build settings:
   - **Build command**: Leave empty
   - **Publish directory**: `.` (dot for root)
7. Click "Deploy site"

### Step 3: Custom Domain (Optional)
1. In Netlify dashboard, go to "Domain settings"
2. Add your custom domain
3. Follow DNS configuration instructions

## Method 2: Manual Deploy

### Step 1: Prepare Files
Make sure you have these files in your root directory:
- `portfolio.html`
- `portfolio-script.js`
- `portfolio-styles.css`
- `index.html`
- `netlify.toml`
- `_redirects`
- `pdfs/` folder with your CV
- Your profile image

### Step 2: Drag & Drop Deploy
1. Go to [netlify.com](https://netlify.com)
2. Scroll down to "Want to deploy a new site without connecting to Git?"
3. Drag your entire project folder to the deploy area
4. Wait for deployment to complete

## 📋 Pre-Deployment Checklist

- [ ] All personal information updated in `portfolio-script.js`
- [ ] CV PDF added to `pdfs/cv.pdf`
- [ ] Profile image exists and is referenced correctly
- [ ] All project links are working
- [ ] Contact information is correct
- [ ] Test the site locally by opening `portfolio.html`

## 🔧 Configuration Files

### `netlify.toml`
- Handles redirects and headers
- Optimizes PDF serving
- Sets up security headers

### `_redirects`
- Fallback redirect configuration
- Ensures all routes serve your portfolio

### `index.html`
- Entry point that redirects to `portfolio.html`
- Provides fallback for direct access

## 🚀 Post-Deployment

After successful deployment:

1. **Test Your Site**
   - Check all sections load correctly
   - Test CV viewer functionality
   - Verify all links work
   - Test on mobile devices

2. **Update Links**
   - Add your Netlify URL to your GitHub profile
   - Update your CV with the portfolio link
   - Share on social media

3. **Monitor Performance**
   - Use Netlify Analytics
   - Check Google PageSpeed Insights
   - Monitor for any errors in Netlify logs

## 🔄 Updates

To update your deployed site:

**If using GitHub:**
- Push changes to your repository
- Netlify will auto-deploy

**If using manual deploy:**
- Make changes locally
- Drag & drop the updated folder to Netlify

## 🆘 Troubleshooting

### Common Issues:

1. **404 Errors**: Check `_redirects` file is in root
2. **PDF Not Loading**: Ensure PDFs are in `pdfs/` folder
3. **Images Not Showing**: Check file paths and names
4. **CSS Not Loading**: Verify file names match exactly

### Getting Help:
- Check Netlify deploy logs
- Verify all file paths are correct
- Test locally first
- Contact Netlify support if needed

## 📱 Mobile Testing

Test your deployed site on:
- iPhone Safari
- Android Chrome
- iPad
- Various screen sizes

Your portfolio should be fully responsive and work perfectly on all devices!

---

🎉 **Congratulations! Your portfolio is now live on the web!**