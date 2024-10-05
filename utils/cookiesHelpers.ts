import { Browser } from "@playwright/test";

export class CookiesHelpers {
  static async setCookies(browser: Browser) {
    const context = await browser.newContext();
    await context.addCookies([
      {
        name: "interview",
        value: "7lBPV9iik6r9MNE5dKw9nzF9CstdlEJl",
        domain: ".tractive.com",
        path: "/",
      },
    ]);

    const page = await context.newPage();
    return page;
  }
}
