Feature: Adding a DB project

    I want to add a database connection to the project

    Scenario Outline: Connection DB

        Given I have a sqlite "<database>" available
        Then I make connection to "<database>"

        Examples:
            | database    |
            | myTestDb.db |


    Scenario Outline: Verify table exists
        Given I am connected to "<database>"
        Then I query database to check if "<table> exists"

        Examples:
            | database    | table |
            | myTestDb.db | users |


    Scenario Outline: I verify data exists in table
        Given I am connected to "<database>"
        Then I query "<table>"
        Then I verify that "<data>" exists

        Examples:
            | database | table | data |
            | myTestDb.db  | users  | yallie | 