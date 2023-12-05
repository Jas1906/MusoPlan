# Report

### Summary details about the proposed software.

MusoPlan is a command-line tool developed for the music management team at Globex Corporation. The software facilitates the modeling and prediction of the success of elite musicians deployed as troupes. The system allows the creation, registration, and management of musicians and troupes, along with the calculation of deployment costs. Additionally, MusoPlan supports reading troupe details from files and writing troupe details to files.

The command-line interface provides a menu-driven approach for users to perform various tasks related to musicians and troupes.

### Program Execution Flow:

- User Interface:
    - The program starts with a user-friendly menu displaying nine options.
    - Users can choose from creating a musician, creating a troupe, adding a musician to a troupe, and various troupe-related operations.

- User Input:
    - The user is prompted to enter a numeric choice based on the menu options.
    - Input is validated to ensure it falls within the acceptable range of 1 to 9.

- Function Execution:
    - Based on the user's choice, the corresponding function from the Functions module is executed.
    - Functions include registering musicians, troupes, adding musicians to troupes, displaying troupe information, calculating deployment costs, and file operations.

- Program Flow:
    - The program utilizes a while loop to continuously present the menu until the user chooses to exit (option 9).
    - If the user enters an invalid choice, an appropriate message is displayed, and the user is prompted again.

- Function Details:
    - registerMusician(): Prompts the user for musician details, creates a musician based on the chosen instrument, and registers the musician
    - registerTroupe(): Prompts the user for troupe details, creates a troupe, and registers the troupe.
    - addMusicianToTroupe(): Enables the user to add an existing musician to an existing troupe.
    - displayTroupeInformation(): Displays summarized information about a specific troupe, including the count of each type of musician.
    - displayTroupeDetails(): Displays detailed information about each musician in a specific troupe.
    - calculateDeploymentCost(): Calculates the deployment cost for a specific troupe and duration, considering each musician's hourly rate.
    - readTroupeDetailsFromFile(): Reads troupe details from a specified file and creates troupe objects.
    - printAllTroupesToFile(): Writes detailed descriptions for all troupes to a specified file.

- Loop Control:
    - The program returns to the menu after executing a user's choice, maintaining a continuous loop until the user chooses to exit.

- Exit:
    - Upon choosing option 9, the loop breaks, and the program terminates.

### Classes 

- Musician Class:
    Data:
    - Musician Name (string, 3-30 characters)
    - Years Playing (non-negative integer)
    - Hourly Rate (float, must be over 50)
    - Interesting Fact (string)

    Behaviors:
    - Setters and getters for each data attribute

    Inheritance:
    - None

    Aggregation Relationship: 
    - Musicians are aggregated into troupes, forming a part-whole relationship.

-  Troupe Class:
    Data:
    - Troupe Name (string, 3-30 characters)
    - Troupe Genre (string, valid values: rock, jazz, pop)
    - Troupe Minimum Duration (float, between 0.5 and 3)
    - Members (list of Musician instances)

    Behaviors:
    - Setters and getters for each data attribute

    Inheritance:
    - None

    Aggregation Relationship: 
    - Troupes aggregate musicians, forming a composition relationship.

- Guitarist Class:
    Data:
    - Inherits data attributes from Musician Class

    Behaviors:
    - Constructor sets the interesting fact for a guitarist

    Inheritance:
    - Musician Class

- Bassist Class:
    Data:
    - Inherits data attributes from Musician Class

    Behaviors:
    - Constructor sets the interesting fact for a bassist
    
    Inheritance:
    - Musician Class

- Percussionist Class:
    Data:
    - Inherits data attributes from Musician Class
    Behaviors:
    - Constructor sets the interesting fact for a percussionist
    Inheritance:
    - Musician Class

- Flautist Class:
    Data:
    - Inherits data attributes from Musician Class

    Behaviors:
    - Constructor sets the interesting fact for a flautist

    Inheritance:
    - Musician Class

### Class Relationships

- Troupe Class contains instances of Musician, Guitarist, Bassist, Percussionist, and Flautist Classes.

- Inheritance: Guitarist, Bassist, Percussionist, and Flautist classes inherit from the Musician class.

### Functions Techniques

1. registerMusician Function:
    - User Input Handling: Utilizes prompts and input validation loops to ensure valid user input for musician details.
    - Inheritance and Polymorphism: Creates instances of instrument-specific musician classes (Guitarist, Bassist, etc.) based on user input, showcasing inheritance and polymorphism.
    - Error Handling: Provides error messages for invalid inputs, ensuring a robust user experience.
2. musicianRegistration Function:
    - Array Manipulation: Adds the created musician to the musicianDetails array, demonstrating array manipulation for storage.
    - Function Modularity: Separates the musician registration process into a distinct function for modularity and reusability.
3. registerTroupe Function:
    - User Input Handling: Gathers and validates user input for troupe details, ensuring correctness.
    - Array Manipulation: Adds the created troupe to the troupeDetails array, showcasing array manipulation for storage.
    - Looping: Utilizes a while loop to prompt the user until valid input is received.
4. troupeRegistration Function:
    - Array Manipulation: Adds the created troupe to the troupeDetails array, demonstrating array manipulation for storage.
    - Function Modularity: Separates the troupe registration process into a distinct function for modularity and reusability.
