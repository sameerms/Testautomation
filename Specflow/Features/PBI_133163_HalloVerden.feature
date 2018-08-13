Feature: PBI_133163_HalloVerden
	In order to avoid silly mistakes
	As a math idiot
	I want to be told the sum of two numbers

@mytag
Scenario: Add two numbers
	Given I have entered 50 into the calculator
	And I have entered 70 into the calculator
	When I press add
	Then the result should be 120 on the screen

	@mytag
	Scenario: Stratup Skjerm
Given Gitt hvem som helst
When Når jeg går til URL hdir-elsa.no 
Then Så ser jeg forsiden

@mytag
Scenario: Liste opp søknader
Given Gitt dato for når søknadene kommer inn
 When Når saksbehandler ser listen
Then Så sorteres den med de eldste søknadene øverst (descending på dato)

@mytag
Scenario: Blind persona
Given Gitt saksbehandler med begrenset syn
When Når jeg åpner Elsa
Then Så kan jeg forstå alt som finnes på siden

@mytag
Scenario: Ingen søknader i liste
Given Gitt at det ikke finnes søknader i databasen
When Når saksbehandler går inn i Elsa
Then Så vises en tom liste
