Feature: testProve
	Go to startside face

@mytag
Scenario: Startside og logg inn
	Given inni startside
	When når jeg skriver epostaddresse
	When når jeg skriver passord
	Then jeg er logget inn
