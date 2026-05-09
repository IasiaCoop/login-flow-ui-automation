# Login Flow UI Automation

### TypeScript • Playwright • Page Object Model

Automated UI test suite covering the login flow challenge on
[cnarios.com](https://www.cnarios.com/challenges/login-flow#challenge).
Built with Playwright and TypeScript following the Page Object Model
design pattern to cleanly separate page interactions from test logic.

---

## Project Structure

```
login-flow-ui-automation/
├── pages/
│   ├── LoginPage.ts        # Login page locators and actions
│   └── DashboardPage.ts    # Dashboard page locators and actions
├── tests/
│   └── loginFlow.spec.ts   # All login flow test cases
├── utils/
│   └── testData.ts         # Centralized test credentials
├── playwright.config.ts
└── package.json
```
## Test Coverage

| Test ID | Scenario | Type |
|---------|----------|------|
| LF_001 | Empty fields displays validation message | Negative |
| LF_002 | Invalid credentials displays error message | Negative |
| LF_003 | Valid login as USER reaches User Dashboard | Positive |
| LF_004 | Valid login as ADMIN reaches Admin Dashboard | Positive |
| LF_005 | Logout clears session and resets form fields | Functional |

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| **Playwright** | Browser automation and assertions |
| **TypeScript** | Statically typed test code |
| **Page Object Model** | Separates locators and actions from test logic |
| **GitHub Actions** | CI pipeline — runs tests on every push |

---

## Design Decisions

**Page Object Model** — Each page has its own class containing
locators and action methods. Tests stay clean and focused purely
on assertions, with zero duplicated selectors.

**Centralized test data** — All credentials live in `testData.ts`.
No hardcoded values inside test files, making data updates a
one-line change.

**Role-based coverage** — Tests validate both USER and ADMIN
authentication flows, reflecting real-world access control
requirements.

**Resilient locators** — Uses Playwright's `getByRole` with regex
patterns instead of brittle CSS selectors, reducing maintenance
overhead as the UI evolves.

---

## Running the Tests

### Prerequisites
- Node.js 18+
- npm

### Install dependencies
```bash
npm install
npx playwright install
```

### Run all tests
```bash
npx playwright test
```

### Run in headed mode (watch the browser)
```bash
npx playwright test --headed
```

### Run with UI mode
```bash
npx playwright test --ui
```

### View HTML report
```bash
npx playwright show-report
```

---

## CI/CD

This project uses **GitHub Actions** to automatically run the
full test suite on every push and pull request to main.
Results and HTML reports are available as downloadable artifacts
under the Actions tab.

---

## Author
**Iasia Cooper** — QA Engineer
[LinkedIn](https://linkedin.com/in/iasia-cooper-30b433225) •
[GitHub](https://github.com/IasiaCoop)