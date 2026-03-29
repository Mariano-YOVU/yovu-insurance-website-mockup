---
applyTo: "**/*.{html,css,js,md}"
---

# YOVU Prototype Working Rules

## Product Direction
- Insurance-first story across site-level messaging.
- Keep a visible path for non-insurance visitors.
- Prioritize business outcomes and workflow clarity.

## Content Rules
- Preserve approved claims language.
- Avoid absolute compliance claims.
- Keep CTA language direct and role-relevant.

## Design Rules
- Mobile-first layouts.
- Clear hierarchy and strong scannability.
- Maintain accessibility-conscious contrast and focus states.
- Use the YOVU blue palette defined in `/public/assets/css/styles.css`:
  - Primary: `#2d9fd9` (yovu-blue), Dark: `#0a2847`, Mid: `#1a6aad`
  - Light: `#7bc4e8`, Pale: `#d4ecf7`, Wash: `#eef6fb`
- Font: Inter (Google Fonts, weights 400/500/600/700).
- Logo: `/assets/images/logos/yovu-logo.png` in header and footer.
- Navigation: mega-nav with Product/Solutions/Proof groups + Book a Demo CTA.

## Engineering Rules
- Use semantic HTML5, reusable CSS, and lightweight JavaScript.
- Keep the prototype framework-free unless explicitly changed.
- Validate internal links and CTA destinations before release.

## Release Rules
- Manual Heroku deployment for initial rollout.
- Maintain a clear environment variable contract.
- Run post-deploy smoke checks on key journeys.

## Environment Clarification
- Some globally available instruction templates may appear in chat context, including Postman-focused files.
- Those templates are environment defaults and do not apply to this website project unless matching file patterns are present.
- For this repository, follow the YOVU workspace instructions and agent definitions first.
