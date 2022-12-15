Feature: Adding items to cart

    I want to add items to my cart

Scenario: Adding items to cart
Given I have logged in to saucedemo "standard_user", "secret_sauce"
Then I add the backpack to the cart
Then I add light to the cart
Then I verify I have items in cart
Then I remove the bag from my cart
Then I remove the light from my cart
Then I verify the cart should be empty

