import { BasePage } from "./basePage";
import { Locator, Page } from "@playwright/test";

export class LoginPage extends BasePage {
  readonly loginForm: Locator;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly registerButton: Locator;
  constructor(page: Page) {
    super(page);
    this.loginForm = page.locator("form[name='loginForm']");
    this.emailField = page.locator("input[type='email']");
    this.passwordField = page.locator("input[type='password']");
    this.registerButton = page.locator("a", { hasText: "Create Account" });
  }

  async fillLogin(email: string, password: string) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
  }

  async clickRegister() {
    await this.registerButton.click();
  }
}
