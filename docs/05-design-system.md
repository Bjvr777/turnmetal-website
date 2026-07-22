# 05 - Design System

# Turn-Metal Website Design System

Version: 1.0  
Status: Approved for Development  

---

# Design Philosophy

The design system translates Turn-Metal’s core values—**Precision, Reliability, Quality, and Strength**—into visual and interactive UI elements. 

The aesthetic is clean, technical, and industrial. It relies on crisp typography, structured grid layouts, subtle metallic accents, and high-contrast call-to-action elements designed for ease of use across mobile devices and desktop displays.

---

# Color Palette (Tailwind CSS Configuration)

The color palette directly reflects the logo identity and workshop aesthetic.

### 1. Primary Colors (Brand & Identity)
* **Royal Blue (`#1E3A8A` / `bg-blue-900`):** Used for top navigation headers, hero section overlays, primary badge outlines, and featured cards.
* **Deep Slate Base (`#0F172A` / `bg-slate-900`):** Primary dark background color for footers, dark mode section containers, and high-contrast text.

### 2. Secondary & Surface Colors
* **Brushed Silver Border (`#CBD5E1` / `border-slate-300`):** Used for card borders, thin section divider lines, and subtle hover outlines.
* **Machined Light Base (`#F8FAFC` / `bg-slate-50`):** Default background color for light content sections, quote forms, and main content blocks.
* **Steel Text Contrast (`#334155` / `text-slate-700`):** Primary body text color for high legibility on light backgrounds.

### 3. Accent & CTA Colors
* **Industrial Gold (`#D97706` / `bg-amber-600`):** Primary Call-to-Action button color ("Request a Quote").
* **Safety Orange (`#EA580C` / `bg-orange-600`):** Accent highlights, phone/WhatsApp icon highlights, and urgency badges.

---

# Typography Standards

### Font Families
* **Display / Headings:** `Cinzel`, `Graduate`, or `Roboto Slab` (Google Fonts)
  * *Usage:* Upper-case titles (`H1`, `H2`, `H3`), hero section headers, and hero banners.
* **Body & UI Controls:** `Inter` or `Roboto` (Google Fonts)
  * *Usage:* Standard paragraph text, service lists, specifications, navigation items, and form inputs.

### Typographic Hierarchy

| Level | Size (Mobile / Desktop) | Weight | Font Family | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Title (`H1`)** | 36px / 56px (`text-4xl lg:text-6xl`) | Bold / Uppercase | Display Serif | Main banner headline |
| **Section Header (`H2`)** | 28px / 36px (`text-3xl lg:text-4xl`) | Bold | Display Serif | Major section headers |
| **Card Title (`H3`)** | 20px / 24px (`text-xl lg:text-2xl`) | Semi-Bold | Display / Sans | Service titles, feature cards |
| **Subheading (`H4`)** | 16px / 18px (`text-base lg:text-lg`) | Medium | Sans-Serif | Card sub-headers, form labels |
| **Body Text (`p`)** | 14px / 16px (`text-sm lg:text-base`) | Regular | Sans-Serif | Main body text |
| **Caption / Specs** | 12px / 14px (`text-xs lg:text-sm`) | Medium | Sans-Serif | Technical specifications, dates |

---

# Spacing & Layout Grid

* **Grid Container:** Maximum width of `1280px` (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`).
* **Section Padding:** Vertical padding of `64px` to `96px` (`py-16 lg:py-24`) to maintain clean visual spacing.
* **Border Radius:** Sharp to slightly rounded corners (`rounded-md` / 6px) to emulate machined edges without appearing overly harsh.
* **Card Shadows:** Clean drop shadows for depth (`shadow-md` / `shadow-lg` on hover).

---

# UI Components & Controls

### 1. Primary Action Button (Quote CTA)
* **Visual Style:** Solid Industrial Gold background (`#D97706`), bold uppercase white text, medium rounded corners (`rounded-md`), subtle drop shadow.
* **Hover State:** Darker Gold (`#B45309`) with a slight hover elevation (`hover:-translate-y-0.5 transition-all`).

### 2. Secondary Button (Explore / Outline)
* **Visual Style:** Dark Blue background or transparent container with a 2px Brushed Silver border (`border-2 border-slate-300`), white text.
* **Hover State:** Full Silver fill (`bg-slate-300 text-slate-900`).

### 3. Brand Accent Line (Motif)
* **Visual Style:** A thin 2px horizontal accent line (`h-0.5 bg-gradient-to-r from-blue-900 via-amber-600 to-transparent`) placed directly beneath section headers to mimic the logo’s framing lines.

### 4. Input Fields (Quote Form)
* **Visual Style:** Slate light background (`bg-slate-100`), 1px slate border (`border-slate-300`), sharp contrast dark text, active focus ring in Industrial Gold (`focus:ring-2 focus:ring-amber-600`).

---

# Iconography & Media Guidelines

* **Icon Library:** `Lucide-React` or `Heroicons`.
* **Icon Styling:** Clean stroke icons in Industrial Gold (`#D97706`) on dark sections, or Royal Blue (`#1E3A8A`) on light sections.
* **Imagery Style:** High-contrast photos of precision workshop machining, lathe turning, screw conveyor flighting, and clean milling plant installations.

---

Document Owner: Turn-Metal Engineering (Pty) Ltd.  
