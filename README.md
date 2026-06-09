# Nagula Bhavani – Portfolio Website

A modern, responsive Cloud & DevOps portfolio website built using HTML5, CSS3, and Vanilla JavaScript. This portfolio showcases my skills, projects, certifications, and professional profile in a clean dark-mode interface.

---

## Features

* Responsive Design
* Modern Dark Theme UI
* Smooth Scroll Animations
* Typing Text Effect
* Animated Skill Counters
* Glassmorphism Design Elements
* Contact Form Integration Ready
* Easy Deployment on GitHub Pages, AWS, and Azure

---

## Project Structure

```text
portfolio/
│
├── index.html          # Main Portfolio Page
├── style.css           # Styles and Animations
├── script.js           # JavaScript Functionality
├── photo.jpg           # Profile Photo
├── README.md           # Project Documentation
└── Nagula_Bhavani_Cloud_Resume_NEW.docx
```

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Git & GitHub
* Azure
* AWS
* DevOps Fundamentals

---

## Local Setup

Clone the repository and open the project locally.

```bash
git clone https://github.com/bhavani-nagula/portfolio.git
cd portfolio
```

Open `index.html` in any modern browser.

No build process or dependencies are required.

---

## GitHub Deployment

### Initialize Repository

```bash
git init
git add .
git commit -m "Initial Portfolio Commit"
```

### Connect Remote Repository

```bash
git remote add origin https://github.com/bhavani-nagula/portfolio.git
git branch -M main
git push -u origin main
```

### Enable GitHub Pages

1. Open Repository Settings
2. Click Pages
3. Select:

   * Source: Deploy from Branch
   * Branch: main
   * Folder: /root
4. Save

GitHub will generate a public website URL.

---

## Output URL

### GitHub Pages

```text
https://bhavani-nagula.github.io/portfolio/
```

---

## AWS S3 Static Website Hosting

### Create Bucket

```bash
aws s3 mb s3://bhavani-portfolio
```

### Enable Website Hosting

```bash
aws s3 website s3://bhavani-portfolio \
  --index-document index.html \
  --error-document index.html
```

### Upload Files

```bash
aws s3 sync . s3://bhavani-portfolio --exclude "*.md"
```

### Output URL

```text
http://bhavani-portfolio.s3-website-<region>.amazonaws.com
```

---

## Azure Storage Static Website Hosting

### Create Storage Account

```bash
az storage account create \
  --name bhavaniportfolio \
  --resource-group myRG \
  --location eastus \
  --sku Standard_LRS \
  --kind StorageV2
```

### Enable Static Website

```bash
az storage blob service-properties update \
  --account-name bhavaniportfolio \
  --static-website \
  --index-document index.html
```

### Upload Files

```bash
az storage blob upload-batch \
  --account-name bhavaniportfolio \
  --source . \
  --destination '$web'
```

### Output URL

```text
https://<storage-account-name>.z13.web.core.windows.net
```

Example:

```text
https://bhavaniportfolio.z13.web.core.windows.net
```

---

## Adding a Profile Photo

Place your profile image in the project root folder as:

```text
photo.jpg
```

Replace the existing avatar with:

```html
<img src="photo.jpg"
     alt="Nagula Bhavani"
     style="width:100%;height:100%;object-fit:cover;border-radius:50%;">
```

---

## Contact Form Integration

The current contact form uses a demo JavaScript handler.

You can connect it with:

* Formspree
* EmailJS
* Azure Functions
* AWS Lambda
* Node.js Backend API

---

## Author

Nagula Bhavani

Cloud & DevOps Engineer

GitHub:
https://github.com/bhavani-nagula

Portfolio:
https://portfoliostorage07.z8.web.core.windows.net/
