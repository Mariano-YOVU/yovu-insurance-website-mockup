# Heroku Manual Release Checklist

## Pre-Release
- Build output is current and committed.
- Environment variables are documented and set.
- Primary pages and CTA paths pass local smoke checks.

## Deploy
- Authenticate to Heroku CLI.
- Select the correct app and target environment.
- Run deployment command sequence from release runbook.

## Post-Deploy Smoke Tests
- Home page loads and primary CTA works.
- Platform, Communicator, and Insurance pages load.
- Key deep pages open without broken assets.
- No critical console errors on primary journeys.

## Rollback Readiness
- Previous release identifier is recorded.
- Rollback command path is documented and tested.
- Known issues and owner are logged.

## Sign-Off
- DevOps and Release Lead confirms deployment health.
- Product Owner Coordinator confirms demo readiness.
