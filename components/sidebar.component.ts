import { Page, Locator } from '@playwright/test';

export class SidebarComponent {
  readonly page: Page;
  readonly dashboardLink: Locator;
  readonly entryLink: Locator;
  readonly exitLink: Locator;
  readonly spacesLink: Locator;
  readonly paymentsLink: Locator;
  readonly reportsLink: Locator;
  readonly usersLink: Locator;
  readonly userProfile: Locator;
  readonly userName: Locator;
  readonly userEmail: Locator;
  readonly userRole: Locator;
  readonly logoutButton: Locator;
  readonly closeModalButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dashboardLink = page.getByTestId('dashboard-link');
    this.entryLink = page.getByTestId('entry-link');
    this.exitLink = page.getByTestId('exit-link');
    this.spacesLink = page.getByTestId('spaces-link');
    this.paymentsLink = page.getByTestId('payments-link');
    this.reportsLink = page.getByTestId('reports-link');
    this.usersLink = page.getByTestId('users-link');
    this.userProfile = page.getByTestId('user-profile');
    this.userName = page.getByTestId('user-name');
    this.userEmail = page.getByTestId('user-email');
    this.userRole = page.getByTestId('user-role');
    this.logoutButton = page.getByTestId('logout-btn');
    this.closeModalButton = page.getByTestId('close-modal-btn');
  }

  async openUserModal() {
    await this.userProfile.click();
  }

  async closeUserModal() {
    await this.closeModalButton.click();
  }

  async logout() {
    await this.openUserModal();
    await this.logoutButton.click();
  }
}