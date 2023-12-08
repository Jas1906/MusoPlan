
# Test Plan

MusoPlan Software
Prepared By: Jason Jason

Following test is automated test to validates the function listed on the test.

Only needed to test the following function for the project scope to be a success.

## Test Case 1: Validate registerMusician Function

### Test 1.1: Input is valid and should register musician

Register Musician Data. User must be able to enter data

Input:
Musician Name: "Jason"
Years Playing: 5
Hourly Rate: 55
Instrument: "Guitarist"

Execution Steps:
On the main menu select input 1 > Input the values.

Expected Output:
Display the following message on Terminal screen:
Success: "Musician registered successfully! Name: Jason, Years Playing: 5, Hourly Rate: 55, Interesting Fact: The more strings you have, the better you are."

Actual Output:
Display the following message on Terminal screen:
Success: "Musician registered successfully! Name: Jason, Years Playing: 5, Hourly Rate: 55, Interesting Fact: The more strings you have, the better you are."


### Test 1.2: Throws an error when musician name is less than 3 characters

Register Musician Data. User must be able to enter data, User input invalid name data .

Input:
Musician Name: "Jo"
Years Playing: 5
Hourly Rate: 55
Instrument: "Guitarist"

Execution Steps:
On the main menu select input 1 > Input the values.

Expected Output:
Display the following message on Terminal screen:
Error "Invalid musician name. It should be between 3 and 30 characters."

Actual Output:
Display the following message on Terminal screen:
Error "Invalid musician name. It should be between 3 and 30 characters."

### Test 1.3: Throws an error because the user does not input the instrument type

Register Musician Data. User must be able to enter data, User did not input instrument data.

Input:
Musician Name: "Jessica Jes"
Years Playing: 10
Hourly Rate: 100
Instrument: ""

Execution Steps:
On the main menu select input 1 > Input the values.

Expected Output:
Display the following message on Terminal screen:
Error: "Invalid instrument choice. Choose from Guitarist, Bassist, Percussionist, Flautist."

Actual Output:
Display the following message on Terminal screen:
Error: "Invalid instrument choice. Choose from Guitarist, Bassist, Percussionist, Flautist."

### Test 1.4: Throws an error because the user input negative years playing

Register Musician Data. User must be able to enter data, User enters invalid years playing.

Input:
Musician Name: "Jamie Jason"
Years Playing: -5
Hourly Rate: 100
Instrument: "Percussionist"

Execution Steps:
On the main menu select input 1 > Input the values.

Expected Output:
Display the following message on Terminal screen:
Error: "Invalid value for years playing. It should be non-negative."

Actual Output:
Display the following message on Terminal screen:
Error: "Invalid value for years playing. It should be non-negative."

### Test 1.5: Throws an error because the user input less than 50 hourly rate

Register Musician Data. User must be able to enter data, User enters invalid hourly rate.

Input:
Musician Name: "Jordan Peele"
Years Playing: 20
Hourly Rate: 45
Instrument: "Bassist"

Execution Steps:
On the main menu select input 1 > Input the values.

Expected Output:
Display the following message on Terminal screen:
Error: "Invalid hourly rate. It should be over 50."

Actual Output:
Display the following message on Terminal screen:
Error: "Invalid hourly rate. It should be over 50."


## Test Case 2: Validate musicianRegistration Function

### Test 2.1: Checking musicianRegistration function and should be valid

User must be able to enter data, Users enters valid data.

Input:
Musician Object:
Name: "Jessica"
Years Playing: 12
Hourly Rate: 56
Interesting Fact: "The more strings you have, the better you are"

Execution Steps:
After user select function 1 on the menu and enters the data it will store the data into musicianDetails Array.

Expected Output:
Display the following message on Terminal screen:
Success: [{"hourly_rate": 56, "interesting_fact": "The more strings you have, the better you are", "musician_name": "Jessica", "years_playing": 12}]

Actual Output:
Display the following message on Terminal screen:
Success: [{"hourly_rate": 56, "interesting_fact": "The more strings you have, the better you are", "musician_name": "Jessica", "years_playing": 12}]

### Test 2.2: Checking musicianRegistration function and name should be empty since it does not meet the requirement length

User must be able to enter data, Users enters invalid name data.

Input:
Musician Object:
Name: "Je"
Years Playing: 5
Hourly Rate: 66
Interesting Fact: "Me drum"

Execution Steps:
After user select function 1 on the menu and enters the data it will store the data into musicianDetails Array.

Expected Output:
Display the following message on Terminal screen:
[{"hourly_rate": 66, "interesting_fact": "Me drum", "musician_name": "", "years_playing": 5}]

Actual Output:
Display the following message on Terminal screen:
[{"hourly_rate": 66, "interesting_fact": "Me drum", "musician_name": "", "years_playing": 5}]

### Test 2.3: Checking musicianRegistration function and hourly_rate should be empty since it's not over 50

User must be able to enter data, Users enters invalid hourly rate.

Input:
Musician Object:
Name: "James Jason"
Years Playing: 7
Hourly Rate: 45
Interesting Fact: "1989 heavy metal instrument of the year"

Execution Steps:
After user select function 1 on the menu and enters the data it will store the data into musicianDetails Array.

Expected Output:
Display the following message on Terminal screen:
[{"hourly_rate": "", "interesting_fact": "1989 heavy metal instrument of the year", "musician_name": "James Jason", "years_playing": 7}]

Actual Output:
Display the following message on Terminal screen:
[{"hourly_rate": "", "interesting_fact": "1989 heavy metal instrument of the year", "musician_name": "James Jason", "years_playing": 7}]

