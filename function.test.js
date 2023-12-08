const func=require('./function.js');
const { Musician, Troupe, Guitarist, Bassist, Percussionist, Flautist } = require('./classes.js');

describe('registerMusician Function', () => {
    test('input is valid and should register musician',()=>{
        expect(func.registerMusician("Jason",5,55,"Guitarist")).toEqual("Musician registered successfully!"+"Name: " + "Jason"+"Years Playing: " + 5+"Hourly Rate: " + 55+"Interesting Fact: " + "The more strings you have, the better you are");
    });

    test('throws an error when musician name is less than 3 characters', () => {
        expect(()=>{
        func.registerMusician('Jo', 5, 55, 'Guitarist');
        }).toThrowError('Invalid musician name. It should be between 3 and 30 characters.');
    });

    test('throws an error because user does not input the instrument type',()=>{
        expect(()=>{
        func.registerMusician("Jessica Jes",10,100,"");
        }).toThrowError("Invalid instrument choice. Choose from Guitarist, Bassist, Percussionist, Flautist.");
    });

    test('throws an error because user input negative years playing',()=>{
        expect(()=>{
        func.registerMusician("Jamie Jason",-5,100,"Percussionist");
        }).toThrowError("Invalid value for years playing. It should be non-negative.");
    });

    test('throws an error because user input less than 50 hourly rate',()=>{
        expect(()=>{
        func.registerMusician("Jordan Peele",20,45,"Bassist");
        }).toThrowError("Invalid hourly rate. It should be over 50.");
    });

});


describe('musicianRegistration Function', () => {
    test('checking musicianRegistration function and should be valid',()=>{
        mu=new Musician()
        mu.musicianName="Jessica";
        mu.yearsPlaying=12;
        mu.hourlyRate=56;
        mu.interestingFact="The more strings you have, the better you are";
        expect(func.musicianRegistration(mu)).toEqual([{"hourly_rate": 56, "interesting_fact": "The more strings you have, the better you are", "musician_name": "Jessica", "years_playing": 12}]);
 
  
    });

    test('checking musicianRegistration function and name should be empty since it does not meet the requirement length',()=>{
        mu=new Musician()
        mu.musicianName="Je";
        mu.yearsPlaying=5;
        mu.hourlyRate=66;
        mu.interestingFact="Me drum";
        expect(func.musicianRegistration(mu)).toEqual([{"hourly_rate": 66, "interesting_fact": "Me drum", "musician_name": "", "years_playing": 5}]);
 
   
    });

    test('checking musicianRegistration function and hourly_rate should be empty since its not over 50',()=>{
        mu=new Musician()
        mu.musicianName="James Jason";
        mu.yearsPlaying=7;
        mu.hourlyRate=45;
        mu.interestingFact="1989 heavy metal instrument of the year";
        expect(func.musicianRegistration(mu)).toEqual([{"hourly_rate": "", "interesting_fact": "1989 heavy metal instrument of the year", "musician_name": "James Jason", "years_playing": 7}]);
 
    
    })

    test('checking musicianRegistration function and years playing should be empty since its negative',()=>{
        mu=new Musician()
        mu.musicianName="David Brent";
        mu.yearsPlaying=-5;
        mu.hourlyRate=96;
        mu.interestingFact="Everyone loves a bassist";
        expect(func.musicianRegistration(mu)).toEqual([{"hourly_rate": 96, "interesting_fact": "Everyone loves a bassist", "musician_name": "David Brent", "years_playing": ""}]);
 
  
    });
});


describe('registerTroupe Function', () => {
    test('input is valid and should register troupe',()=>{
        expect(func.registerTroupe("amazing troupe","jazz",2)).toEqual("Troupe registered successfully!Name: amazing troupeGenre: jazzDuration: 2");
    });

    test('throws an error when troupe name is less than 3 characters', () => {
        expect(()=>{
        func.registerTroupe('se',"pop",2.5);
        }).toThrowError('enter troupe name (3-30 characters)');
    });

    test('throws an error when genre is not valid name', () => {
        expect(()=>{
        func.registerTroupe('rock and roll',"country",3);
        }).toThrowError('enter valid genre (rock, pop or jazz)');
    });

    test('throws an error when duration is over 3 ', () => {
        expect(()=>{
        func.registerTroupe('bangers',"jazz",6);
        }).toThrowError('Minimum Duration in hours (0.5 - 3)');
    });

});

describe('troupeRegistration Function', () => {
    test('checking troupeRegistration function and should be valid, members should be empty since its for another function',()=>{
        tr=new Troupe()
        tr.troupeName="jammers";
        tr.troupeGenre="rock";
        tr.troupeMDuration=2.5;
        expect(func.troupeRegistration(tr)).toEqual([{"member": [], "troupe_genre": "rock", "troupe_mduration": 2.5, "troupe_name": "jammers"}]);
    });

    test('checking troupeRegistration function and name should be empty since it does not meet the length requirement, members should be empty since its for another function',()=>{
        tr=new Troupe()
        tr.troupeName="ja";
        tr.troupeGenre="pop";
        tr.troupeMDuration=3;
        expect(func.troupeRegistration(tr)).toEqual([{"member": [], "troupe_genre": "pop", "troupe_mduration": 3, "troupe_name": ""}]);
    });

    test('checking troupeRegistration function and duration should be empty since its more than 3 hr, members should be empty since its for another function',()=>{
        tr=new Troupe()
        tr.troupeName="bangers";
        tr.troupeGenre="jazz";
        tr.troupeMDuration=6;
        expect(func.troupeRegistration(tr)).toEqual([{"member": [], "troupe_genre": "jazz", "troupe_mduration": "", "troupe_name": "bangers"}]);
    });

    test('checking troupeRegistration function and genre should be empty since its not valid input, members should be empty since its for another function',()=>{
        tr=new Troupe()
        tr.troupeName="rammers";
        tr.troupeGenre="country";
        tr.troupeMDuration=1;
        expect(func.troupeRegistration(tr)).toEqual([{"member": [], "troupe_genre": "", "troupe_mduration": 1, "troupe_name": "rammers"}]);
    });


});

  