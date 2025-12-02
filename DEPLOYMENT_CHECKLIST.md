# SOA Healthcare Website Deployment Checklist

## Pre-Deployment ✅
- [ ] Download all website files
- [ ] Create GitHub account
- [ ] Have access to soahealthcare.net DNS settings

## Step 1: GitHub Setup
- [ ] Create new repository: `soahealthcare-website`
- [ ] Make repository public
- [ ] Upload all website files
- [ ] Enable GitHub Pages in Settings → Pages

## Step 2: Domain Connection
- [ ] Add custom domain `soahealthcare.net` in GitHub Pages settings
- [ ] Update DNS records at domain provider
- [ ] Add A records for GitHub Pages IPs
- [ ] Add CNAME record for www subdomain
- [ ] Enable HTTPS enforcement

## Step 3: Testing
- [ ] Test website loads at soahealthcare.net
- [ ] Verify all pages work (/, /services.html, /appointment.html)
- [ ] Test interactive calendar booking
- [ ] Test form submissions go to Google Form
- [ ] Check mobile responsiveness
- [ ] Verify contact information displays correctly

## Step 4: Google Form Setup
- [ ] Create Google Form matching website fields
- [ ] Enable email notifications to ceo@soahealthcare.net
- [ ] Test form submission from website
- [ ] Verify data appears in Google Sheets

## Step 5: Final Verification
- [ ] SSL certificate working (https://)
- [ ] All images loading correctly
- [ ] JavaScript functionality working
- [ ] Contact form sending to correct email
- [ ] Website performs well on mobile

## Files to Upload:
- [ ] `index.html`
- [ ] `services.html` 
- [ ] `appointment.html`
- [ ] `main.js`
- [ ] `resources/` folder with all images
- [ ] `README.md`

## DNS Records to Add:
```
Type: A, Name: @, Value: 185.199.108.153
Type: A, Name: @, Value: 185.199.109.153  
Type: A, Name: @, Value: 185.199.110.153
Type: A, Name: @, Value: 185.199.111.153
Type: CNAME, Name: www, Value: YOUR_USERNAME.github.io
```

## Expected Timeline:
- GitHub setup: 30 minutes
- File upload: 15 minutes  
- Domain connection: 24-48 hours (DNS propagation)
- Testing: 30 minutes

## Support Resources:
- GitHub Pages Documentation: docs.github.com/pages
- GitHub Community Forum: github.community
- Domain Provider Support: Contact your domain registrar

---

**Total Cost: $0** (GitHub Pages is free, you already own the domain)