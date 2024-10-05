import { BasePage } from "./basePage";
import { Locator, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";
export class RegisterPage extends BasePage {
  readonly firstNameInputField: Locator;
  readonly lastNameInputField: Locator;
  readonly emailInputField: Locator;
  readonly passwordInputField: Locator;
  constructor(page: Page) {
    super(page);
    this.firstNameInputField = page.locator("input[name='firstName']");
    this.lastNameInputField = page.locator("input[name='lastName']");
    this.emailInputField = page.locator("input[name='email']");
    this.passwordInputField = page.locator("input[name='password']");
  }

  async fillSignup({
    email = `ismailsobhy+${faker.string.numeric(4).toLowerCase()}@gmail.com`,
    password = faker.internet.password(),
    firstName = faker.person.firstName().toLowerCase(),
    lastName = faker.person.lastName().toLowerCase(),
  } = {}) {
    await this.emailInputField.fill(email);
    await this.passwordInputField.fill(password);
    await this.firstNameInputField.fill(firstName);
    await this.lastNameInputField.fill(lastName);
  }

  async clearSignup() {
    await this.firstNameInputField.clear();
    await this.lastNameInputField.clear();
    await this.emailInputField.clear();
    await this.passwordInputField.clear();
  }
}
