@backSync
Feature: Back Sync
Synchronizing changes from TFS/TMT to feature file.

@done @automated
Scenario: Steps are synchronized back to feature file
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
		Then this is good for @someone
		"""
	And the SpecFlow2TFS synchronization is executed for the project and the local workspace
	Then the feature file in the local workspace should have been updated to contain
		"""
		@tfs:[tfs-project-url]
		Feature: Sample feature

		@tc:[id-of-test-case]
		Scenario Outline: Sample scenario outline
			When <something> really happens with <someone>
			Then this is good for <someone>

		Examples:
			| something | someone |
			| foo       | Joe     |
			| bar       | Jill    |
			| boz       | Jack    | 
		"""

@done @automated
Scenario: Parameter values are synchronized back to Scenario Outline
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
	When the test case parameter data is updated to
		| something | someone |
		| one       | Tarzan  |
		| two       | Thomas  |
	And the SpecFlow2TFS synchronization is executed for the project and the local workspace
	Then the feature file in the local workspace should have been updated to contain
		"""
		@tfs:[tfs-project-url]
		Feature: Sample feature

		@tc:[id-of-test-case]
		Scenario Outline: Sample scenario outline
			When <something> happens with <someone>

		Examples:
			| something | someone |
			| one       | Tarzan  |
			| two       | Thomas  |
		"""

@done @automated
Scenario: Title is synchronized back to feature file
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
	When the test case title is updated to 'Scenario Outline: Updated scenario outline'
	And the SpecFlow2TFS synchronization is executed for the project and the local workspace
	Then the feature file in the local workspace should have been updated to contain
		"""
		@tfs:[tfs-project-url]
		Feature: Sample feature

		@tc:[id-of-test-case]
		Scenario Outline: Updated scenario outline
			When <something> happens with <someone>

		Examples:
			| something | someone |
			| foo       | Joe     |
			| bar       | Jill    |
			| boz       | Jack    | 
		"""
	And the automation details are provided according to the test generated from the scenario

