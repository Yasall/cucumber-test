Feature: Logging in a website

    Logging in to sauce demo website
    
 Scenario: Successfull login in to website
 Background: Background name
 Given I am on front page and I want to log in to sauce demo
 Then  I enter the username "standard_user"
 Then  I enter the password "secret_sauce"
 Then I click on the login button
 