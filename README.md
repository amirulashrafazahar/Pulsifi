# Pulsifi Automation Framework

This is a Playwright-based automation framework using the Page Object Model (POM) design pattern. The framework dynamically generates test data and uses structured methods for automating test cases.

## Prerequisites
- **Node.js** (version 14 or higher)
- **NPM** (Node Package Manager, included with Node.js)
- **Playwright** (for browser automation)

## Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/amirulashrafazahar/Pulsifi.git
2. Navigate to the project directory
   cd Pulsifi
3. Install dependencies
   npm install
4. Install Playwright browsers:
   npx playwright install
## Dynamic Mailbox String
Description: The mailbox string used in tests is generated dynamically to ensure each test run uses a unique value. The string is formatted as test_YYYYMMDD_HHMMSS, where:
YYYY: Year
MM: Month
DD: Day
HH: Hours
MM: Minutes
SS: Seconds
Example: If the current date and time are November 1, 2024, at 7:49:58 AM, the generated string would be test_20241101_074958.

## Running Test
npx playwright test

## View the HTML report:
npx playwright show-report



