Here is the complete **`08-seo-strategy.md`** documentation file formatted inside a single code block so you can copy the entire file with one click:

```markdown
# 08 - SEO Strategy

# Turn-Metal Website SEO & Local Search Strategy

Version: 1.0  
Status: Approved for Development  

---

# Strategy Overview

The objective of the Turn-Metal Search Engine Optimization (SEO) strategy is to capture high-intent, decision-maker searches from plant engineers, maintenance managers, and procurement officers across South Africa's milling, grain handling, and agricultural processing sectors.

Rather than chasing generic high-volume web traffic, the focus is on **high-conversion local and technical engineering keywords** that drive direct quotation requests and on-site servicing inquiries.

---

# Target Keyword Architecture

The keyword matrix targets specific industrial search behaviors in Gauteng, North West, Free State, and across Southern Africa.

### 1. High-Intent Commercial Keywords (Services)
* Precision machining South Africa
* Specialist shaft turning Gauteng
* Screw conveyor manufacturing South Africa
* Screw conveyor flighting fabrication
* Bucket elevator drum manufacturing
* Replacement head and tail drums grain silos
* Mill roller changes South Africa
* Roll stand maintenance flour milling

### 2. Industry & Location Specific Keywords
* Milling plant mechanical engineering Fochville
* Industrial millwright services Gauteng
* Grain silo mechanical equipment repair
* Feed mill wear parts manufacturing
* Agricultural processing mechanical servicing

---

# On-Page Technical SEO Implementation

Every page view in the React build includes pre-configured HTML meta tags using dynamic header controls or static HTML templates.

### 1. Title Tags & Meta Descriptions Matrix

| Route | Page Title | Meta Description |
| :--- | :--- | :--- |
| `/` | **Turn-Metal Engineering \| Precision Machining & Milling Servicing** | Precision machining, specialized component manufacturing, screw conveyors, bucket elevator drums, and on-site roller changes for South African milling plants. |
| `/about` | **About Turn-Metal Engineering \| Precision & Reliability** | Learn about Turn-Metal Engineering (Pty) Ltd., our workshop capabilities, core values, and specialized focus on the milling and grain industry. |
| `/services` | **Precision Engineering Services \| Machining, Conveyors & Servicing** | High-tolerance machining, custom screw conveyor manufacturing, balanced elevator drums, and emergency on-site plant maintenance for milling infrastructure. |
| `/industries` | **Industries Served \| Milling, Grain Silos & Agriculture** | Tailored mechanical engineering solutions for flour mills, maize mills, feed plants, and grain silo operations across Southern Africa. |
| `/projects` | **Project Showcase \| Custom Machining & Plant Overhauls** | Browse our portfolio of precision machined components, fabricated conveyor systems, elevator drum assemblies, and site servicing projects. |
| `/quote` | **Request a Quotation \| Turn-Metal Engineering** | Submit technical CAD drawings or servicing requirements to receive a direct engineering quotation from Turn-Metal. |
| `/contact` | **Contact Turn-Metal Engineering \| Workshop Location & Info** | Contact Turn-Metal Engineering in Fochville, Gauteng. View workshop address, phone details, and direct WhatsApp contact. |

---

# Local SEO & Google Business Profile Strategy

Local search presence is essential for winning regional plant maintenance contracts and breakdown repairs in agricultural hubs.

### 1. Google Business Profile Optimization
* **Primary Business Category:** Industrial Engineering Service / Mechanical Engineer.
* **Secondary Categories:** Machinist, Manufacturer, Industrial Equipment Supplier.
* **Core Business Information:**
  * **Exact Name:** Turn-Metal Engineering (Pty) Ltd.
  * **Service Area:** Fochville, Gauteng, North West, Free State, and Southern Africa.
  * **Attributes:** On-site services available, workshop appointment options.

### 2. Local Citations & Structured Schema Markup
Implement JSON-LD **`LocalBusiness`** and **`Organization`** structured data in `index.html` to help search engines index workshop coordinates and business credentials accurately.

```json
{
  "@context": "[https://schema.org](https://schema.org)",
  "@type": "IndustrialBusiness",
  "name": "Turn-Metal Engineering (Pty) Ltd.",
  "image": "[https://turnmetal.co.za/logo.jpg](https://turnmetal.co.za/logo.jpg)",
  "url": "[https://turnmetal.co.za](https://turnmetal.co.za)",
  "telephone": "+27123456789",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Workshop Address",
    "addressLocality": "Fochville",
    "addressRegion": "Gauteng",
    "country": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -26.4886,
    "longitude": 27.4939
  },
  "knowsAbout": [
    "Precision Machining",
    "Screw Conveyor Manufacturing",
    "Bucket Elevator Drums",
    "Milling Plant Roller Changes"
  ]
}

```

---

# Technical Performance & Core Web Vitals Guidelines

Search engines heavily prioritize fast, mobile-optimized industrial sites.

* **Image Optimization:** Convert workshop and project photography to `.webp` format and compress files to under 150KB without sacrificing image detail.
* **Fast Initial Load:** Keep initial React bundle sizes light by utilizing Vite code splitting and lazy loading for heavy gallery assets.
* **Mobile First Layout:** Ensure touch targets (buttons, links, WhatsApp floating icon) meet minimum 48px sizing requirements for on-site engineers using smartphones.

---

# Ongoing Content & Backlink Growth Plan

1. **Case Studies:** Periodically upload photo-driven case studies highlighting successful equipment overhauls or custom component fabrications.
2. **Technical Downloads:** Future creation of downloadable PDF technical datasheets for screw conveyor specifications and drum lagging profiles (drives inbound backlinks from plant engineers).
3. **Industry Listings:** Secure directory listings on South African industrial networks (e.g., Brabys, Engineering News Directory, and local agricultural portals).

---

Document Owner: Turn-Metal Engineering (Pty) Ltd.

Next Document: `09-maintenance-guide.md`

```

```