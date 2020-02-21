# Angular BDD

This project is part of the tutorial BDD with Angular and CucumberJs

#### Introduction

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
### CucumberJS

Since this example is focused on Angular a we will use [CucumberJS](https://github.com/cucumber/cucumber-js) along with [Protractor](https://www.protractortest.org/) and the framework [protractor-cucumber-framework](https://github.com/protractor-cucumber-framework/protractor-cucumber-framework)

### Implementation

We will start first by creating a simple Angular counter app.