### Test 2.4: Checking musicianRegistration function and years playing should be empty since it's negative

User must be able to enter data, Users enters invalid years playing.

Input:
Musician Object:
Name: "David Brent"
Years Playing: -5
Hourly Rate: 96
Interesting Fact: "Everyone loves a bassist"

Execution Steps:
After user select function 1 on the menu and enters the data it will store the data into musicianDetails Array.

Expected Output:
Display the following message on Terminal screen:
[{"hourly_rate": 96, "interesting_fact": "Everyone loves a bassist", "musician_name": "David Brent", "years_playing": ""}]

Actual Output:
Display the following message on Terminal screen:
[{"hourly_rate": 96, "interesting_fact": "Everyone loves a bassist", "musician_name": "David Brent", "years_playing": ""}]

## Test Case 3: Validate registerTroupe Function

### Test 3.1: Input is valid and should register troupe

User must be able to enter data, User enters valid data.

Input:
Troupe Name: "amazing troupe"
Genre: "jazz"
Duration: 2

Execution Steps:
From main menu select function 2 > Input the values

Expected Output:
Display from terminal screen:
Success: "Troupe registered successfully! Name: amazing troupe, Genre: jazz, Duration: 2"

Actual Output:
Display from terminal screen:
Success: "Troupe registered successfully! Name: amazing troupe, Genre: jazz, Duration: 2"

### Test 3.2: Throws an error when troupe name is less than 3 characters

User must be able to enter data, User enters invalid name data.

Input:
Troupe Name: "se"
Genre: "pop"
Duration: 2.5

Execution Steps:
From main menu select function 2 > Input the values

Expected Output:
Display from terminal screen:
Error: "Enter troupe name (3-30 characters)."

Actual Output:
Display from terminal screen:
Error: "Enter troupe name (3-30 characters)."

### Test 3.3: Throws an error when genre is not a valid name

User must be able to enter data, User enters invalid genre data.

Input:
Troupe Name: "rock and roll"
Genre: "country"
Duration: 3

Execution Steps:
From main menu select function 2 > Input the values

Expected Output:
Display from terminal screen:
Error: "Enter valid genre (rock, pop, or jazz)."

Actual Output:
Display from terminal screen:
Error: "Enter valid genre (rock, pop, or jazz)."

### Test 3.4: Throws an error when duration is over 3

User must be able to enter data, User enters invalid duration data.

Input:
Troupe Name: "bangers"
Genre: "jazz"
Duration: 6

Execution Steps:
From main menu select function 2 > Input the values

Expected Output:
Display from terminal screen:
Error: "Minimum Duration in hours (0.5 - 3)."

Actual Output:
Display from terminal screen:
Error: "Minimum Duration in hours (0.5 - 3)."

## Test Case 4: Validate troupeRegistration Function

### Test 4.1: Checking troupeRegistration function and should be valid, members should be empty since it's for another function

User must be able to enter data, User enters valid data

Input:
Troupe Object:
Name: "jammers"
Genre: "rock"
Duration: 2.5

Execution Steps:
After user select function 2 on the menu and enters the data it will store the data into troupeDetails Array.

Expected Output:
Display from terminal Screen:
Success: [{"member": [], "troupe_genre": "rock", "troupe_mduration": 2.5, "troupe_name": "jammers"}]

Actual Output:
Display from terminal Screen:
Success: [{"member": [], "troupe_genre": "rock", "troupe_mduration": 2.5, "troupe_name": "jammers"}]

### Test 4.2: Checking troupeRegistration function and name should be empty since it does not meet the length requirement, members should be empty since it's for another function

User must be able to enter data, User enters invalid name data

Input:
Troupe Object:
Name: "ja"
Genre: "pop"
Duration: 3

Execution Steps:
After user select function 2 on the menu and enters the data it will store the data into troupeDetails Array.

Expected Output:
Display from terminal Screen:
[{"member": [], "troupe_genre": "pop", "troupe_mduration": 3, "troupe_name": ""}]

Actual Output:
Display from terminal Screen:
[{"member": [], "troupe_genre": "pop", "troupe_mduration": 3, "troupe_name": ""}]

### Test 4.3: Checking troupeRegistration function and duration should be empty since it's more than 3 hours, members should be empty since it's for another function

User must be able to enter data, User enters invalid duration data

Input:
Troupe Object:
Name: "bangers"
Genre: "jazz"
Duration: 6

Execution Steps:
After user select function 2 on the menu and enters the data it will store the data into troupeDetails Array.

Expected Output:
Display from terminal Screen:
[{"member": [], "troupe_genre": "jazz", "troupe_mduration": "", "troupe_name": "bangers"}]

Actual Output:
Display from terminal Screen:
[{"member": [], "troupe_genre": "jazz", "troupe_mduration": "", "troupe_name": "bangers"}]

### Test 4.4: Checking troupeRegistration function and genre should be empty since it's not a valid input, members should be empty since it's for another function

User must be able to enter data, User enters invalid genre data

Input:
Troupe Object:
Name: "rammers"
Genre: "country"
Duration: 1

Execution Steps:
After user select function 2 on the menu and enters the data it will store the data into troupeDetails Array.

Expected Output:
Display from terminal Screen:
[{"member": [], "troupe_genre": "", "troupe_mduration": 1, "troupe_name": "rammers"}]

Actual Output:
Display from terminal Screen:
[{"member": [], "troupe_genre": "", "troupe_mduration": 1, "troupe_name": "rammers"}]




