# YOVU Website Visual & Content Enhancement Plan

Checklist to move every page from text-scaffold to visually impactful, copy-complete prototype.
Derived from the YOVU Website Brief (Sections 12-14) and the Page Copy Pack.

---

## A. Global Visual Infrastructure

### A1. Placeholder Image System
Create placeholder assets so every page can be built out before real screenshots arrive.

- [ ] **Communicator in Applied Epic — main view** (`communicator-in-epic.png`) — Full-width screenshot placeholder showing the floating Communicator panel beside an Applied Epic account/activity screen. Annotate: screen pop, call history, activity logging.
- [ ] **Communicator — directory & presence view** (`communicator-directory.png`) — Panel showing colleague list with presence dots, search, drag-and-drop transfer zone.
- [ ] **Communicator — transcript & summary view** (`communicator-transcript.png`) — Call detail showing recording playback bar, AI transcript text, summary block, sentiment tag, topic tags.
- [ ] **Communicator — reception view** (`communicator-reception.png`) — Expanded reception-style layout with drag-and-drop transfer/conference controls, queue indicators.
- [ ] **Communicator — mobile app** (`communicator-mobile.png`) — Phone-frame mockup of YOVU Mobile showing active call screen with brokerage caller ID.
- [ ] **Product architecture diagram** (`platform-architecture.png`) — Visual showing Platform → Communicator → Mobile → Integrations relationship (Brief §14).
- [ ] **Personal-lines workflow diagram** (`workflow-personal-lines.png`) — New business → servicing → renewals flow with YOVU touchpoints (Brief §14).
- [ ] **Commercial-lines workflow diagram** (`workflow-commercial-lines.png`) — Referral → quote → service → mobile → follow-up flow (Brief §14).
- [ ] **Reception workflow strip** (`workflow-reception.png`) — Inbound call → caller identified → correct person/queue → activity trail (Copy Pack §8).
- [ ] **Before/after comparison** (`before-after-brokerage.png`) — Side-by-side: manual/fragmented vs YOVU-connected workflow.
- [ ] **Rollout timeline graphic** (`rollout-timeline.png`) — Discovery → Configuration → Training → Go-live → Ongoing optimisation.
- [ ] **Trust bar brokerage logos** (`trust-logos-strip.png`) — Strip of approved brokerage partner logos (use grey boxes until logos secured).
- [ ] **Leadership/reporting mockup** (`reporting-dashboard.png`) — Call volumes, missed-call ratios, team utilisation view.

### A2. CSS & Component Additions
- [ ] Add `.hero-image` / `.hero-split` layout so heroes can hold a screenshot beside the headline.
- [ ] Add `.screenshot-block` component — bordered, rounded, shadow image container with optional annotation hotspots.
- [ ] Add `.process-strip` component — horizontal numbered step sequence for workflow timelines.
- [ ] Add `.before-after` component — two-column comparison layout with distinct background tones.
- [ ] Add `.testimonial-card` component — quote, attribution, brokerage logo, optional metric.
- [ ] Add `.faq-accordion` component — expandable Q&A sections (for Applied Epic page and others).
- [ ] Add `.feature-stack` component — alternating left-image / right-text rows for detailed feature pages.
- [ ] Add `.metric-band` component — 3-4 large numbers with labels in a horizontal strip.
- [ ] Add `.persona-chips` component — small role pills/tabs for "Who it helps" sections.
- [ ] Add `.filter-chips` component — category filters for Customer Stories browsing.
- [ ] Add `.carousel-cards` component — **Zoom-style rotating card carousel** (JS + CSS). A horizontal card strip that auto-advances with a smooth slide/crossfade animation. Each card shows: large role illustration or screenshot, role title, one-sentence benefit, and CTA link. Active card is prominent with a subtle lift/scale; adjacent cards are dimmed. Includes dot indicators and pause-on-hover. Used first for Home "Choose your path" and reusable on Communicator "Who it helps", Insurance Brokerages role selector, and Customer Stories.

### A2b. Visual Direction — Zoom-Inspired Density
Take cues from zoom.com's visual weight: heroes with large product imagery filling ≥50% of the viewport, generous use of screenshot blocks and illustrated diagrams between text sections, and card-based layouts with images rather than emoji icons. Apply across all pages:

