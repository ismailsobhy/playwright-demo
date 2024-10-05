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

test("Successful login", async () => {
  await loginPage.fillLogin("ismailsobhy@gmail.com", "test1234");
  await loginPage.clickOnSubmit();
  await accountPage.checkIfOnAccountPage();
});

test("Fill email only in login", async () => {
  await loginPage.fillLogin("ismailsobhy@gmail.com", "");
  await loginPage.isSubmitButtonDisabled();
});

test("Fill invalid email and passowrd in login", async () => {
  await loginPage.fillLogin("test", "test");
  await loginPage.isSubmitButtonDisabled();
});

test("Fill password only in login", async () => {
  await loginPage.fillLogin("", "test1234");
  await loginPage.isSubmitButtonDisabled();
});

test("Fill nothing in login", async () => {
  await loginPage.isSubmitButtonDisabled();
});
