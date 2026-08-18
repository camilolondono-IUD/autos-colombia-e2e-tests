import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Login', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('successful login redirects to the dashboard', async ({ page }) => {
    await loginPage.login('admin', '12345');
    await expect(page).toHaveURL(/dashboard\.html/);
  });

  test('invalid credentials show an error message', async ({ page }) => {
    await loginPage.login('wronguser', 'wrongpassword');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).not.toBeEmpty();
  });

  test('empty credentials do not redirect away from login', async ({ page }) => {
    await loginPage.submitButton.click();
    await expect(page).toHaveURL(/login\.html/);
  });
});