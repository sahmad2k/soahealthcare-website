# SOA Healthcare - GitHub Pages Deployment Guide

## Overview
This guide will help you deploy the SOA Healthcare website to GitHub Pages with your custom domain soahealthcare.net.

## Prerequisites
- GitHub account (free)
- Access to your domain DNS settings (soahealthcare.net)
- Basic computer skills

## Step 1: Create GitHub Repository

1. **Go to** github.com and sign in/create account
2. **Click** the "+" icon in top right → "New repository"
3. **Repository name:** `soahealthcare-website`
4. **Description:** `SOA Healthcare consulting website`
5. **Make it public** ✅ (required for GitHub Pages)
6. **Don't** initialize with README
7. **Click** "Create repository"

## Step 2: Upload Website Files

### Option A: Upload via Web Interface (Easiest)
1. **Go to** your new repository page
2. **Click** "uploading an existing file"
3. **Drag and drop** all files from the website folder:
   - `index.html`
   - `services.html`
   - `appointment.html`
   - `main.js`
   - `resources/` folder (with all images)
4. **Commit message:** "Initial website upload"
5. **Click** "Commit changes"

### Option B: Upload via Git (Advanced)
```bash
# Clone your repository
git clone https://github.com/YOUR_USERNAME/soahealthcare-website.git

# Copy all website files to the repository folder
cp -r /path/to/website/files/* soahealthcare-website/

# Add and commit files
cd soahealthcare-website
git add .
git commit -m "Initial website upload"
git push origin main
```

## Step 3: Enable GitHub Pages

1. **Go to** your repository page
2. **Click** "Settings" tab
3. **Scroll down** to "Pages" section in left sidebar
4. **Source:** Select "Deploy from a branch"
5. **Branch:** Select "main" / "master"
6. **Folder:** Select "/ (root)"
7. **Click** "Save"

Your website will be live at: `https://YOUR_USERNAME.github.io/soahealthcare-website`

## Step 4: Connect Custom Domain (soahealthcare.net)

### In GitHub:
1. **Still in** Settings → Pages
2. **Custom domain:** Enter `soahealthcare.net`
3. **Click** "Save"
4. **Check** "Enforce HTTPS" ✅

### In Your Domain Provider:
You need to add these DNS records:

**For Apex Domain (soahealthcare.net):**
```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153

Type: A
Name: @ (or leave blank)  
Value: 185.199.109.153

Type: A
Name: @ (or leave blank)
Value: 185.199.110.153

Type: A
Name: @ (or leave blank)
Value: 185.199.111.153
```

**For WWW (www.soahealthcare.net):**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

### DNS Propagation
- **Wait** 24-48 hours for DNS changes to take effect
- **Check** GitHub Pages settings - it will show when domain is verified
- **Test** both soahealthcare.net and www.soahealthcare.net

## Step 5: Verify Everything Works

1. **Visit** soahealthcare.net - should show your website
2. **Test** all pages load correctly
3. **Test** the booking calendar
4. **Test** form submissions go to your Google Form
5. **Test** mobile responsiveness

## Troubleshooting

### Website Not Loading:
- Check if GitHub Pages is enabled in settings
- Verify files are in the main branch
- Check custom domain DNS settings

### Domain Not Working:
- Wait longer for DNS propagation
- Check DNS records are correct
- Verify domain in GitHub Pages settings

### Forms Not Working:
- Check Google Form ID in the code
- Verify form is accepting responses
- Test form submission directly

## Maintenance

### Updating Website:
1. **Make changes** to your local files
2. **Upload** new files to GitHub repository
3. **GitHub Pages** will automatically update (takes 1-10 minutes)

### Regular Checks:
- Monthly: Test all functionality
- Quarterly: Check for any GitHub changes
- Annually: Review and update content

## Support

If you need help:
1. **GitHub Documentation:** docs.github.com/pages
2. **Community:** GitHub Community Forum
3. **Contact:** GitHub Support

## Features Preserved

✅ **Interactive Calendar Booking** - Fully functional
✅ **Multi-step Forms** - All validation preserved  
✅ **Animations & Effects** - All JavaScript works
✅ **Responsive Design** - Mobile-friendly
✅ **Fast Loading** - Global CDN
✅ **SSL Security** - HTTPS automatically enabled
✅ **Custom Domain** - Professional soahealthcare.net

## Cost: $0
- GitHub Pages: Free
- Custom domain: You already own soahealthcare.net
- SSL certificate: Free with GitHub Pages
- No ongoing hosting costs

Your website will be live on soahealthcare.net with all interactive features working exactly as they do now!