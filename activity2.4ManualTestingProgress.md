# Testing Progress

Prepared By Jason Jason

MusoPlan Software

## Test 1 User Creates 5 Musician and 1 troupe, User adds all 5 Musician into the troupe, User then Prints the Summary description of that Troupe

Date of execution : 08/12/2023

Create a musician = Select Function 1 > Enter Musician Name > Enter Musician Years Playing > Enter Hourly Rate > Enter Musician Instrument > Display Result

| Input | Expected Output | Actual Output |
|---|---|---|
|Jason Jason,10,75,Guitarist|Name: Jason Jason, Years Playing: 10, Hourly Rate: 75, Interesting Fact: "The more strings you have, the better you are"  |Name: Jason Jason, Years Playing: 10, Hourly Rate: 75, Interesting Fact: "The more strings you have, the better you are"  |
|Jessica Jes,5,55,Guitarist  |Name: Jessica Jes, Years Playing: 5, Hourly Rate: 55, Interesting Fact: "The more strings you have, the better you are"  |Name: Jessica Jes, Years Playing: 5, Hourly Rate: 55, Interesting Fact: "The more strings you have, the better you are"  |
| Neil Patrick,15,65,Bassist |Name: Neil Patrick, Years Playing: 15, Hourly Rate: 65, Interesting Fact: "Everyone loves a bassist"  |Name: Neil Patrick, Years Playing: 15, Hourly Rate: 65, Interesting Fact: "Everyone loves a bassist"  |
|Mark Dempsey,1,60,Percussionist  |Name: Mark Dempsey, Years Playing: 1, Hourly Rate: 60, Interesting Fact: "Me drum"  |Name: Mark Dempsey, Years Playing: 1, Hourly Rate: 60, Interesting Fact: "Me drum"  |
|Joseph Brooking,20,80,Flautist  |Name: Joseph Brooking, Years Playing: 20, Hourly Rate: 80, Interesting Fact: "1989 heavy metal instrument of the year"  |Name: Joseph Brooking, Years Playing: 20, Hourly Rate: 80, Interesting Fact: "1989 heavy metal instrument of the year"  |

Create a Troupe = Select Function 2 > Enter Troupe Name > Enter troupe Genre > Enter troupe min duration > Display Result

| Input | Expected Output | Actual Output |
|---|---|---|
|amazing,jazz,3  |Name: amazing, Genre: jazz, Duration: 3  | Name: amazing, Genre: jazz, Duration: 3 |

Add Musician to Troupe = Select Function 3 > Enter existing Musician Name > Enter Existing Troupe name > Display Result

|Input  | Expected Output | Actual Output |
|---|---|---|
|Jason Jason,amazing|Musician added to troupe successfully!   |Musician added to troupe successfully!  |
|Jessica Jes,amazing  |Musician added to troupe successfully!  |Musician added to troupe successfully!  |
|Neil Patrick,amazing  |Musician added to troupe successfully!  |Musician added to troupe successfully!  |
|Mark Dempsey,amazing  |Musician added to troupe successfully!  |Musician added to troupe successfully! |
|Joseph Brooking,amazing|Musician added to troupe successfully!  |Musician added to troupe successfully!  |

Summary Description of a Troupe = Select Function 4 > Enter Existing Troupe Name > Display Result

|Input  |Expected Output  |Actual Output  |
|---|---|---|
|amazing  |Troupe Name: Amazing , Troupe Genre: jazz , Duration: 3 , Guitarist: 2 , Bassist: 1 , Percussionist: 1 , Flautist: 1  |Troupe Name: Amazing , Troupe Genre: jazz , Duration: 3 , Guitarist: 2 , Bassist: 1 , Percussionist: 1 , Flautist: 1  |


## Test 2 User Create 1 Troupe, User tries to add musician into the troupe, User prints Detailed Description of the troupe, User then print all troupe detail into a text file.

Date of execution : 08/12/2023

Create a Troupe = Select Function 2 > Enter Troupe Name > Enter troupe Genre > Enter troupe min duration > Display Result

| Input | Expected Output | Actual Output |
|---|---|---|
|bangers,rock,2  |Name: bangers, Genre: rock, Duration: 2  | Name: bangers, Genre: rock, Duration: 2 |

Add Musician to Troupe = Select Function 3 > Enter existing Musician Name > Enter Existing Troupe name > Display Result

|Input  | Expected Output | Actual Output |
|---|---|---|
|Jamie,bangers|Invalid Musician Name! Musician does not exist!   |Invalid Musician Name! Musician does not exist!  |

Detailed Description of a Troupe = Select Function 5 > Enter Existing Troupe Name > Display Result

|Input  | Expected Output | Actual Output |
|---|---|---|
| bangers |Troupe Name: bangers, Troupe Genre: Rock, Troupe min Duration: 2, Musician : "" |Troupe Name: bangers, Troupe Genre: Rock, Troupe min Duration: 2, Musician : ""  |

Write a list of the detailed descriptions for all troupes to a given filename = Select Function 8 > Enter File name with extensions > Display Result

|Input  | Expected Output | Actual Output |
|---|---|---|
| troupe.txt | Troupe details have been saved to the file: troupe.txt | Troupe details have been saved to the file: troupe.txt |

## Test 3 User creates 2 Musician, User creates 2 troupe,User adds 2 musician into 1 troupe, User Calculate the cost of deploying chosen troupe for a number of hours

Date of execution : 08/12/2023

Create a musician = Select Function 1 > Enter Musician Name > Enter Musician Years Playing > Enter Hourly Rate > Enter Musician Instrument > Display Result

| Input | Expected Output | Actual Output |
|---|---|---|
|Floor Jansen,10,55,Guitarist|Name: Floor Jansen, Years Playing: 10, Hourly Rate: 55, Interesting Fact: "The more strings you have, the better you are"  |Name: Floor Jansen, Years Playing: 10, Hourly Rate: 55, Interesting Fact: "The more strings you have, the better you are"  |
|Herman Li,5,65,Percussionist  |Name: Herman Li, Years Playing: 5, Hourly Rate: 65, Interesting Fact: "Me Drum"  |Name: Herman Li, Years Playing: 5, Hourly Rate: 65, Interesting Fact: "Me Drum"|

Create a Troupe = Select Function 2 > Enter Troupe Name > Enter troupe Genre > Enter troupe min duration > Display Result

| Input | Expected Output | Actual Output |
|---|---|---|
|LoFi,jazz,2  |Name: LoFi, Genre: jazz, Duration: 2 | Name: LoFi, Genre: jazz, Duration: 2 |
| chill,pop,3 |Name: chill, Genre: pop, Duration: 3  |Name: chill, Genre: pop, Duration: 3  |

Add Musician to Troupe = Select Function 3 > Enter existing Musician Name > Enter Existing Troupe name > Display Result

|Input  | Expected Output | Actual Output |
|---|---|---|
|Floor Jansen,LoFi|Musician added to troupe successfully!   |Musician added to troupe successfully!  |
|Herman Li,LoFi|Musician added to troupe successfully!   |Musician added to troupe successfully!  |

Calculate the cost of deploying the troupe for a number of hours = Select Function 6 > Enter Troupe Name > Enter Duration > Display Result

| Input | Expected Output | Actual Output |
|---|---|---|
| Lofi,2 |Deployment Cost for Troupe for 2 Hours is $360  |Deployment Cost for Troupe for 2 Hours is $360  |
| Chill,3 |Deployment Cost for Troupe for 3 Hours is $0  |Deployment Cost for Troupe for 3 Hours is $0  |







