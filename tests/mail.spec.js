import { test, expect } from '@playwright/test';
const { MainPage } = require('../pageobjects/MainPage');

function generateDynamicString() {
  const now = new Date();
  return `test_${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(now.getSeconds()).padStart(2, '0')}`;
}

test.describe( () => {
  test('Verify mailbox', async ({ page }) => {
    const mainPage = new MainPage(page);
    const dynamicMailbox = generateDynamicString();
    await mainPage.goTo();
    await mainPage.addMail(dynamicMailbox);
    await expect(page.locator('h2')).toContainText(dynamicMailbox);
  });
})