import { test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { CookiesHelpers } from "../utils/cookiesHelpers";
import { AccountPage } from "../pages/accountPage";
import { RegisterPage } from "../pages/registerPage";
import { TrackerPage } from "../pages/trackerPage";

let loginPage: LoginPage;
let accountPage: AccountPage;
let registerPage: RegisterPage;
let trackerPage: TrackerPage;

test.beforeEach(async ({ browser }) => {
  const page = await CookiesHelpers.setCookies(browser);
  await page.goto("/");
  loginPage = new LoginPage(page);
  registerPage = new RegisterPage(page);
  accountPage = new AccountPage(page);
  trackerPage = new TrackerPage(page);
});

test("Successful Register", async () => {
  await loginPage.clickRegister();
  await registerPage.fillSignup();
  await registerPage.clickOnSubmit();
  await trackerPage.checkHeader();
});

test("Fill nothing in Register", async () => {
  await loginPage.clickRegister();
  await loginPage.isSubmitButtonDisabled();
});

test("Invalid email in Register", async () => {
  await loginPage.clickRegister();
  await registerPage.fillSignup({ email: "test" });
  await registerPage.checkEmphasisTextForFieldContains(
    "email",
    "The email address is invalid."
  );
  await loginPage.isSubmitButtonDisabled();
});

test("Invalid password in Register", async () => {
  await loginPage.clickRegister();
  await registerPage.fillSignup({ password: "test" });
  await registerPage.checkEmphasisTextForFieldContains(
    "password",
    "Minimum length is 8 characters."
  );
  await loginPage.isSubmitButtonDisabled();
});

test("Empty fields in Register", async () => {
  await loginPage.clickRegister();
  await registerPage.fillSignup();
  await registerPage.clearSignup();
  await registerPage.checkEmphasisTextForFieldContains(
    "firstName",
    "This field is required."
  );
  await registerPage.checkEmphasisTextForFieldContains(
    "lastName",
    "This field is required."
  );
  await registerPage.checkEmphasisTextForFieldContains(
    "email",
    "This field is required."
  );
  await registerPage.checkEmphasisTextForFieldContains(
    "password",
    "This field is required."
  );
  await loginPage.isSubmitButtonDisabled();
});
