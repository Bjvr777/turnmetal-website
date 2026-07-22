# 07 - Deployment Guide

# Turn-Metal Website Deployment Guide

Version: 1.0  
Status: Approved for Development  

---

# Overview

This document provides step-by-step instructions for deploying, updating, and maintaining the **Turn-Metal Engineering (Pty) Ltd.** website. 

The application is deployed using a modern, automated continuous deployment pipeline:
1. **GitHub** hosts the source code repository.
2. **Vercel** automatically builds and serves the frontend application with global CDN performance and built-in SSL.

---

# Prerequisites

Before initiating deployment, ensure you have:
* A **GitHub Account** holding the official `turn-metal-website` repository.
* A **Vercel Account** linked to your GitHub account.
* Access to your domain registrar DNS settings (for linking `turnmetal.co.za` or your chosen domain).

---

# Step 1: Push Code to GitHub

Ensure all your latest local changes, images, and documentation are committed and pushed to your main GitHub branch.

```bash
# Verify modified files
git status

# Stage all files
git add .

# Commit changes
git commit -m "Build: Initial complete production ready site"

# Push to GitHub
git push origin main

```

---

# Step 2: Connect Repository to Vercel

1. Log into your **[Vercel Dashboard](https://vercel.com/dashboard)**.
2. Click **"Add New..."** -> **"Project"**.
3. Select your GitHub account and import the **`turn-metal-website`** repository.
4. Configure Project Settings:
* **Framework Preset:** `Vite`
* **Root Directory:** `./`
* **Build Command:** `npm run build`
* **Output Directory:** `dist`


5. Click **"Deploy"**.

Vercel will build your React application and generate a live preview URL (e.g., `turn-metal-website.vercel.app`).

---

# Step 3: Configure Form Email Keys (Environment Variables)

To allow quote requests and contact form submissions to deliver directly to your inbox without exposing private API keys in client-side code:

1. In your Vercel Project Settings, navigate to **Settings** -> **Environment Variables**.
2. Add your form service credentials (e.g., EmailJS or Web3Forms):
* `VITE_FORM_ACCESS_KEY` = `your_form_access_key_here`
* `VITE_RECEIVER_EMAIL` = `info@turnmetal.co.za`


3. Save the variables and trigger a redeployment.

---

# Step 4: Link Custom Domain (`turnmetal.co.za`)

To connect your official company web domain:

1. In Vercel, go to **Settings** -> **Domains**.
2. Type in your domain name (e.g., `turnmetal.co.za` and `www.turnmetal.co.za`) and click **Add**.
3. Log into your domain DNS provider (e.g., Hetzner, Domains.co.za, or Namecheap) and add the records provided by Vercel:

| Type | Name | Target / Value |
| --- | --- | --- |
| **A Record** | `@` | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com.` |

4. Once DNS propagation finishes (typically 5 to 30 minutes), Vercel will automatically issue a free, auto-renewing **SSL/TLS Certificate (HTTPS)**.

---

# Step 5: Post-Deployment Verification Checklist

Once the live domain is active, perform the following verification checks:

* [ ] **SSL Security:** Confirm the site displays a secure padlock icon (`https://`).
* [ ] **Form Submissions:** Submit a test inquiry via the `/quote` page and confirm receipt in the company inbox.
* [ ] **WhatsApp Button:** Click the floating WhatsApp button on a mobile phone to confirm it opens direct messaging with the correct shop number.
* [ ] **Navigation & Routing:** Click through all pages (`/about`, `/services`, `/industries`, `/projects`, `/quote`, `/contact`) to ensure no broken 404 links occur on page refresh.
* [ ] **Mobile Responsiveness:** Test UI layout across mobile, tablet, and desktop screens.

---

# Ongoing Site Updates & Maintenance

Because continuous integration is active, updating your website in the future requires just two steps:

1. Edit your React code or text locally on your computer.
2. Commit and push changes to GitHub (`git push origin main`).

Vercel will detect the push, build the updated site, and make the changes live automatically within 60 seconds.

---

Document Owner: Turn-Metal Engineering (Pty) Ltd.



```

```