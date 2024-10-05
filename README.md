# Playwright Project

Welcome to the Playwright project! This README file will guide you through the setup and usage of this TypeScript project.

# Installation

Clone the project

```
git clone https://github.com/ismailsobhy/playwright-demo.git
```

Navigate to the project root and install the dependencies:

```
npm install
```

# Usage

To run the test cases in headed mode using the Chromium browser, you can also set browser to other browsers such firefox and webkit.

```
 npx playwright test --headed --project=chromium
```

To run the test cases in headless mode using the Chromium browser::

```
 npx playwright test --project=chromium
```

To display the test report:

```
npx playwright show-report
```

# Project Structure and Details

This project automates tests for the login and registration pages using the Page Object Model (POM) for better code reusability. The key page files include:

```
accountPage.ts  basePage.ts     loginPage.ts    registerPage.ts trackerPage.ts
```

**Faker** was used to generate this data for testing purposes. For more information, visit the Faker documentation.

The testcase are stored in `tests/login.spec.ts` and `tests/register.spec.ts`. A total of 10 testcases were created.

# Github actions

A Github action runs exists in .github/workflows/playwright.yml and the report is retained for 10 days.

# Runs

You can check the run and the report at https://github.com/ismailsobhy/playwright-tractive/actions/runs/11194656691
