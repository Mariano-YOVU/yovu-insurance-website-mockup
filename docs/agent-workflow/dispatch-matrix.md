# Agent Dispatch Matrix

## When to Use Which Agent

- product-owner-coordinator
Use for scoping, page priority, conflict resolution, and release sign-off.

- insurance-copy-workflow-strategist
Use for insurance messaging quality, workflow framing, and CTA narrative alignment.

- visual-design-lead
Use for layout hierarchy, design consistency, responsive polish, and accessibility-aware visual choices.

- frontend-build-engineer
Use for implementation in HTML/CSS/JS, component reuse, navigation, and page assembly.

- devops-release-lead
Use for Heroku deployment, release runbook execution, smoke testing, and rollback planning.

## Responsibility Split by Deliverable
- Page objectives and acceptance criteria: product-owner-coordinator
- Section messaging and copy QA: insurance-copy-workflow-strategist
- Visual system and layout behavior: visual-design-lead
- Code implementation: frontend-build-engineer
- Deployment and release validation: devops-release-lead

## Tool Permissions Matrix

| Agent | Tools | Typical Uses |
| --- | --- | --- |
| product-owner-coordinator | read, search, edit, todo, agent | Scope docs, acceptance gates, planning trackers, specialist delegation |
| insurance-copy-workflow-strategist | read, search, edit, web | Copy refinement, messaging QA, terminology checks |
| visual-design-lead | read, search, edit | Design rules, styling guidance, visual QA notes |
| frontend-build-engineer | read, search, edit, execute | Build pages, run local checks, validate implementation |
| devops-release-lead | read, search, edit, execute, github/* | Heroku CLI deploy commands, GitHub repo operations, git workflows, smoke tests, rollback steps |

## Access Notes
- Tool access defines capability boundaries for each role.
- Heroku operations are executed through terminal tooling under `execute`.
- GitHub operations are handled by `github/*` when available, with `execute` as CLI fallback.
- Access still depends on local authentication and environment setup.
