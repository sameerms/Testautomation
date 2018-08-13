Feature: Tag Synchronization

@done @automated
Scenario: Add scenario tags to the created test case
	Given there is a VSTS project
	And there is a feature file in the local workspace that was not synchronized yet
		"""
		@ftag
		Feature: Sample feature

		@mytag @othertag
		Scenario: Sample scenario
			Given there is something
			When I do something
			Then something will happen
		"""
	When the SpecFlow2TFS synchronization is executed for the project and the local workspace
	Then a new test case work item "Scenario: Sample scenario" is created in the project
	And the new test case has the following tags: "mytag, othertag, ftag"