# Test Requirement Document

Prepared By : Jason Jason

## Introduction
This testing reuirement is designed to ensure the quality, functionality, and compliance of the MusoPlan software developed for Globex Corporation. The software is intended to automate the management of musicians and troupes for entertainment purposes. The testing process will cover both manual and automated methods to verify the correct operation of the software.

## Test Requirements

This document outlines the test scenarios and requirements to be tested thoroughly for quality assurance purposes. The testing will encompass various aspects of MusoPlan, including creating musicians, managing troupes, and adhering to organizational guidelines.

### Manual Testing
The manual testing process will involve validating the functionality of MusoPlan based on the specified requirements. This includes interacting with the command-line interface and ensuring that each feature operates as intended.
We will use manual testing to test the whole software interaction.
The process will be accessing the software from the main menu and go through all the function as if a normal user would use it.
Testing will be 3 different scenarios all 3 scenarios will have very different inputs.

### Automatic Testing
Automation testing will be performed using the Jest framework to create automated test cases for critical functionalities. This approach aims to maintain code integrity and identify potential issues early in the development process.
We will use automatic testing to test all the classes and selected function data validation.
The process will be creating 2 different testing js files one to test all the classes and one to test selected function.

## Scenarios

1. Create a Musician
 - Musician Data Requirements
Verify that the musician's name is between 3 and 30 characters.
Ensure that the years of playing are non-negative.
Confirm that the hourly rate is over 50.
Validate that the musician plays one of the four specified instruments (guitarist, bassist, percussionist, flautist).
 - Instrumentalists
Verify that each instrumentalist provides an interesting fact related to their instrument.

2. Create a Troupe
 - Troupe Data Requirements
Ensure the troupe's name is between 3 and 30 characters.
Confirm that the troupe contains no more than 5 musicians.
Validate that the genre is one of the valid options (rock, jazz, pop).
Verify that the minimum duration is between 0.5 and 3 hours.
 - Troupe Information
Check that the troupe summary correctly displays the name, instruments, genre, minimum duration, and hourly rate.
Validate that the detailed troupe description includes the summary and introductions from each musician.

3. Calculate Troupe Cost
Verify that the cost of deploying a troupe for a specified number of hours is calculated correctly.

4. File Operations
 - Read Troupe Names from a File
Ensure that the software can read a list of troupe names from a file.
 - Write Troupe Descriptions to a File
Verify that the software can write detailed descriptions for all troupes to a specified filename.

### Organizational Requirements
- All development will be done using a distributed version control system following organizational guidelines.
- Code will adhere to MDN's General JavaScript guidelines.
- A README.md file will be included with setup, operating, and testing instructions.
- Unit tests will cover major functionalities, providing over 75% coverage.
- JavaScript functions will include comments describing behavior and accepted parameter types.
- Code will be appropriately commented with problem-solving strategies.
- Automated testing results will be provided in JUnit XML format in the test progress report.

### Testing Progress Reports
- Each testing progress report will include a discussion of how testing fits into the software development life cycle (SDLC) of the MusoPlan project. An appendix with a JUnit XML document of the automated testing results will be attached to each report.