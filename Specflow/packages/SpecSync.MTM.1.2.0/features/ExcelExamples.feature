@excelExamples
Feature: SpecFlow+ Excel Examples Support

@done @automated
Scenario: Link new scenario outline with Excel Examples
	Given there is a VSTS project
	And the project is configured to use SpecFlow+ Excel
	And there is a feature file in the local workspace that was not synchronized yet
		"""
		Feature: Sample feature

		Scenario Outline: Sample scenario outline
			When <something> happens with <someone>

		@source:SampleFeatureExamples.xlsx
		Examples:
			| something | someone |
		"""
	And there is an Excel file 'SampleFeatureExamples.xlsx' with a sheet 'Sample scenario outline'
			| something | someone |
			| foo       | Joe     |
			| bar       | Jill    |
			| boz       | Jack    | 
	When the SpecFlow2TFS synchronization is executed for the project and the local workspace
	Then a new test case work item "Scenario Outline: Sample scenario outline" is created in the project
	And the test case contains the following parameter data 
		| something | someone |
		| foo       | Joe     |
		| bar       | Jill    |
		| boz       | Jack    | 

@done @automated @backSync
Scenario: Parameter values are synchronized back to Excel
	Given there is a VSTS project
	And the project is configured to use SpecFlow+ Excel
	And the synchronizer is configured to enable back syncing
	And there is an Excel file 'SampleFeatureExamples.xlsx' with a sheet 'Sample scenario outline'
			| something | someone |
			| foo       | Joe     |
			| bar       | Jill    |
			| boz       | Jack    | 
	And there is a feature file in the local workspace that was not synchronized yet
		"""
		Feature: Sample feature

		Scenario Outline: Sample scenario outline
			When <something> happens with <someone>

		@source:SampleFeatureExamples.xlsx
		Examples:
			| something | someone |
		"""
	And the feature file has been synchronized already
	When the test case parameter data is updated to
		| something | someone |
		| one       | Tarzan  |
		| two       | Thomas  |
	And the SpecFlow2TFS synchronization is executed for the project and the local workspace
	Then the Excel worksheet should contain
		| something | someone |
		| one       | Tarzan  |
		| two       | Thomas  |
	And the feature file in the local workspace is not changed