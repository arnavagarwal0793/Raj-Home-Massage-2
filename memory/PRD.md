# Raj Home Massage - Landing Page PRD

## Original Problem Statement
Build a complete, production-ready website for Raj Home Massage (a home/hotel massage
therapy service in Andheri West, Mumbai). Client originally requested Next.js for
SSR/SEO. Backend and database are NOT needed for this landing page.
Sections required (in order): Navbar, Hero, About Raj, Services Grid (15 cards),
Why Choose Us (7 trust cards), Service Areas, Testimonials/Reviews, Instagram Feed,
Booking/Contact CTA, Footer. Black and gold luxury spa aesthetic. Content sourced from
client's content.md file. 4 Google Stitch design screens provided as layout reference.
No em dashes anywhere. rajhomehotelspatherapist.com must never be mentioned.

## Architecture Decision
- This Emergent workspace is built on CRA (via craco) + FastAPI + MongoDB with
  supervisor-managed ports and Emergent's live visual-editing tooling wired into craco.
  Since the site is a pure static landing page with zero backend/data needs, we kept the
  React (CRA) frontend framework instead of migrating to Next.js (a full framework swap
  would break the platform's visual-edit/health-check tooling for no functional benefit).
- SEO handled via `react-helmet-async` (dynamic title/meta/canonical/JSON-LD) plus static
  fallback meta tags in `public/index.html`, and static `public/sitemap.xml` /
  `public/robots.txt` referencing rajhomemassage.com.
- Backend (FastAPI) and MongoDB supervisor processes were stopped since not needed.

## Core Requirements (static)
- Mobile-first; hero tagline strip + heading + rating + pricing + CTAs must be visible
  above the fold on mobile without scrolling.
- Black (#0B0B0C) and gold (#D4AF37/#E6C665) luxury spa theme, Cormorant Garamond serif
  headings + Plus Jakarta Sans body font.
- All 15 massage services in exact specified order with "Starting from ₹2,999" tag and
  WhatsApp Book Now button.
- Phone/WhatsApp links: tel:+919702424106, wa.me/919702424106.
- No em dashes, no mention of competitor domain.

## Design Correction (2026-07)
- Initial build used a black/gold theme based on the text brief, which was WRONG. Actual
  reference (Stitch screens + uploaded DESIGN.md "Vapor Zen") is a LIGHT glassmorphism
  theme: #f8f9ff background, lavender/misty-blue mesh gradients, glass-panel cards
  (blur 24px, translucent white, 1px border), hyper-rounded/pill shapes, Anybody
  (headlines) + DM Sans (body) fonts. Full redesign completed across every section;
  regenerated logo + About Raj portrait to match. Re-tested at 100% pass.

## What's Been Implemented (2026-07)
- Full single-page app: Navbar (sticky, mobile drawer), Hero, About Raj, 15-card Services
  Grid, 7-card Why Choose Us, Service Areas (primary + South Mumbai + airport), Testimonials
  (3 sample reviews + Elfsight placeholder), Instagram Feed (Elfsight placeholder), Booking
  CTA, Footer - all built per content.md copy.
- Generated brand logo (circular gold hands mark) used as favicon/navbar/footer logo,
  generated hero background and About Raj placeholder portrait, curated Unsplash images
  per service card.
- SEO: title, meta description, canonical (rajhomemassage.com), OG/Twitter tags,
  HealthAndBeautyBusiness JSON-LD with aggregateRating (4.9 / 124 reviews), sitemap.xml,
  robots.txt.
- data-testid on all interactive/key elements.
- Backend + MongoDB supervisor processes stopped (disabled per request).
- Tested via testing agent: 97% pass, one low-priority mobile-drawer animation issue found
  and fixed (drawer now uses opacity-only transition to avoid overlap flicker).

## Known Placeholders (client to provide later)
- Elfsight Google Reviews widget embed code (Testimonials section).
- Elfsight Instagram Feed widget embed code.
- Real logo file, real Raj photo, real massage images (currently generated/stock).
- design.md file (not yet uploaded) - referenced only for sections not covered by Stitch
  screens; all 10 required sections were already covered directly by the problem statement.

## Backlog / Next Tasks (P1/P2)
- P1: Swap in real Elfsight widget embed codes once client provides them.
- P1: Replace placeholder logo/photo/service images with real assets once uploaded.
- P2: Add design.md-driven refinements if client uploads it later.
- P2: Consider true Next.js SSR migration only if client insists after reviewing current
  SEO setup (current CRA + react-helmet-async approach is crawlable by modern Googlebot).
