Feature: Downloading a file

    Downlaoding a file from the intenet heroku
    Scenario: I want to downlaod a file from the heroku website
        Given I am on the heroku website
        Then I navigate to file Download
        Then I download "sample.pdf"
        Then I Verify "sample.pdf" exists in download folder


    Scenario: I want to securely download a file from the heroku website
        Given I am on the heroku website
        Then I navigate to secure file Downloader
        Then I securely download "Selenium.png"
        Then I verify "Selenium.pdf" exists in download folder too