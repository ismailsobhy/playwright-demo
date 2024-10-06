import { test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { CookiesHelpers } from "../utils/cookiesHelpers.ts";
import { AccountPage } from "../pages/accountPage";

let loginPage: LoginPage;
let accountPage: AccountPage;

test.beforeEach(async ({ browser }) => {
  const page = await CookiesHelpers.setCookies(browser);
  await page.goto("/");
  loginPage = new LoginPage(page);
  accountPage = new AccountPage(page);
});

test("Successful Login with Valid Credentials", async () => {
  await loginPage.fillLogin("brucebanner@gmail.com", "test1234");
  await loginPage.clickOnSubmit();
  await accountPage.checkIfOnAccountPage();
});

test("Cannot Submit Login with Email Only", async () => {
  await loginPage.fillLogin("brucebanner@gmail.com", "");
  await loginPage.isSubmitButtonDisabled();
});

test("Cannot Submit with Invalid Email and Password", async () => {
  await loginPage.fillLogin("test", "test");
  await loginPage.isSubmitButtonDisabled();
});

test("Cannot Submit Login with Password Only", async () => {
  await loginPage.fillLogin("", "test1234");
  await loginPage.isSubmitButtonDisabled();
});

test("Cannot Submit Empty Login Form", async () => {
  await loginPage.isSubmitButtonDisabled();
});
