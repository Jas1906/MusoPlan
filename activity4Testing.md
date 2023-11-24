# Activity 4 Testing Report

### Function 1 Register a musician

Select option 1 from main menu -> Enter Name -> Enter years playing -> Enter hourly rate -> Enter a instrument -> Loops back into main menu and also display the recently registered Musician.

|Input|Expected Output|Actual Output|
|---|---|---|
|Jason Jason, 5, 55, Guitarist|Name: Jason Jason, Years Playing: 5, Hourly Rate: 55, Interesting Fact: "The more strings you have, the better you are"|Name: Jason Jason, Years Playing: 5, Hourly Rate: 55, Interesting Fact: "The more strings you have, the better you are"|
|Je, 6, 60, Flautist|Invalid musician name. It should be between 3 and 30 characters.Re-enter musician name:|Invalid musician name. It should be between 3 and 30 characters.Re-enter musician name:|
|Jessica, 6, 60, Flautist|Name: Jessica, Years Playing: 6, Hourly Rate: 60, Interesting Fact: "1989 heavy metal instrument of the year"|Name: Jessica, Years Playing: 6, Hourly Rate: 60, Interesting Fact: "1989 heavy metal instrument of the year"|

### Function 2 Register a troupe

Select option 2 from main menu -> enter troupe name -> enter valid genre -> enter minimum duration -> loops back into main menu and display the recently registered musician

|Input|Expected Output|Actual Output|
|---|---|---|
|amazing, jazz, 3|Name: amazing, Genre: jazz, Duration: 3|Name: amazing, Genre: jazz, Duration: 3|
|bangers, rock, 2|Name: bangers, Genre: rock, Duration: 2|Name: bangers, Genre: rock, Duration: 2|
|jammers, pop, 4|re enter Minimum Duration in hours (0.5 - 3):|re enter Minimum Duration in hours (0.5 - 3):|

### Function 3 add a musician to a troupe

Select option 3 from main menu -> Enter the index of the musician to add ->  Enter the index of the troupe to add the musician to -> loops back into main menu and display recently added musician name and troupe name

display below taking into consederation that there is already an existing musician and troupe

|Input|Expected Output|Actual Output|
|---|---|---|
|Jason, Jammers|Musician Name: Jason, Troupe Name: Jammers|Musician Name: Jason, Troupe Name: Jammers|
|Jessica, Jammers|Musician Name: Jessica, Troupe Name: Jammers|Musician Name: Jessica, Troupe Name: Jammers|
|J, B|invalid musician name, invalid troupe name|invalid musician name, invalid troupe name|

### Function 4 Summary Description of a troupe

Select option 4 from main menu -> Enter existing troupe name -> loops back into main menu and display summary description of that troupe

display below taking into consideration that "jammers" and "bangers" troupe exist

|Input|Expected Output|Actual Output|
|---|---|---|
| jammers | Troupe Name: jammers, Guitarists: 0, Bassists: 0, Percussionists: 0, Flautists: 0 |Troupe Name: jammers, Guitarists: 0, Bassists: 0, Percussionists: 0, Flautists: 0  |
|bangers  |Troupe Name: bangers, Guitarists: 0, Bassists: 0, Percussionists: 0, Flautists: 0  | Troupe Name: bangers, Guitarists: 0, Bassists: 0, Percussionists: 0, Flautists: 0 |
| amazing |Troupe not found  |Troupe not found  |

### Function 5 Detailed description of a troupe

Select option 5 from main menu -> Enter existing troupe name -> loops back into main menu and display Detailed description of that troupe

display below taking into consideration that "jammers" and "bangers" troupe exist also "jammers" has 1 musician registered to it

|Input|Expected Output|Actual Output|
|---|---|---|
|jammers  |Troupe Name: jammers, Flautists: Interesting Fact: 1989 heavy metal instrument of the year, Name: Jason, Hourly Rate: 55|Troupe Name: jammers, Flautists: Interesting Fact: 1989 heavy metal instrument of the year, Name: Jason, Hourly Rate: 55|
|bangers|Troupe Name: bangers |Troupe Name: bangers |
|amazing |Troupe not found |Troupe not found|

### Function 6 Calculate the cost of a troupe for a number of hours

Select option 6 -> Enter existing troupe name for deployment -> enter how many hours -> loops back into main menu and display the cost for the troupe deployment

display below taking into consideration that "jammers" troupe exist and have 1 musician registered to it

|Input|Expected Output|Actual Output|
|---|---|---|
| jammers, 5 |Deployment Cost for Troupe jammers for 5 hours: $275.00|Deployment Cost for Troupe jammers for 5 hours: $275.00 
| jammers, 8 |Deployment Cost for Troupe jammers for 8 hours: $440.00  |Deployment Cost for Troupe jammers for 8 hours: $440.00  |
| this | Troupe not found |Troupe not found  |

### Function 7 Read a list of troupe names to be populated from a file

Select option 7 -> enter filename and extension to read from -> loops back into main menu and display the recently registered new troupes from file

display taking into consideration names.txt has troupe "amazing", list.txt has troupe "bangers" , and lemon.txt has troupe "lemon"  details in it

|Input|Expected Output|Actual Output|
|---|---|---|
| names.txt | Troupes created from file: troupe_name:amazing, troupe_genre: jazz, troupe.mduration:3 | Troupes created from file: troupe_name:amazing, troupe_genre: jazz, troupe.mduration:3 |
| list.txt | Troupes created from file: troupe_name:bangers, troupe_genre: rock, troupe.mduration:3 | Troupes created from file: troupe_name:bangers, troupe_genre: rock, troupe.mduration:3 |
|lemon.txt  |Troupes created from file: troupe_name:lemon, troupe_genre: pop, troupe.mduration:3 | Troupes created from file: troupe_name:lemon, troupe_genre: pop, troupe.mduration:3|

### Function 8 Write a list of the detailed descriptions for all troupes to a given filename

Select option 8 -> enter filename and extension -> loops back into main menu and file should be created

|Input|Expected Output|Actual Output|
|---|---|---|
| names.txt | Troupe details have been saved to the file: names.txt | Troupe details have been saved to the file: names.txt |
| list.txt | Troupe details have been saved to the file: list.txt | Troupe details have been saved to the file: list.txt |
|lemon.txt  |Troupe details have been saved to the file: list.txt | Troupe details have been saved to the file: lemon.txt|