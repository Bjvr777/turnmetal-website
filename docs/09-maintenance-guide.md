Here is the complete **`09-maintenance-guide.md`** documentation file formatted inside a single code block so you can copy the entire file with one click:

```markdown
# 09 - Maintenance Guide

# Turn-Metal Website Maintenance & Operations Guide

Version: 1.0  
Status: Approved for Development  

---

# Overview

This guide provides operational procedures for maintaining, updating, and managing the **Turn-Metal Engineering (Pty) Ltd.** corporate website after initial launch. 

Following these procedures ensures that the website remains secure, fast, accurate, and functional for clients, plant engineers, and internal management.

---

# Content Update Procedures

### 1. Adding a New Project to the Gallery (`/projects`)
All project showcase items are configured within a single central data file located at `src/data/projects.js`.

To add a new completed machining job, conveyor build, or plant maintenance project:
1. Optimize project photos (convert to `.webp` format, max resolution `1200x800px`, file size under 150KB).
2. Save the image into `public/images/projects/`.
3. Open `src/data/projects.js` and append a new entry to the array:

```javascript
{
  id: "proj-005",
  title: "Custom Head & Tail Drum Fabrication",
  category: "Machining", // Options: "Machining", "Conveyors", "Maintenance"
  clientIndustry: "Flour Milling",
  description: "Precision turned and balanced elevator drums with vulcanized rubber lagging for a local flour mill.",
  image: "/images/projects/elevator-drums.webp",
  date: "2026-06"
}

```

4. Save and push changes to GitHub (`git push origin main`) to publish automatically.

---

### 2. Updating Contact Info, Operating Hours, or Staff

Global company details (phone numbers, email addresses, shop location) are stored centrally in `src/data/companyInfo.js`. Updating this single file automatically updates the Navbar, Footer, Contact Page, and SEO metadata across the entire site.

---

# Dependency & System Updates

To maintain peak frontend security and browser compatibility, run routine maintenance checks every quarter.

### Routine Maintenance Terminal Commands

```bash
# Check for outdated NPM dependencies
npm outdated

# Test local build for errors before updating
npm run build

# Update safe minor version dependencies
npm update

```

> **Warning:** Major framework upgrades (e.g., updating React or Tailwind to a major new version) should be performed in a separate git branch before merging into `main`.

---

# Email & Quote Form Monitoring

The website utilizes client-side API integrations (EmailJS / Web3Forms) to deliver quote requests to the company inbox.

* **Monthly Check:** Submit a test request on the `/quote` page to verify message delivery and form response time.
* **API Key Maintenance:** If company email addresses change, update the environment variables inside your **Vercel Project Settings** (`Settings` -> `Environment Variables`) rather than editing source code.

---

# Domain & Hosting Management

* **SSL Certificates:** Managed automatically by Vercel; no manual renewal required.
* **Domain Registration:** Ensure the domain (`turnmetal.co.za`) is set to **Auto-Renew** with your domain registrar to prevent accidental site downtime.
* **Backup Strategy:** The full website source code, design system, and project assets are safely version-controlled and backed up on GitHub.

---

# Emergency Rollback Procedure

If an unintended code change breaks the live website, Vercel allows instant 1-click rollbacks:

1. Log into **[Vercel Dashboard](https://vercel.com/dashboard)** and select `turn-metal-website`.
2. Go to the **Deployments** tab.
3. Locate the last known stable deployment.
4. Click the **`...`** menu icon next to it and select **Promote to Production**.

The live site will instantly revert to the selected stable version within 5 seconds.

---

Document Owner: Turn-Metal Engineering (Pty) Ltd.

Next Step: **Initialize Repository & React + Tailwind Project Setup**

```

```
site update
git add .
git commit -m "Updated website text/images"
git push