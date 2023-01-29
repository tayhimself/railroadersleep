import { test, expect } from '@playwright/test';


test('meta is correct', async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle('Railroader Sleep Beta');
});

test('all articles', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Articles' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*articles/);

  // Expect the page to contain at least 4 article elements.
  await page.locator('article').first().waitFor();
  expect(await page.locator('article').count()).toBeGreaterThanOrEqual(4);


});