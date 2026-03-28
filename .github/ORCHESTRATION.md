# YOVU Agent Orchestration Runbook

## Primary Control Pattern
Use the Product Owner Coordinator as the default entry point for all work. The coordinator assigns tasks to specialist agents and validates handoffs.

## Team Roles
- product-owner-coordinator
- insurance-copy-workflow-strategist
- visual-design-lead
- frontend-build-engineer
- devops-release-lead

## Environment Note
- You may see globally available instruction templates in chat context, including Postman-focused files.
- Those templates are environment defaults and are not part of this website implementation unless a matching file pattern is used.
- For this project, prioritize workspace-defined guidance and the YOVU agent files in this repository.

## Stage Flow
1. Discovery and prioritization
2. Copy and workflow refinement
3. Visual direction and component styling rules
4. Static page build and integration
5. Deployment and release validation

## Parallelization Rules
- Copy and design prep can run in parallel after page objective is locked.
- Frontend implementation starts only after copy and layout direction are approved for the target page.
- Deployment work can start once routing, assets, and core CTA paths are stable.

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
