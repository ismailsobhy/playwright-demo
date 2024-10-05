import { BasePage } from "./basePage";
import { expect, Locator, Page } from "@playwright/test";

export class AccountPage extends BasePage {
  readonly pageHeader: Locator;
  readonly signOutElem: Locator;
  readonly signOutConfirm: Locator;
  constructor(page: Page) {
    super(page);
    this.pageHeader = page.locator("main", { hasText: "Manage your Account" });
    this.signOutElem = page.locator("sign-out-container");
    this.signOutConfirm = page.locator("span", { hasText: "Sign Out" });
  }

  async checkIfOnAccountPage() {
    await expect(this.pageHeader).toBeVisible({ timeout: 10000 });
  }

  async clickOnSignOut() {
    await this.signOutElem.click();
    await this.signOutConfirm.click();
  }
}
