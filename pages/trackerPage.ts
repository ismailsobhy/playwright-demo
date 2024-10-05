import { BasePage } from "./basePage";
import { expect, Locator, Page } from "@playwright/test";

export class TrackerPage extends BasePage {
  readonly trackerHeader: Locator;
  constructor(page: Page) {
    super(page);
    this.trackerHeader = page.locator("text=Enter Tracker ID");
  }

  async checkHeader() {
    await expect(this.trackerHeader).toBeVisible();
  }
}
