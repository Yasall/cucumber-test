Feature: Logging in a website

    Logging in to sauce demo website
    
Background: Background name
 Given I am on front page and I want to log in to sauce demo
 Scenario: Unsuccessfull login to website
 
 When A user enters an incorrect username and password
  | username   | password     |  
  | testName   | secret_sauce | 
 Then I click on the login button
 Then The error message should contain "Epic sadface"


  Scenario: Successfull login in to website
 
 Then  I enter the username "standard_user"
 Then  I enter the password "secret_sauce"
 Then I click on the login button
 Then Verify that I am logged in "inventory.html"

