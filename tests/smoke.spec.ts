import { test, expect } from '@playwright/test';

test('login page loads correctly', async ({ page }) => {
  await page.goto('login.html');
  await expect(page).toHaveTitle(/Login/i);
});

test('login form data-testid attributes are present', async ({ page }) => {
  await page.goto('login.html');
  await expect(page.getByTestId('login-username-input')).toBeVisible();
  await expect(page.getByTestId('login-password-input')).toBeVisible();
  await expect(page.getByTestId('login-submit-button')).toBeVisible();
});