- [ ] **Every hero gets a visual** — no text-only heroes. Use screenshot, diagram, or illustration alongside headline.
- [ ] **Replace emoji card-icons with SVG or illustration** — current 🖥️📌🔄 style is placeholder; move to purpose-drawn icons or product screenshots inside cards.
- [ ] **Increase image-to-text ratio** — aim for at least one image/diagram per two text sections, matching Zoom's rhythm of visual → copy → visual → copy.
- [ ] **Use generous whitespace and larger type in heroes** — Zoom uses oversized hero headlines (clamp 2.5rem–4rem) with ample padding; adopt similar scale.
- [ ] **Background variation between sections** — alternate between `--paper`, `--yovu-wash`, and white to create visual separation (Zoom alternates light grey / white / branded bands).

### A3. Image Directory Setup
- [ ] Create `public/assets/images/placeholders/` directory for all mockup screenshots.
- [ ] Create `public/assets/images/icons/` directory for any SVG icons replacing emoji.
- [ ] Create `public/assets/images/diagrams/` directory for workflow and architecture visuals.
- [ ] Create `public/assets/images/logos/` directory for partner/brokerage logos.

---

## B. Page-by-Page Content & Visual Gaps

### B1. Home — `/`

#### Copy Gaps
- [ ] Add 2 missing pain/outcome cards: "Lost coaching opportunities → recordings, transcripts, summaries, sentiment" and "Weak documentation → stronger audit-ready communication record" (copy pack calls for 5 cards, we have 3).
- [ ] Add Section 4: "Built for the brokerage, not just the phone line" — narrative block with left text / right workflow diagram.
- [ ] Expand "Choose your path" cards into a **Zoom-style rotating carousel** (`.carousel-cards`). Each card gets: role-specific illustration/screenshot, role title, one-sentence benefit, and "Explore →" link. Cards auto-rotate with dot navigation and pause-on-hover. Roles: Insurance Brokerages, Personal Lines, Commercial Lines, Reception & Front Desk, Agency Leaders & Operations, IT & Admin.

#### Visual Gaps
- [ ] Hero: Add full-width Communicator-in-Epic screenshot (`communicator-in-epic.png`) — split-hero layout with headline left, product screenshot right (Zoom-style hero density).
- [ ] Trust bar: Replace text-only trust items with brokerage logos strip.
- [ ] "Why brokerages change" section: Replace emoji icons with purpose-drawn SVG icons or small illustrative graphics.
- [ ] "What YOVU is" section: Add small product screenshots in each card (Platform, Communicator, Mobile) — image-led cards, not text-only.
- [ ] "Choose your path": Build as the carousel component — each slide is a visual card with role illustration, title, benefit line, and CTA link. Auto-advances every 5s, dot indicators, swipe-friendly on mobile.
- [ ] "Beyond insurance" assurance band: Add 3 simple use-case illustrations alongside the bullets.
- [ ] Overall: Ensure at least one image/diagram sits between every two text-heavy sections to match Zoom's visual cadence.

---

### B2. YOVU Communications Platform — `/platform`

#### Copy Gaps
- [ ] Section 1 "Move beyond dial tone" should be a bold statement with a 'Why this matters' side annotation — current version is a card grid instead.
- [ ] Section 3 "Work where your team already works" should include a horizontal workflow strip (incoming call → context → action → record).
- [ ] Section 4: Add two-column comparison: Insurance workflows vs Other client-service workflows.
- [ ] Section 5 "Deployment and support": Needs a four-step rollout timeline, not just cards.

#### Visual Gaps
- [ ] Hero: Add product overview diagram showing Platform → Communicator → Mobile → Integrations.
- [ ] Add workflow strip graphic (call → context → action → record).
- [ ] Add rollout timeline graphic.

---

### B3. YOVU Communicator — `/communicator`

#### Copy Gaps
- [ ] Section 1 "What it is" — needs a standalone definition block (currently merged into "Workflow behaviour").
- [ ] Section 3 "What users can do in one place" — copy pack calls for two-column feature list with screenshots, not icon cards.
- [ ] Section 4 "Reception and team coordination" — needs before/after UI treatment showing standard vs reception view.
- [ ] Section 5 "Mobile continuity" — needs a 4-step storyboard layout.
- [ ] Section 6 "Who it helps" — needs persona chips/tabs tying interface to brokerage roles.

#### Visual Gaps
- [ ] Hero: Large screenshot of Communicator floating in Applied Epic, plus directory and transcript insets.
- [ ] Add annotated screenshots showing panel docking, resizing, workflow context.
- [ ] Add reception view screenshot.
- [ ] Add before/after comparison (standard view vs reception view).
- [ ] Add mobile storyboard images.

---

### B4. Insurance Brokerages — `/insurance-brokerages`

