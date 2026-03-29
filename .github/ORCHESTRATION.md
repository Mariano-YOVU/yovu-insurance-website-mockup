# YOVU Agent Orchestration Runbook

## Primary Control Pattern
Use the Product Owner Coordinator as the default entry point for all work. The coordinator **only** plans, prioritises, delegates, and reviews — it never writes code, copy, or creates images directly. All implementation is performed by specialist agents.

## Team Roles
- **product-owner-coordinator** — Scope, priorities, handoffs, acceptance, sign-off. Delegates all implementation.
- **insurance-copy-workflow-strategist** — Page copy, messaging, claim safety, CTA language.
- **visual-design-lead** — Design tokens, layout direction, component specs, visual QA rules.
- **graphics-designer** — SVG/image creation, placeholder assets, icon sets, design-spec compliance audits.
- **frontend-build-engineer** — HTML/CSS/JS page implementation, component build, technical QA.
- **devops-release-lead** — Deployment, environment setup, smoke testing, rollback.

## Delegation Boundaries
| Activity | Owner | PO May NOT Do |
|---|---|---|
| Write/edit HTML, CSS, JS | frontend-build-engineer | Write code |
| Write/edit page copy | insurance-copy-workflow-strategist | Write copy |
| Create SVGs, icons, diagrams | graphics-designer | Create images |
| Define design tokens & specs | visual-design-lead | Set design rules |
| Deploy to Heroku | devops-release-lead | Run deploy commands |
| Plan scope, prioritise, review | product-owner-coordinator | — |

## Environment Note
- You may see globally available instruction templates in chat context, including Postman-focused files.
- Those templates are environment defaults and are not part of this website implementation unless a matching file pattern is used.
- For this project, prioritize workspace-defined guidance and the YOVU agent files in this repository.

## Stage Flow
1. Discovery and prioritization (PO coordinator)
2. Copy and workflow refinement (copy strategist)
3. Visual direction and component styling rules (visual design lead)
4. Asset and image creation (graphics designer)
5. Design-spec verification (graphics designer)
6. Static page build and integration (frontend build engineer)
7. Deployment and release validation (devops release lead)
8. Acceptance review and sign-off (PO coordinator)

## Parallelization Rules
- Copy and design prep can run in parallel after page objective is locked.
- Graphics asset creation can start once design direction is approved.
- Frontend implementation starts only after copy, layout direction, and required assets are available.
- Deployment work can start once routing, assets, and core CTA paths are stable.
- Graphics designer runs a design-compliance audit after frontend delivers each page.

## Required Handoff Format
Every handoff must include:
- Objective
- In scope
- Out of scope
- Inputs consumed
- Decisions locked
- Open risks
- Acceptance checks

## Page Readiness Gates
A page is ready for release only when all are true:
- Copy approved by copy strategist
- Layout and visual checks approved by design lead
- All required images/assets created and verified by graphics designer
- Design-spec compliance audit passed by graphics designer
- Technical checks passed by build engineer
- Smoke test passed by devops and release lead
- Final sign-off by product owner coordinator

## Escalation Protocol
- Conflicting advice across agents: Product Owner Coordinator decides.
- Capability uncertainty: return to copy strategist or build engineer for evidence-based clarification.
- Release blockers: devops and release lead owns incident path and rollback decision support.

## Demo Readiness Definition
- Primary narrative is insurance first.
- Core navigation and CTA journeys are complete.
- Key pages load cleanly on desktop and mobile.
- Deployment runbook can be repeated without ambiguity.
