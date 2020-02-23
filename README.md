# Angular BDD

This project is part of the tutorial BDD with Angular and CucumberJs

## Introduction

[BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) (Behavior Driven Developement) became more common these years specially with Scrum teams since it gives more agility between product owners (and functionnal people) and the develpers.

One of the best tool to achieve BDD is [cucumber](https://cucumber.io/) along with its syntax called [gherkin](https://cucumber.io/docs/gherkin/) it gives an easier way to accomplish BDD.

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