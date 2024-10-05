import { Page, expect, Locator } from "@playwright/test";

export class BasePage {
  protected page: Page;
  readonly submitButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.submitButton = page.locator("button[type='submit']");
  }

  async isSubmitButtonDisabled() {
    await expect(this.submitButton).toBeVisible();
    await expect(this.submitButton).toBeDisabled();
  }

  async clickOnSubmit() {
    await expect(this.submitButton).toBeVisible();
    await this.submitButton.click();
  }

  async checkEmphasisTextForFieldContains(
    fieldName: string,
    text: string,
    attributeName = "name"
  ) {
    await expect(
      this.page.locator(`input[${attributeName}="${fieldName}"] ~ em`)
    ).toContainText(text);
  }
}
