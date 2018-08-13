Feature: Failure Recovery

@edge @done @automated
Scenario: Create new test case and update tag if the test case tag refers to a missing test case
	Given there is a VSTS project
	And there is a feature file in the local workspace that was already synchronized before
		"""
		Feature: Sample feature

		@tc:[id-of-test-case]
		Scenario: Updated sample scenario
			Given there is something new
			When I do something new
			Then something new will happen
		"""
	And the work item has been destroyed
	When the SpecFlow2TFS synchronization is executed for the project and the local workspace
	Then a new test case work item "Scenario: Updated sample scenario" is created in the project
	And a tag "@tc:[id-of-old-test-case]" is removed from the scenario outline in the local workspace
	And a tag "@tc:[id-of-new-test-case]" is added to the scenario outline in the local workspace

@edge @done @automated @backSync
Scenario: Invalid Gherkin is synchronized back
	Given there is a VSTS project
	And the synchronizer is configured to enable back syncing
	And there is a feature file in the local workspace that was not synchronized yet
		"""
		Feature: Sample feature

		Scenario Outline: Sample scenario outline
			When <something> happens with <someone>

		Examples:
			| something | someone |
			| foo       | Joe     |
			| bar       | Jill    |
			| boz       | Jack    | 
		"""
	And the feature file has been synchronized already
	When the test case steps are updated to 
		"""
		When @something really happens with @someone
		Invalid this is good for @someone
		"""
	And the SpecFlow2TFS synchronization is executed for the project and the local workspace
	Then the synchronization should abort with an error

@edge @done @automated @backSync
Scenario: Strange Gherkin is synchronized back
	Given there is a VSTS project
	And the synchronizer is configured to enable back syncing
	And there is a feature file in the local workspace that was not synchronized yet
		"""
		Feature: Sample feature

		Scenario Outline: Sample scenario outline
			When <something> happens with <someone>

		Examples:
			| something | someone |
			| foo       | Joe     |
			| bar       | Jill    |
			| boz       | Jack    | 
		"""
	And the feature file has been synchronized already
	When the test case title is updated to
		"""
		Scenario: hello
			When hello

		Scenario Outline: Updated scenario outline
		"""
	And the SpecFlow2TFS synchronization is executed for the project and the local workspace
	Then the synchronization should abort with an error
