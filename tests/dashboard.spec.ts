import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard.page';

test('should display the correct title on the dashboard', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);
  await dashboardPage.goto();
  await expect(dashboardPage.title).toHaveText('Dashboard');
});