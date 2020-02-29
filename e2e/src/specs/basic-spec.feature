Feature: Increment the counter
    This feature lets a user increment the counter by clicking on the button.

Scenario: Basic increment scenario
    Given I am on the home page
    When I click on the increment button 21 times
    Then The counter should show "21"