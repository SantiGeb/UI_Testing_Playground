# 🎯 Playwright UI Automation – UI Testing Playground

![Status](https://img.shields.io/badge/status-in%20progress-yellow)
![Tech](https://img.shields.io/badge/stack-Playwright%20%7C%20TypeScript%20%7C%20Node.js-blue)

This repository contains an automated UI testing project built with Playwright and TypeScript, targeting http://uitestingplayground.com. The goal is to automate all **23 official modules** of the UI Testing Playground website using a clean and scalable automation framework.

## 🎯 Purpose
- Build a maintainable and scalable UI automation framework.
- Automate all **23 UI Testing Playground modules** end-to-end.
- Strengthen Playwright + TypeScript expertise.
- Apply POM (Page Object Model) architecture and modern QA automation practices.
- Use this project as a professional automation portfolio for hiring managers.

## 🧰 Technologies & Skills Demonstrated
- **Tools & Languages:** Playwright, TypeScript, Node.js, npm, Git, GitHub, VS Code.  
- **Testing Skills:** Functional UI automation, assertions, smart waits, handling dynamic elements, cross-browser automation.  
- **Engineering Practices:** POM architecture, reusable utilities, clean modular structure, CI/CD readiness, HTML + Trace debugging.

## 📊 Status & Progress — 23 Official Test Cases

| #  | UI Testing Playground Module     | Status       |
|----|----------------------------------|--------------|
| 1  | Dynamic ID                         |🟢 Completed  |
| 2  | Class Attribute                    |🟢 Completed  |
| 3  | Hidden Layers                      | ⏳ Pending   |
| 4  | Load Delay                         | ⏳ Pending   |
| 5  | AJAX Data                          | ⏳ Pending   |
| 6  | Client Side Delay                  | ⏳ Pending   |
| 7  | Click                              | ⏳ Pending   |
| 8  | Text Input                         | ⏳ Pending   |
| 9  | Scrollbars                         | ⏳ Pending   |
| 10 | Dynamic Table                      | ⏳ Pending   |
| 11 | Verify Text                        | ⏳ Pending   |
| 12 | Progress Bar                       | ⏳ Pending   |
| 13 | Visibility                         | ⏳ Pending   |
| 14 | Sample App                         | ⏳ Pending   |
| 15 | Mouse Over                         | ⏳ Pending   |
| 16 | Non-Breaking Space                 | ⏳ Pending   |
| 17 | Overlapped Element                 | ⏳ Pending   |
| 18 | Shadow DOM                         | ⏳ Pending   |
| 19 | Alerts                             | ⏳ Pending   |
| 20 | File Upload                        | ⏳ Pending   |
| 21 | Animated Button                    | ⏳ Pending   |
| 22 | Disabled Input                     | ⏳ Pending   |
| 23 | Auto Wait                          | ⏳ Pending   |

**Total Planned:** 23  
**Completed:** 0  
**In Progress:** 23  

## ⚡ Quick Start
```bash
git clone <your-repository-url>.git
cd <your-project-folder>
npm install
npx playwright install
npx playwright test
npx playwright test --ui
npx playwright show-report
```

## 🗂 Project Layout
```
.
├── tests/                          
│   ├── dynamic-id.spec.ts
│   ├── class-attribute.spec.ts
│   ├── <remaining-test-files>.ts
│   └── ...
├── pages/                          
│   ├── base.page.ts
│   ├── dynamic-id.page.ts
│   ├── class-attribute.page.ts
│   ├── <remaining-pages>.ts
│   └── ...
├── utils/                          
│   ├── test-data.ts
│   ├── assertions.ts
│   └── ...
├── playwright-report/               
├── playwright.config.ts             
├── package.json
├── tsconfig.json
└── README.md
```

## 🧩 How the Code Is Organized
- **pages/** – Page Object Model classes for each module.  
- **tests/** – Test specs mapped 1:1 to each module.  
- **utils/** – Helpers for assertions, data generation, and utilities.  
- **playwright.config.ts** – Central configuration for browsers, reporters, tracing, timeouts, etc.

## 🧠 Best Practices Used
- Full POM architecture  
- Smart waits only (no manual sleeps)  
- Clean selectors stored inside POMs  
- DRY and modular code structure  
- HTML & Trace reports enabled  
- CI/CD-ready project layout  

## 🔁 CI/CD (GitHub Actions – Ready to Add)
```yaml
name: Playwright Tests
on:
  push:
  pull_request:
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npx playwright install --with-deps
      - run: npx playwright test
      - uses: actions/upload-artifact@v3
        with:
          name: playwright-report
          path: playwright-report
```

## 📈 Test Results
Playwright automatically generates:  
- HTML Reports  
- Screenshots  
- Console logs  
- DOM snapshots  
- Trace Viewer  
- Network logs  

To open the report:
```bash
npx playwright show-report
```

## 📝 Notes for Hiring Managers
This repository demonstrates:  
- Ability to build scalable UI automation frameworks  
- Strong understanding of Playwright + TypeScript  
- Accurate automation of real-world UI challenges  
- Clean, maintainable code practices  
- CI/CD-ready organization  
- Continuous iteration and improvement  

The project aims to complete all **23 official modules** of UI Testing Playground.

## 📬 Contact
**Author:** Santiago Garza  
**Role:** QA Engineer – Manual & Automation  
GitHub: <[SantiGeb](https://github.com/SantiGeb)>  
LinkedIn: <[SantiagoGarza](https://www.linkedin.com/in/santiago-g-4b4564149/)>  
Email: <garzaestradasantiago@gmail.com>
