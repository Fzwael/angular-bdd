// Import the cucumber operators we need
import { Before, Given, Then, When } from "cucumber";
import { AppPage } from "../app.po";
import { element, by } from "protractor";
import { expect } from "chai";

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given("I am on the home page", async () => {
  // Navigate to home page.
  await page.navigateTo();
});

When("I click on the increment button {int} times", async (x: number) => {
  // Click on the increment button x times.
  const incrementButton = element(by.id("increment"));
  for (let index = 0; index < x; index++) {
    await incrementButton.click();
  }
});

Then("The counter should show {string}", async (x: string) => {
  // Expect that we get the correct value showing
  expect(await element(by.id("counter")).getText()).to.equal(x);
});
