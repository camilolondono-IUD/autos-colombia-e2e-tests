import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;

  readonly title: Locator;
  readonly subtitle: Locator;

  readonly occupiedSpacesValue: Locator;
  readonly vehiclesTodayValue: Locator;
  readonly earningsTodayValue: Locator;

  readonly activeAlertsList: Locator;
  readonly noActiveAlerts: Locator;

  readonly recentVehiclesTable: Locator;

  readonly registerEntryButton: Locator;
  readonly registerExitButton: Locator;
  readonly viewSpacesButton: Locator;
  readonly generateReportButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.title = page.getByTestId('dashboard-title');
    this.subtitle = page.getByTestId('dashboard-subtitle');

    this.occupiedSpacesValue = page.getByTestId('dashboard-occupied-spaces-value');
    this.vehiclesTodayValue = page.getByTestId('dashboard-vehicles-today-value');
    this.earningsTodayValue = page.getByTestId('dashboard-earnings-today-value');

    this.activeAlertsList = page.getByTestId('dashboard-active-alerts-list');
    this.noActiveAlerts = page.getByTestId('dashboard-no-active-alerts');

    this.recentVehiclesTable = page.getByTestId('dashboard-recent-vehicles-table');

    this.registerEntryButton = page.getByTestId('dashboard-register-entry-btn');
    this.registerExitButton = page.getByTestId('dashboard-register-exit-btn');
    this.viewSpacesButton = page.getByTestId('dashboard-view-spaces-btn');
    this.generateReportButton = page.getByTestId('dashboard-generate-report-btn');
  }

  async goto() {
    await this.page.goto('dashboard.html');
  }
}