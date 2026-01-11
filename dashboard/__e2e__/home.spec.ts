import { test, expect } from '@playwright/test';

test('has page title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Dashboard Application/);
});
