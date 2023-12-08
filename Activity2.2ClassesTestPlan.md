# Test Plan

MusoPlan Software
Prepared By: Jason Jason

Following test is automated test to validates all the Classes used on the software.

## Test Case 1 Musician Class

### Test 1.1 Validate Musician Name

User create musician name.

Input Values:
Enter musician name="John Doe"|"Jo"|"LoremIpsumDolorSitAmetConsectetur"

Execution Steps:
Create Musician Name Object

Output Values:
John Doe = Success
Jo = Failed
LoremIpsumDolorSitAmetConsectetur = Failed

### Test 1.2 Validate Years Playing

User create musician years playing.

Input Values:
Enter Years Playing = 5|10|-2

Execution Steps: 
Create Musician Years Playing Object

Output Values:
5 = Success
10 = Success
-2 = Failed

### Test 1.3  Validate Hourly Rate

User create musician Hourly Rate

Input Values:
Enter Hourly Rate = 60|120|45

Execution Steps: 
Create Musician Hourly Rate Object

Output Values:
60 = Success
120 = Success
45 = Failed

### Test 1.4 Validate Interesting Fact

User create musician interesting fact

Input Values:
Enter Hourly Rate = 'Some interesting fact'|'Any interesting fact'|'Cool interesting fact'

Execution Steps: 
Create Musician interesting fact Object

Output Values:
'Some interesting fact' = Success
'Any interesting fact' = Success
'Cool interesting fact' = Success


## Test Case 2 Troupe Class

### Test 2.1 Validate Troupe Name

User create Troupe name

Input Values:
Enter Troupe Name = 'Rock Band'|'RB'|'LoremIpsumDolorSitAmetConsectetur'

Execution Steps: 
Create Troupe name Object

Output Values:
'Rock Band' = Sucess
'RB' = Failed
'LoremIpsumDolorSitAmetConsectetur' = Failed

### Test 2.2 Validate Troupe Genre

User create Troupe Genre

Input Values:
Enter Troupe Genre = 'rock'|'jazz'|'pop'|'country'

Execution Steps: 
Create Troupe genre Object

Output Values:
'rock' = Success
'jazz' = Success
'pop' = Success
'country' = Failed

### Test 2.3 Validate Troupe Min Duration

User create Troupe Min Duration

Input Values:
Enter Troupe Min Duration = 2|0.3|3.5

Execution Steps: 
Create Troupe Min Duration Object

Output Values:
2 = Success
0.3 = Failed
3.5 = Failed

## Test Case 3 Guitarist, Bassist, Percussionist, Flautist
- Note this test is all combine in one since they all the same to not waste space.

### Test 3.1 Guitarist, Bassist, Percussionist, Flautist Interesting Fact

User create Guitarist, Bassist, Percussionist, Flautist Interesting Fact

Input Values:
Guitarist: Interesting Fact = 'The more strings you have, the better you are'|'very cool fact'|'awesome cool fact'
Bassist:  Interesting Fact = 'Everyone loves a bassist'|'a bassist'|'crazy on the sticks'
Percussionist: Interesting Fact = 'Me drum'|'Me stick'|'Me bass'
Flautist: Interesting Fact = '1989 heavy metal instrument of the year'|'cool fact'|'interesting'

Execution Steps: 
Create Guitarist, Bassist, Percussionist, Flautist Interesting Fact Object

Output Values:
Guitarist:
'The more strings you have, the better you are' = Success
'very cool fact' = Success
'awesome cool fact' = Success
Bassist:
'Everyone loves a bassist' = Success
'a bassist' = Success
'crazy on the sticks' = Success
Percussionist:
'Me drum' = Success
'Me stick' = Success
'Me bass' = Success
Flautist:
'1989 heavy metal instrument of the year' = Success
'cool fact' = Success
'interesting' = Success

### Test 3.2 Guitarist, Bassist, Percussionist, Flautist Name

User create Guitarist, Bassist, Percussionist, Flautist Name

Input Values:
Guitarist: Name = 'Jimmy Page'|'J'|'LoremIpsumDolorSitAmetConsectetur'
Bassist: Name = 'Flea'|'F'|'LoremIpsumDolorSitAmetConsectetur'
Percussionist: Name = 'Neil Peart'|'N'|'LoremIpsumDolorSitAmetConsectetur'
Flautist: Name = 'Ian Anderson'|'I'|'LoremIpsumDolorSitAmetConsectetur'

Execution Steps: 
Create Guitarist, Bassist, Percussionist, Flautist Name Object

Output Values:
Guitarist: 
'Jimmy Page' = Success
'J' = Failed
'LoremIpsumDolorSitAmetConsectetur' = Failed
Bassist: 
'Flea' = Success
'F' = Failed
'LoremIpsumDolorSitAmetConsectetur' = Failed
Percussionist: 
'Neil Peart' = Success
'N' = Failed
'LoremIpsumDolorSitAmetConsectetur' = Failed
Flautist: 
'Ian Anderson' = Success
'I' = Failed
'LoremIpsumDolorSitAmetConsectetur' = Failed

### Test 3.3 Guitarist, Bassist, Percussionist, Flautist Years Playing

User create Guitarist, Bassist, Percussionist, Flautist Years Playing

Input Values:
Guitarist: Years Playing = 20|-5|5
Bassist: Years Playing = 15|-3|50
Percussionist: Years Playing = 25|-2|50
Flautist: Years Playing = 30|-5|4

Execution Steps: 
Create Guitarist, Bassist, Percussionist, Flautist Years Playing Object

Output Values:
Guitarist: 
20 = Success
-5 = Failed
5 = Success
Bassist: 
15 = Success
-3 = Failed
50 = Success
Percussionist: 
25 = Success
-2 = Failed
50 = Success
Flautist: 
30 = Success
-5 = Failed
4 = Success

### Test 3.4 Guitarist, Bassist, Percussionist, Flautist Hourly Rate

User create Guitarist, Bassist, Percussionist, Flautist Hourly Rate

Input Values:
Guitarist: Hourly Rate = 70|120|45
Bassist: Hourly Rate = 60|45|150
Percussionist: Hourly Rate = 55|45|125
Flautist: Hourly Rate = 60|45|100

Execution Steps: 
Create Guitarist, Bassist, Percussionist, Flautist Hourly Rate Object

Output Values:
Guitarist: 
70 = Success
120 = Success
45 = Failed
Bassist: 
60 = Success
45 = Failed
150 = Success
Percussionist: 
55 = Success
45 = Failed
125 = Success
Flautist: 
60 = Success
45 = Failed
100 = Success

