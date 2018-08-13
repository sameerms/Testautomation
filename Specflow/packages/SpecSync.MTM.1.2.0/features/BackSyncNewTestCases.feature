﻿@backSync
Feature: BackSync new test cases
	New test cases that are in a test suite can be synchronized back to new feature files

@done @automated
Scenario: Create feature file from new test case
	Given there is a VSTS project with an empty test suite 'MySuite'
	And the synchronizer is configured to enable back syncing
	And the synchronizer is configured to add test cases to test suite 'MySuite'
	And the synchronizer is configured to create local scenarios for new test cases
	And there is a new test case in suite 'MySuite' as
		| field | value                                         |
		| title | Scenario: Sample scenario                     |
		| steps | Given there is something; When I do something |
	When the SpecFlow2TFS synchronization is executed for the project and the local workspace
	Then the local worskapce contains a feature file '[id-of-test-case].feature' as
		"""
		@tfs:[tfs-project-url]
		Feature: [id-of-test-case]

		@tc:[id-of-test-case]
		Scenario: Sample scenario
			Given there is something
			When I do something
		"""
	And the feature file is added to the project

@done @automated
Scenario: Create feature file from new parametrized test case
	Given there is a VSTS project with an empty test suite 'MySuite'
	And the synchronizer is configured to enable back syncing
	And the synchronizer is configured to add test cases to test suite 'MySuite'
	And the synchronizer is configured to create local scenarios for new test cases
	And there is a new test case in suite 'MySuite' as
		| field | value                                         |
		| title | Scenario Outline: Sample scenario outline     |
		| steps | Given there is @someone; When I do @something |
	And the test case parameter data is updated to
		| someone |something | 
		| Tarzan  |one       | 
		| Thomas  |two       | 
	When the SpecFlow2TFS synchronization is executed for the project and the local workspace
	Then the local worskapce contains a feature file '[id-of-test-case].feature' as
		"""
		@tfs:[tfs-project-url]
		Feature: [id-of-test-case]

		@tc:[id-of-test-case]
		Scenario Outline: Sample scenario outline
			Given there is <someone>
			When I do <something>
		Examples: 
			| someone |something | 
			| Tarzan  |one       | 
			| Thomas  |two       | 
		"""
	And the feature file is added to the project

@excelExamples @done @automated
Scenario: Create feature file with Ecxel examples from new parametrized test case
	Given there is a VSTS project with an empty test suite 'MySuite'
	And the project is configured to use SpecFlow+ Excel
	And the synchronizer is configured to enable back syncing
	And the synchronizer is configured to add test cases to test suite 'MySuite'
	And the synchronizer is configured to create local scenarios for new test cases
	And there is a new test case in suite 'MySuite' as
		| field | value                                         |
		| title | Scenario Outline: Sample scenario outline     |
		| steps | Given there is @someone; When I do @something |
	And the test case parameter data is updated to
		| someone | something |
		| Tarzan  | one       |
		| Thomas  | two       |
	When the SpecFlow2TFS synchronization is executed for the project and the local workspace
	Then the local worskapce contains a feature file '[id-of-test-case].feature' as
		"""
		@tfs:[tfs-project-url]
		Feature: [id-of-test-case]

		@tc:[id-of-test-case]
		Scenario Outline: Sample scenario outline
			Given there is <someone>
			When I do <something>
		@source:[id-of-test-case].xlsx
		Examples: 
			| someone |something | 
		"""
	And the local worskapce contains an Excel file '[id-of-test-case].xlsx' with a worksheet as
		| someone | something |
		| Tarzan  | one       |
		| Thomas  | two       |
	And the feature file and the excel file are added to the project

@done @automated
Scenario: Create feature file from new test case without title prefix
	Given there is a VSTS project with an empty test suite 'MySuite'
	And the synchronizer is configured to enable back syncing
	And the synchronizer is configured to add test cases to test suite 'MySuite'
	And the synchronizer is configured to create local scenarios for new test cases
	And there is a new test case in suite 'MySuite' as
		| field | value                                         |
		| title | Sample scenario                               |
		| steps | Given there is something; When I do something |
	When the SpecFlow2TFS synchronization is executed for the project and the local workspace
	Then the local worskapce contains a feature file '[id-of-test-case].feature' as
		"""
		@tfs:[tfs-project-url]
		Feature: [id-of-test-case]

		@tc:[id-of-test-case]
		Scenario: Sample scenario
			Given there is something
			When I do something
		"""
	And the feature file is added to the project