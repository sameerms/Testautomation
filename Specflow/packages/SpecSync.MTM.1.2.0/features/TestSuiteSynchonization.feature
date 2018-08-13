Feature: Test Suite Synchonization

@automated @done
Scenario: Add synchronized scenarios to a test suite
	Given there is a VSTS project with an empty test suite 'MySuite'
	And there is a feature file in the local workspace that was not synchronized yet
		"""
		Feature: My Feature
		Scenario: Scenario 1
			When I do something
		Scenario: Scenario 2
			When I do something
		Scenario: Scenario 3
			When I do something
		"""
	And the synchronizer is configured to add test cases to test suite 'MySuite'
	When the SpecFlow2TFS synchronization is executed for the project and the local workspace
	Then the test suite contains the following test cases
		| test case            |
		| Scenario: Scenario 1 |
		| Scenario: Scenario 2 |
		| Scenario: Scenario 3 |

@automated @done
Scenario: Add synchronized scenarios to a test suite specified with ID
	Given there is a VSTS project with an empty test suite
	And there is a feature file in the local workspace that was not synchronized yet
		"""
		Feature: My Feature
		Scenario: Scenario 1
			When I do something
		"""
	And the synchronizer is configured to add test cases to test suite '#[id-of-test-suite]'
	When the SpecFlow2TFS synchronization is executed for the project and the local workspace
	Then the test suite contains the following test cases
		| test case            |
		| Scenario: Scenario 1 |

@automated @done
Scenario: Configure synchronization to only update already synchronized scenarios
	Given there is a VSTS project with an empty test suite 'MySuite'
	And the synchronizer is configured to add test cases to test suite 'MySuite'
	And there is a feature file in the local workspace that was already synchronized before
		"""
		@tfs:[tfs-project-url]
		Feature: Sample feature

		Scenario: Not linked yet
			When I do something
		"""
	When the SpecFlow2TFS synchronization is executed for the project and the local workspace
	Then the test suite contains the following test cases
		| test case                |
		| Scenario: Not linked yet |
