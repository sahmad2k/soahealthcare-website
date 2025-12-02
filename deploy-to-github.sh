#!/bin/bash

# SOA Healthcare Website Deployment Script
# This script helps deploy the website to GitHub Pages

echo "🚀 SOA Healthcare Website Deployment"
echo "======================================"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if repository exists
if [ ! -d ".git" ]; then
    echo "❌ Not a git repository. Please initialize first."
    echo "   Run: git init"
    exit 1
fi

# Check if remote exists
if ! git remote get-url origin &> /dev/null; then
    echo "❌ No remote repository set. Please add your GitHub repository."
    echo "   Run: git remote add origin https://github.com/YOUR_USERNAME/soahealthcare-website.git"
    exit 1
fi

# Add all files
echo "📁 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Update website files"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Deployment complete!"
echo "🌐 Your website will be live at: https://YOUR_USERNAME.github.io/soahealthcare-website"
echo "🔗 After domain setup: https://soahealthcare.net"

# Check if GitHub Pages is enabled
echo ""
echo "📋 Next Steps:"
echo "1. Go to your GitHub repository settings"
echo "2. Navigate to 'Pages' section"
echo "3. Enable GitHub Pages if not already enabled"
echo "4. Add custom domain: soahealthcare.net"
echo "5. Update DNS records as per deployment guide"