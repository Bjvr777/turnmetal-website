# 06 - Development Plan

# Turn-Metal Website Development Plan

Version: 1.0  
Status: Approved for Development  

---

# Plan Overview

This document outlines the step-by-step roadmap for building, testing, and deploying the **Turn-Metal Engineering (Pty) Ltd.** corporate website. 

The strategy follows a phased development model using **React**, **Vite**, and **Tailwind CSS**, ensuring each component and page is thoroughly tested before final deployment to **Vercel**.

---

# Technical Stack & Prerequisites

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | React 18+ (Vite) | Fast, component-based frontend library |
| **Styling** | Tailwind CSS v3+ | Utility-first CSS framework adhering to `05-design-system.md` |
| **Routing** | React Router v6 | Single Page Application (SPA) multi-page navigation |
| **Icons** | Lucide React | Lightweight industrial icon set |
| **Form Handling** | EmailJS or Web3Forms | Direct email delivery for quote requests & contact forms |
| **Version Control** | Git & GitHub | Code repository management |
| **Hosting & Deployment** | Vercel | Continuous deployment pipeline linked to GitHub |

---

# Execution Phases

## Phase 1: Environment Setup & Project Initialization
* [ ] Initialize Vite + React project structure (`npm create vite@latest turn-metal-website -- --template react`).
* [ ] Install and configure **Tailwind CSS** with custom colors (`05-design-system.md`).
* [ ] Install essential dependencies (`react-router-dom`, `lucide-react`).
* [ ] Set up project directory structure:

src/
├── assets/          # Logo badges, high-res workshop imagery
├── components/      # Reusable UI components (Navbar, Footer, Buttons, Cards)
├── pages/           # Page views (Home, About, Services, Industries, Projects, Quote, Contact)
├── layout/          # Layout wrappers & headers
└── styles/          # Global CSS & Tailwind directives

* [ ] Push initial codebase to private **GitHub** repository.

---

## Phase 2: Core Layout & Navigation Component Engineering
* [ ] **`Navbar.jsx`:** Implement sticky header with logo badge, navigation links, direct phone link, and mobile hamburger drawer.
* [ ] **`Footer.jsx`:** Build global footer with contact info, workshop address, quick links, and copyright text.
* [ ] **`Button.jsx`:** Create reusable button component supporting Industrial Gold CTA and Silver Outline styles.
* [ ] **`SectionHeading.jsx`:** Implement title block with the signature horizontal brand accent line.

---

## Phase 3: Page Buildout & Content Integration

### Step 3.1: Home Page (`/`)
* [ ] Build **Hero Section** with high-contrast industrial overlay, headline, value proposition, and dual CTA.
* [ ] Build **Capabilities Grid** showcasing Machining, Equipment Manufacturing, Conveyors, and On-site Servicing.
* [ ] Build **Industry Focus Section** targeting Flour/Maize Mills, Feed Mills, Silos, and Agricultural Plants.
* [ ] Build **Why Choose Us** section emphasizing precision standards and minimal downtime.

### Step 3.2: About Us (`/about`)
* [ ] Build company profile layout, mission, vision (`01-vision.md`), and core values grid.
* [ ] Add growth plan callout detailing future bucket elevator system manufacturing.

### Step 3.3: Services Overview & Pages (`/services`)
* [ ] Build modular service cards detailing precision turning, screw conveyors, bucket elevator drums, and mill roller changes.
* [ ] Add technical specifications callouts.

### Step 3.4: Industries, Projects & Gallery (`/industries`, `/projects`)
* [ ] Build target industry overview cards.
* [ ] Implement image gallery grid with basic category filters (*Machining*, *Conveyors*, *Servicing*).

### Step 3.5: Request a Quote & Contact (`/quote`, `/contact`)
* [ ] Build interactive quote request form with fields for customer details, service selection, project notes, and drawing upload prompt.
* [ ] Integrate WhatsApp direct link button (`WhatsAppButton.jsx`).
* [ ] Embed Google Maps workshop location frame and direct contact info on `/contact`.

---

## Phase 4: Integration, Testing & Optimization

### Form Integration
* [ ] Connect form inputs to EmailJS or Web3Forms to send inquiries directly to the Turn-Metal inbox.
* [ ] Test client-side input validation and submission state UI (loading, success banner, error alerts).

### Performance & Mobile Optimization
* [ ] Audit responsive design across mobile (375px+), tablet, and desktop viewports.
* [ ] Optimize image assets (convert to `.webp`, set explicit dimensions).
* [ ] Perform SEO meta tag audit for target South African keywords (`04-content-strategy.md`).

---

## Phase 5: Deployment & Handover

* [ ] Connect GitHub repository to **Vercel**.
* [ ] Configure custom domain routing (`turnmetal.co.za` or preferred domain).
* [ ] Verify SSL certificate activation and production build stability.
* [ ] Deliver final codebase, project documentation, and maintenance guidelines.

---

Document Owner: Turn-Metal Engineering (Pty) Ltd.  
