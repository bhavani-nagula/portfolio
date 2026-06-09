# Nagula Bhavani – Portfolio Website

A modern, dark-mode Cloud & DevOps portfolio built with pure HTML5 / CSS3 / Vanilla JS.

## Folder Structure
```
bhavani-portfolio/
├── index.html       ← Main page
├── style.css        ← All styles (CSS variables, glassmorphism, animations)
├── script.js        ← Typing effect, scroll animations, counters, form
└── README.md        ← This file
```

---

## Local Preview
Simply open `index.html` in any modern browser — no build step required.

---

## Deployment

### 1. GitHub Pages (free, easiest)
```bash
# 1. Create a GitHub repo named: bhavaninagula.github.io
# 2. Push all three files to the main branch
git init
git add .
git commit -m "init portfolio"
git remote add origin https://github.com/bhavaninagula/bhavaninagula.github.io.git
git push -u origin main
# 3. Your site is live at https://bhavaninagula.github.io
```

### 2. AWS S3 Static Website Hosting
```bash
# 1. Create a bucket with the same name as your domain (or any name)
aws s3 mb s3://bhavani-portfolio

# 2. Enable static website hosting
aws s3 website s3://bhavani-portfolio \
  --index-document index.html \
  --error-document index.html

# 3. Set public read policy
aws s3api put-bucket-policy --bucket bhavani-portfolio \
  --policy '{"Version":"2012-10-17","Statement":[{"Sid":"PublicRead","Effect":"Allow","Principal":"*","Action":"s3:GetObject","Resource":"arn:aws:s3:::bhavani-portfolio/*"}]}'

# 4. Upload files
aws s3 sync . s3://bhavani-portfolio --exclude "*.md"

# Site URL: http://bhavani-portfolio.s3-website.<region>.amazonaws.com
# (Add CloudFront + ACM certificate for HTTPS and custom domain)
```

### 3. Azure Storage Static Website
```bash
# 1. Create a storage account
az storage account create \
  --name bhavaniportfolio \
  --resource-group myRG \
  --location eastus \
  --sku Standard_LRS \
  --kind StorageV2

# 2. Enable static website
az storage blob service-properties update \
  --account-name bhavaniportfolio \
  --static-website \
  --index-document index.html

# 3. Upload files
az storage blob upload-batch \
  --account-name bhavaniportfolio \
  --source . \
  --destination '$web' \
  --pattern "*.html" --pattern "*.css" --pattern "*.js"

# 4. Get the public URL
az storage account show \
  --name bhavaniportfolio \
  --resource-group myRG \
  --query "primaryEndpoints.web"
```

---

## Adding a Real Profile Photo
Replace the SVG avatar inside `.hero-photo` with:
```html
<img src="photo.jpg" alt="Nagula Bhavani" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />
```
And place `photo.jpg` in the same folder.

## Connecting the Contact Form
Replace the `setTimeout` mock in `script.js` with a real POST to:
- [Formspree](https://formspree.io) (free tier)
- [EmailJS](https://emailjs.com)
- Your own Azure Function / AWS Lambda endpoint
