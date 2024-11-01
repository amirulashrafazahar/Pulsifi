import { test, expect } from '@playwright/test';
const { MainPage } = require('../pageobjects/MainPage');
const dataSet = JSON.parse(JSON.stringify(require("../utils/testData.json")));

test.describe( () => {
  test('Verify mailbox', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goTo();
    await mainPage.addMail(dataSet.mailbox);
    await expect(page.locator('h2')).toContainText(dataSet.mailbox);
  });
})