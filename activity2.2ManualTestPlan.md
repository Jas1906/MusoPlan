# Test Plan

MusoPlan Software

Prepared by Jason Jason

## Introduction
This Test plan covers 3 different scenarios To test the whole functionality of the software.
Manual testing is use to test these software functions.
this plan will not include automatic testing since it is to test the whole functionality of the software.
We are expecting all functions to work as intended and should be no bugs or problems.

## Scope
Scope of the software testing of this application is defined and confirmed using Base cases and Edge cases. Each case has a scenario of what the user it trying to do and each of them will have an expected output.

### Test 1

Test Case : User Creates 5 Musician and 1 troupe, User adds all 5 Musician into the troupe, User then Prints the Summary description of that Troupe

Input Values:

Create Musician:
Enter Musician Name = "Jason Jason"|"Jessica Jes"|"Neil Patrick"|"Mark Dempsey"|"Joseph Brooking"
Enter Musician Years Playing = 10|5|15|1|20
Enter Musician Hourly Rate =  75|55|65|60|80
Enter Musician Instrument = "Guitarist"|"Guitarist"|"Bassist"|"Percussionist"|"Flautist"

Create Troupe :
Enter Troupe Name = "amazing"
Enter Troupe Genre = "jazz"
Enter Troupe Min Duration = 3

Add Musician to Troupe:
Enter Existing Musician Name = "Jason Jason"|"Jessica Jes"|"Neil Patrick"|"Mark Dempsey"|"Joseph Brooking"
Enter Existing Troupe Name = amazing

Summary Description of a Troupe :
Enter Troupe Existing Troupe Name = "amazing"

Execution Steps:
1. Run the software using Command prompt
2. Select Function 1 to create musician
3. Enter Musician 1 by 1 to create 5 musicians
4. Select Function 2 to create Troupe
5. Enter Troupe details to create 1 troupe
6. Select Function 3 to add musician into troupe
7. Enter existing Musician Name 1 by 1 and then enter existing troupe name
8. Select Function 4 to view summary description of a troupe
9. Enter troupe name
10. Output should be displayed on terminal screen

Output Values:
- Create Musician = Display Musician details on Terminal screen (Success)
- Create Troupe = Display Troupe details on terminal Screen (Success)
- Adding musician to troupe = Displayed the recently added musician detail and troupe the musician added to (Success)
- Summary Description of a Troupe = Display the Troupe details and Each instrument Count (Success)


### Test 2

Test Case : User Create 1 Troupe, User tries to add musician into the troupe, User prints Detailed Description of the troupe, User then print all troupe detail into a text file.

Input Values:

Create Troupe:
Enter Troupe Name = "bangers"
Enter Troupe Genre = "rock"
Enter Troupe Min Duration = 2

Add Musician to Troupe:
Enter Musician Name: "Jamie"
Enter Troupe Name: "bangers"

Detailed Description of a Troupe:
Enter Existing Troupe Name = bangers

Write a list of the detailed descriptions for all troupes to a given filename:
Enter File name (With extensions) = troupe.txt

Execution Steps: 
1. Run the software using command prompt
2. Select Funtion 2 to create troupe
3. enter troupe details to create 1 troupe
4. Select function 3 to add musician to troupe
5. Enter Existing musician name and troupe name
6. Select Function 5 to print detailed description of a troupe
7. enter existing troupe name
8. Select Function 8 to print all troupe details into a file
9. enter file name with extensions

Output Values: 
- Create Troupe = Display Troupe Details on terminal screen (Success)
- Add Musician to Troupe = Musician Not found please enter existing musician name (Failed)
- Detailed Description of a Troupe: Display the troupe details on terminal screen without musicians since no musicians was added (Success)
- Write a list of the detailed descriptions for all troupes to a given filename = Display all troupe details on the text file (Success)

### Test 3

Test Case : User creates 2 Musician, User creates 2 troupe,User adds 2 musician into 1 troupe, User Calculate the cost of deploying chosen troupe for a number of hours

Input Values: 

Create Musicians:
Enter Musician Name = "Floor Jansen"|"Herman Li"
Enter Musician Years Playing = 10|5
Enter Musician Hourly Rate =  55|65
Enter Musician Instrument = "Guitarist"|"Percussionist"

Create Troupe:
Enter Troupe Name = "LoFi"|"chill"
Enter Troupe Genre = "jazz"|"pop"
Enter Troupe Min Duration = 2|3

Add musician into Troupe:
Enter Musician name = "Floor Jansen"|"Herman Li"
Enter Troupe Name = "LoFi"|"LoFi"

Calculate the cost of deploying the troupe for a number of hours:
Enter Existing Troupe Name = "LoFi"|"Chill"
Enter Hours = 3|3

Execution Steps:
1. Run the software using Command prompt
2. Select Function 1 to create musician
3. Enter Musician 1 by 1 to create 2 musicians
4. Select Function 2 to create Troupe
5. Enter Troupe details 1 by 1 to create 2 troupes
6. Select Function 3 to add musician into 1 troupe
7. Enter existing Musician Name 1 by 1 and then enter existing troupe name
8. Select Function 6 to Calculate the cost of deploying the troupe for a number of hours
9. Enter troupe name and hours

Output Values:
- Create Musician = Display Musician details on Terminal screen (Success)
- Create Troupe = Display Troupe details on terminal Screen (Success)
- Adding musician to troupe = Displayed the recently added musician detail and troupe the musician added to (Success)
- Calculate the cost of deploying the troupe for a number of hours = Display troupe cost LoFi troupe should show $360 and chill troupe should show $0 since it has no musician in it (Success)