#### Copy Gaps
- [ ] Section 1: Needs 4-5 brokerage pain-point problem/outcome strip (slow lead response, repetitive handoffs, unknown callers, incomplete notes, weak visibility).
- [ ] Section 2: Add mid-page "Before YOVU / With YOVU" comparison block.
- [ ] Section 4: "Applied Epic at the center" — dedicated section with screenshot and bullets.
- [ ] Section 5: Documentation/compliance assurance band with E&O-support story.
- [ ] Section 6: Proof and trust — customer quotes, brokerage logos, testimonial slider.

#### Visual Gaps
- [ ] Hero: Insurance-specific hero with Applied Epic screenshot + brokerage proof logos + testimonial pull-quote.
- [ ] Before/After comparison graphic.
- [ ] Brokerage logo trust strip.
- [ ] Testimonial cards.

---

### B5. Applied Epic Integration — `/integrations/applied-epic`

#### Copy Gaps
- [ ] Section 2: Copy pack calls for 6 stacked workflow modules (click-to-call, screen pop, activity logging, call history, recording playback, AI transcription/summaries) — currently only 3 cards.
- [ ] Section 4: Mobile-to-Epic continuity with illustrated workflow timeline.
- [ ] Section 5: FAQ accordion — practical questions about where Communicator lives, what gets logged, recording, playback, rollout.

#### Visual Gaps
- [ ] Hero: Full-width Communicator-in-Epic screenshot with hotspots (click-to-call, screen pop, activity logging).
- [ ] Feature stack: 6 screenshot-led sections instead of 3 icon cards.
- [ ] Add FAQ accordion component at page bottom.
- [ ] Add mobile-to-Epic workflow timeline graphic.

---

### B6. Personal Lines — `/insurance-brokerages/personal-lines`

#### Copy Gaps
- [ ] Section 1: Three-column pain grid (high inbound, repeated info, manual notes, account lookups, missed follow-up).
- [ ] Section 2 (Producers): Needs role subsection with screenshot and benefits list.
- [ ] Section 3 (Servicing/Renewals): Needs role subsection with transcript/history screenshot.
- [ ] Section 4 (Claims): Highlighted callout box (sensitive/time-critical conversations).
- [ ] Section 5: Before/after summary band.

#### Visual Gaps
- [ ] Hero: Personal-lines workflow visual with sub-cards (new business, servicing, renewals).
- [ ] Role-specific screenshots in producer and servicing sections.
- [ ] Before/after comparison band.
- [ ] Workflow diagram.

---

### B7. Commercial Lines — `/insurance-brokerages/commercial-lines`

#### Copy Gaps
- [ ] Section 1: Wider intro block about why commercial workflows need more than call handling + side quote.
- [ ] Section 2 (Producer): Mini process diagram.
- [ ] Section 3 (Servicing): Screenshot with callout tags.
- [ ] Section 4 (Mobile): Four-step visual workflow strip.
- [ ] Section 5 (Leadership): Closing KPI-style band with 3 outcome statements.

#### Visual Gaps
- [ ] Hero: Commercial-lines workflow graphic (producer → servicing → mobile → follow-up → Epic).
- [ ] Add process diagrams in role sections.
- [ ] Add mobile workflow strip.
- [ ] Add KPI/metric band.

---

### B8. Reception & Front Desk — `/insurance-brokerages/reception`

#### Copy Gaps
- [ ] Section 2: Copy pack calls for "screenshot-led feature stack" — not icon cards.
- [ ] Section 3: Short outcome band with 3 metrics/placeholders.
- [ ] Section 4: Horizontal process strip (inbound → identified → routed → trail maintained).

#### Visual Gaps
- [ ] Hero: Communicator reception-style interface or directory view with transfer highlights.
- [ ] Reception view screenshot.
- [ ] Process strip graphic.
- [ ] Metric band with placeholder stats.

---

### B9. Agency Leaders & Operations — `/insurance-brokerages/operations`

#### Copy Gaps
- [ ] Section 2: Two-column explanation with highlighted pull quote.
- [ ] Section 3: Shaded compliance/oversight box for E&O/dispute/review.

#### Visual Gaps
- [ ] Hero: Leadership visual (call-history search + transcript summary + reporting mockup).
- [ ] Reporting dashboard mockup screenshot.
- [ ] Pull-quote block.

---

### B10. IT & Admin — `/insurance-brokerages/it-admin`

#### Copy Gaps
- [ ] Section 2: Four-step rollout timeline (not cards).
- [ ] Section 3: Integration card row (Applied Epic, Salesforce, browser CRM/BMS).
- [ ] Section 4: Proof box with support stats (when approved).

