# 03 - Site Map & Information Architecture

# Turn-Metal Website Site Map

Version: 1.0

Status: Approved for Development

---

# Architecture Overview

The website is structured as a modern, multi-page web application built with **React** and **React Router** for fast, seamless client-side navigation.

The architecture prioritizes clear navigation for industrial procurement managers and plant engineers, ensuring any service or contact form is accessible within **two clicks**.

---

# Web Pages & URL Structure

```
turnmetal.co.za/
│
├── /                       ---> Home Page
├── /about                  ---> About Us
├── /services               ---> Core Services (Overview)
│   ├── /services/machining          ---> Precision Machining
│   ├── /services/equipment          ---> Equipment Manufacturing
│   ├── /services/conveyors          ---> Screw Conveyors & Elevators
│   └── /services/maintenance        ---> On-Site Plant Maintenance
├── /industries             ---> Industries We Serve
├── /projects               ---> Project Showcase & Gallery
├── /quote                  ---> Request a Quote (Interactive Form)
└── /contact                ---> Contact Us & Workshop Location

```

---

# Detailed Page Layouts & Component Breakdown

### 1. Home Page (`/`)

* **Header / Navigation:** Logo badge, nav links, "Call Us" link, and gold "Request a Quote" button.
* **Hero Section:** High-impact industrial headline, value proposition, quick stats badge (Precision / Reliability), and primary CTA buttons.
* **Core Capabilities Summary:** 4 quick cards for Machining, Manufacturing, Screw Conveyors, and On-site Maintenance.
* **Industry Focus Banner:** Highlighting Milling, Grain, Silos, and Agricultural Processing.
* **Why Choose Turn-Metal:** Key differentiators (Precision standards, minimal downtime, specialized industry expertise).
* **Recent Projects Preview:** 3 featured project cards with high-quality photos and key specs.
* **Call to Action (CTA) Banner:** Prompting visitors to submit engineering drawings or schedule on-site maintenance.
* **Footer:** Contact details, workshop address, quick links, and legal notice.

---

### 2. About Us (`/about`)

* **Page Header:** Corporate overview banner.
* **Company Profile:** Introduction to Turn-Metal Engineering (Pty) Ltd.
* **Vision & Mission:** Embedded principles from `01-vision.md`.
* **Core Values Grid:** Precision, Reliability, Integrity, Quality, Innovation, Safety.
* **Growth & Manufacturing Expansion Plan:** Future focus on complete Bucket Elevator Systems.

---

### 3. Services (`/services`)

* **Overview Hero:** Highlighting end-to-end engineering solutions.
* **Service Detail Cards:**
1. **Precision Machining:** CNC/Lathe turning, shaft manufacturing, custom milling components.
2. **Mechanical Equipment Manufacturing:** Custom agricultural & industrial components.
3. **Material Handling Systems:** Screw conveyor manufacturing, bucket elevator drum fabrication.
4. **On-Site Plant Maintenance:** Roller changes for milling plants, emergency breakdown repairs, wear-and-tear servicing.


* **Technical Specifications Callout:** High-tolerance capabilities and turnaround standards.

---

### 4. Industries We Serve (`/industries`)

* **Target Industry Cards:**
* Flour Mills & Maize Mills
* Feed Mills & Animal Nutrition
* Grain Silos & Storage Facilities
* Agricultural Processing Plants
* General Food Manufacturing Plants


* **Custom Engineering Focus:** Tailoring solutions to high-wear grain handling environments.

---

### 5. Projects & Gallery (`/projects`)

* **Filterable Gallery:** Filter by category (*Machining*, *Conveyors*, *Maintenance*, *Custom Builds*).
* **Project Cards:** Image, project title, industry, and solution summary.
* **Case Study Modal / Drawer (Optional):** Detailed breakdown of specific equipment overhauls or custom fabrications.

---

### 6. Request a Quote (`/quote`)

* **Multi-Step / Intuitive Form:**
* **Contact Details:** Name, Company, Email, Phone, Location.
* **Service Required:** Select from Machining, Conveyors, Maintenance, or Custom Manufacturing.
* **Project Description:** Text box for requirements and dimensions.
* **Drawing / File Upload (Optional):** Attach technical CAD/PDF drawings or site photos.


* **Direct WhatsApp Quote Link:** Quick option to send inquiries straight to WhatsApp.

---

### 7. Contact Us (`/contact`)

* **Contact Details:** Phone numbers, direct email addresses, and physical workshop address.
* **Google Maps Embed:** Interactive workshop location map.
* **Direct Contact Form:** Standard inquiries and general messages.
* **Operating Hours & On-Site Availability.**

---

# Reusable UI Component Library

To maintain code efficiency and visual consistency across the React app, the following components will be built in `src/components/`:

| Component Name | Description |
| --- | --- |
| `Navbar.jsx` | Fixed header with navigation links, mobile menu, and quote CTA button. |
| `Footer.jsx` | Full company footer with navigation, logo badge, contact info, and copyright. |
| `Button.jsx` | Standardized button styled in primary gold (`#D97706`) or industrial blue outline. |
| `ServiceCard.jsx` | Uniform card with icon, title, description, and "Learn More" link. |
| `SectionHeading.jsx` | Styled title block with thin silver horizontal accent lines echoing the logo. |
| `QuoteForm.jsx` | Modular quote form used on both the `/quote` page and home page modal. |
| `WhatsAppButton.jsx` | Floating action button for instant direct contact on mobile. |

---

Document Owner: Turn-Metal Engineering (Pty) Ltd.

