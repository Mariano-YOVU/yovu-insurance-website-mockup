# YOVU Insurance Website Mockup

Static multipage prototype for the YOVU insurance-first website direction.

## Project Name
YOVU Insurance Website Mockup

## Local Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Route Scaffold
- /
- /platform
- /communicator
- /insurance-brokerages
- /integrations/applied-epic
- /insurance-brokerages/personal-lines
- /insurance-brokerages/commercial-lines
- /insurance-brokerages/reception
- /insurance-brokerages/operations
- /insurance-brokerages/it-admin
- /integrations
- /industries
- /customer-stories
- /security-compliance
- /support-onboarding

## GitHub Setup

If you use GitHub CLI:

```bash
git init
git add .
git commit -m "Initial scaffold for YOVU Insurance Website Mockup"

gh auth login
gh repo create yovu-insurance-website-mockup \
  --private \
  --source=. \
  --remote=origin \
  --push
```

If you create the repo manually in GitHub first, then:

```bash
git init
git add .
git commit -m "Initial scaffold for YOVU Insurance Website Mockup"
git remote add origin git@github.com:<ORG_OR_USER>/yovu-insurance-website-mockup.git
git branch -M main
git push -u origin main
```

## Heroku Setup

If you use Heroku CLI:

```bash
heroku login
heroku apps:create yovu-insurance-website-mockup
heroku git:remote -a yovu-insurance-website-mockup
git push heroku main
heroku open
```

## Notes
- Heroku app names must be lowercase, hyphenated, and globally unique.
- Friendly display name remains YOVU Insurance Website Mockup.
- This scaffold uses Node + Express static hosting with extensionless page routes.