#### Visual Gaps
- [ ] Hero: Admin view, deployment timeline graphic, or architecture diagram.
- [ ] Rollout timeline graphic.
- [ ] Integration logo/icon cards.

---

### B11. Integrations — `/integrations`

#### Copy Gaps
- [ ] Section 1: Applied Epic should be a featured large card, not same-size as others.
- [ ] Section 2: Secondary card row for Salesforce + browser-based workflows.
- [ ] Section 3: Restrained "growing ecosystem" text with roadmap visual.

#### Visual Gaps
- [ ] Hero: Integration grid led by Applied Epic with secondary cards for Salesforce, Teams, browser CRM/BMS.
- [ ] Integration partner logos.
- [ ] Ecosystem growth visual.

---

### B12. Beyond Insurance — `/industries`

#### Copy Gaps
- [ ] Section 1 currently okay; could expand use-case descriptions.
- [ ] Section 3: Centered value-proposition block — currently minimal.

#### Visual Gaps
- [ ] Hero: Broader-industry hero with platform diagram (not insurance-specific).
- [ ] Use-case imagery for professional services, property management, healthcare, etc.

---

### B13. Customer Stories — `/customer-stories`

#### Copy Gaps
- [ ] Section 1: Needs featured customer story with logo, short quote, and outcome metric (currently all placeholder).
- [ ] Section 2: Add filter chips above the grid (Applied Epic, servicing, reception, leadership, mobile).
- [ ] Section 3: Non-insurance proof section (2-3 compact cards).

#### Visual Gaps
- [ ] Featured story card with brokerage logo.
- [ ] Filter chip component.
- [ ] Placeholder story cards with illustrative imagery.

---

### B14. Security & Compliance — `/security-compliance`

#### Copy Gaps
- [ ] Section 1: Add the full recommended public copy paragraph from the copy pack (longer than current).
- [ ] Section 3: Note about what NOT to overclaim (internal editorial note, may not be visible on page).

#### Visual Gaps
- [ ] Hero: Compliance callout with retention timeline and UI proof.
- [ ] Retention timeline graphic (7-year visual).
- [ ] UI proof screenshot of recording/access controls.

---

### B15. Support & Onboarding — `/support-onboarding`

#### Copy Gaps
- [ ] Section 1: Should be a visual five-step timeline (Discovery → Config → Training → Go-live → Ongoing).
- [ ] Section 2: Role-based training should use tabs or role cards.
- [ ] Section 3: Support proof band with optional metrics and short quote.
- [ ] Section 4: Closing partnership statement.

#### Visual Gaps
- [ ] Hero: Phased rollout timeline illustration.
- [ ] Five-step timeline graphic.
- [ ] Support metrics/proof band.

---

## C. Missing Pages (from Copy Pack)

- [ ] **About YOVU** — `/about` — Origin story, Canadian team, company values, future direction.
- [ ] **Resources** — `/resources` — Content hub: guides, articles, demos, workflow explainers.
- [ ] **Book a Demo** — `/book-demo` — Dedicated demo request form page (currently all CTAs point to Support & Onboarding).

---

## D. Proof & Trust Assets to Source

These are listed in Brief §14 and required before the site is demo-ready:

- [ ] Approved Communicator screenshots in Applied Epic (real, not placeholder).
- [ ] Brokerage partner logos (with usage approval).
- [ ] At least 2 customer quotes/testimonials.
- [ ] Product architecture diagram (design team).
- [ ] Personal-lines workflow diagram (design team).
- [ ] Commercial-lines workflow diagram (design team).
- [ ] Compliance/legal sign-off on E&O language.
- [ ] Support response metrics (if approved for public use).

---

## E. Execution Priority

| Priority | Scope | Rationale |
|----------|-------|-----------|
| **P0** | Placeholder images + CSS components (A1-A3) | Unblocks all page work |
| **P1** | Home, Communicator, Applied Epic (B1, B3, B5) | Highest traffic, highest conversion intent |
| **P2** | Insurance Brokerages, Personal Lines, Reception (B4, B6, B8) | Core brokerage audience pages |
| **P3** | Platform, Commercial Lines, Operations, IT & Admin (B2, B7, B9, B10) | Complete the brokerage story |
| **P4** | Integrations, Industries, Customer Stories, Security, Support (B11-B15) | Proof and trust layer |
| **P5** | Missing pages: About, Resources, Book a Demo (C) | Nice-to-have for launch prototype |
| **P6** | Real assets replacing placeholders (D) | Final polish before stakeholder demo |
