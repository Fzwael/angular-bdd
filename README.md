# Angular BDD

This project is part of the tutorial BDD with Angular and CucumberJs.
Full code can be found here [Github](https://github.com/Fzwael/angular-bdd)

## Introduction

[BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) (Behavior Driven Development) became more common these years, especially with Scrum teams since it gives more agility between product owners (and functionnal people) and the developers.

One of the best tools to achieve BDD is [cucumber](https://cucumber.io/) along with its syntax called [gherkin](https://cucumber.io/docs/gherkin/) it gives an easier way to accomplish BDD.

The gherkin syntax looks like this :
``` gherkin
  Scenario: Some determinable business situation
    Given some precondition
      And some other precondition
     When some action by the actor
      And some other action
      And yet another action
     Then some testable outcome is achieved
      And something else we can check happens too
```
## CucumberJS

Since this example is focused on Angular a we will use [CucumberJS](https://github.com/cucumber/cucumber-js) along with [Protractor](https://www.protractortest.org/) and the framework [protractor-cucumber-framework](https://github.com/protractor-cucumber-framework/protractor-cucumber-framework)

## Implementation

### Angular application

We will start first by creating a simple Angular counter app.
We will do so just by changing the app component of the deault app generated with the [angular cli](https://cli.angular.io/) via the command `ng new angular-bdd` to the following:

``` html
<h3 id="counter">{{ counter }}</h3>

<button id="increment" (click)="increment()">INCREMENT</button>

<button id="decrement" (click)="decrement()">DECREMENT</button>
```

And

``` typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  counter = 0;

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--
  }
}
```

### Configuring Protractor & Cucumber

#### Installing Protractor:
To install Protractor you can follow the official documentation found in : [protractortest.org](https://www.protractortest.org/).

Running the following commands will do it :
```
npm install -g protractor
webdriver-manager update
ng e2e --port 4201
```

Angular should have created a test file called **app.e2e-spec.ts** with a test named **should display welcome message**.
You can modify that test to the following to test if everything is working fine (We will keep the default configuration for Protractor provided by Angular CLI):

``` typescript
  it('should have AngularBdd as a title', () => {
    page.navigateTo();
    expect(browser.getTitle()).toEqual('AngularBdd');
  });
```

#### Configuring CucumberJS
To use Cucumber with Protractor we are going to use this plugin : [protractor-cucumber-framework](https://www.npmjs.com/package/protractor-cucumber-framework). We can install it via the command : 
```
npm install --save-dev cucumber protractor-cucumber-framework chai @types/chai @types/cucumber
```

Now we can follow the official documentation of the protractor-cucumber-framework and configure our protractor.conf.js like the following :
``` javascript
exports.config = {
  // set to "custom" instead of cucumber.
  framework: 'custom',
 
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
 
  // require feature files
  specs: [
    './src/specs/*.feature' // accepts a glob
  ],
 
  cucumberOpts: {
    // require step definitions
    require: [
      './src/steps/*.steps.ts' // accepts a glob
    ]
  }
};
```

You can see that in the specs section we are only targeting the .feature files. Those files are used by cucumber to describe the app's behavior, so let's go ahead and create a simple one (basic-spec.feature) :

``` Gherkins
Feature: Increment the counter
    This feature lets a user increment the counter by clicking on the button.

Scenario: Basic increment scenario
    Given I am on the home page
    When I click on the increment button 21 times
    Then The counter should show "21"
```

Now let's run our `ng e2e` command.
As you can notice you will get a bunch of undefined warnings from cucumber, this basically tells us that what Protractor can't translate what we just wrote in Gherkins, which is normal since in a scrum environment the product owners/functionnals are the ones who write this files in human language then comes the role of someone with some programming language to translate those. Let's do that.

Cucumber actually helps us by suggesting the methods that needs to be implemented in the output, all we have to do is create a new file under e2e/steps (let's call it basic.steps.ts)

``` typescript
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
```
Now we can run `ng e2e` command and check the result.

## Conclusion

This was a quick introduction to BDD with Angular, Cucumber and Protractor. We can always add other features or senarios.

The good thing about this configuration is, for example, we want to test the decrement feature we won't have to redefine the basic scenarios (going to the home page and expecting the result). This is very helpful since in theory someone working on functionnal definitions could write new tests without having to add any new code to the application.

Full code can be found here [Github](https://github.com/Fzwael/angular-bdd)