5. addMusicianToTroupe Function:
    - Array Manipulation: Adds a selected musician to the member array of a troupe, demonstrating array manipulation.
    - Conditional Statements: Checks for existing musicians and troupe availability before adding a musician, ensuring logical execution.
6. displayTroupeInformation Function:
    - Array Iteration: Iterates over the troupeDetails array to find and display information about a specific troupe.
    - Conditional Statements: Checks if the troupe exists before displaying information.
    - Object Composition: Counts and displays the number of each type of musician in the troupe.
7. displayTroupeDetails Function:
    - Array Iteration: Iterates over the troupeDetails array to find and display detailed information about a specific troupe.
    - Conditional Statements: Checks if the troupe exists before displaying information.
8. calculateDeploymentCost Function:
    - Array Iteration: Iterates over the musicians in a troupe to calculate the deployment cost.
    - User Input Handling: Gathers and validates user input for the number of hours.
    - Conditional Statements: Checks for troupe existence and valid hours input.
9. readTroupeDetailsFromFile Function:
    - File Input: Reads troupe details from a file using the fs module.
    - Error Handling: Catches and displays errors if file reading fails.
10. printAllTroupesToFile Function:
    - File Output: Writes troupe details to a file using the fs module.
    - String Concatenation: Builds a formatted string containing troupe details for writing to the file.
    - Error Handling: Catches and displays errors if file writing fails.

### Function Conditions:

1. registerMusician Function:
    - Ensures the length of the musician's name is between 3 and 30 characters.
    - Validates that the years playing is non-negative.
    - Verifies that the hourly rate is greater than 50.
    - Validates the instrument choice and creates an instance based on the choice.
    Conditions Using:
        - while loops for input validation.
        - switch statement for choosing the instrument type.
2. musicianRegistration Function:
    - None
3. registerTroupe Function:
    - Ensures the length of the troupe's name is between 3 and 30 characters.
    - Validates the genre, allowing only "rock," "pop," or "jazz."
    - Checks if the minimum duration is between 0.5 and 3 hours.
    Conditions Using:
        - while loop for validating the name, genre, and minimum duration.
4. troupeRegistration Function:
    - None
5. addMusicianToTroupe Function:
    - Checks if the musician and troupe exist before attempting to add the musician.
    - Ensures the troupe has not reached the maximum allowed musicians (5).
    Conditions Using:
        - if statements for checking if the musician and troupe exist.
        - if statement for checking if the troupe has reached the maximum allowed musicians.
6. displayTroupeInformation Function:
    - Checks if the specified troupe exists before displaying information.
    Conditions Using:
        - if statement for checking if the specified troupe exists.
7. displayTroupeDetails Function:
    - Checks if the specified troupe exists before displaying detailed information.
    Conditions Using:
        - if statement for checking if the specified troupe exists.
8. calculateDeploymentCost Function:
    - Checks if the specified troupe exists before calculating deployment cost.
    - Validates that the input for the number of hours is a positive number.
    Conditions Using:
        - if statement for checking if the specified troupe exists.
        - while loop for validating the input for the number of hours.
9. readTroupeDetailsFromFile Function:
    - Attempts to read troupe details from a file using the fs module.
    - Catches and displays errors if file reading fails.
    Conditions Using:
        - try, catch blocks for handling file reading and potential errors.
10. printAllTroupesToFile Function:
    - Prompts the user for the file name to save troupe details.
    - Attempts to write troupe details to a file using the fs module.
    - Catches and displays errors if file writing fails.
    Conditions Using:
        - try, catch blocks for handling file writing and potential errors.

### Program Logic and Techniques

- Conditions: Input validation for data attributes (e.g., length checks, value ranges), checking troupe and musician existence, and validating deployment hours
- Loops: Iterating through lists (e.g., adding musicians to a troupe).
- Collections: Lists to store musicians within a troupe.
- File Handling: Reading troupe details from a file and writing troupe details to a file.
- Menu-Driven Approach: The program uses a menu-driven approach, allowing users to select actions based on their preferences.
- While Loop: A while loop controls the execution flow, ensuring continuous interaction with the user until an exit choice is made.

### Program Inputs and Outputs

- Program Inputs:
    - User inputs data through the command line, providing details about musicians and troupes.
    - Troupe names can be populated from a file by reading a list of names.
    - User specifies input for functions like adding a musician to a troupe, displaying troupe information, calculating deployment costs, reading troupe details from a file, and writing troupe details to a file.

- Program Outputs:
    - Displayed information includes musician and troupe details, calculated deployment costs, and feedback on successful registrations.
    - Lists of detailed descriptions for all troupes can be written to a specified filename.
    - Troupe details are read from a specified filename and displayed.

### Organisational requirement
- Version Control System (VCS): Adherence to VCS standards to ensure version control, traceability, and collaborative development.
- Software Development Life Cycle (SDLC): Compliance with SDLC phases, including requirements analysis, design, implementation, testing, deployment, and maintenance.

This design promotes a modular and extensible MusoPlan software system, incorporating user input validation, file handling, and adherence to organizational requirements. The system supports efficient management and analysis of musician and troupe data for the music management team at Globex Corporation.

The MusoPlan software also demonstrates an effective implementation of features crucial for the music management team. The user-friendly interface and modular design contribute to an organized and maintainable codebase, meeting the organizational requirements and ensuring a smooth development life cycle.