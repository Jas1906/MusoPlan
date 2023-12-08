const { Musician, Troupe, Guitarist, Bassist, Percussionist, Flautist } = require('./classes.js');

// Test cases for the Musician class
describe('Musician class', () => {
    test('Setting and getting musician name within valid length', () => {
        const musician = new Musician();
        musician.musicianName = 'John Doe';
        expect(musician.musicianName).toBe('John Doe');
    });

    test('Rejecting musician name with length less than 3 characters', () => {
        const musician = new Musician();
        musician.musicianName = 'Jo';
        expect(musician.musicianName).toBe('');
    });

    test('Rejecting musician name with length more than 30 characters', () => {
        const musician = new Musician();
        musician.musicianName = 'LoremIpsumDolorSitAmetConsectetur';
        expect(musician.musicianName).toBe('');
    });

    test('Setting and getting years playing with a non-negative value', () => {
        const musician = new Musician();
        musician.yearsPlaying = 5;
        expect(musician.yearsPlaying).toBe(5);
    });

    test('Setting and getting years playing with a non-negative value', () => {
        const musician = new Musician();
        musician.yearsPlaying = 10;
        expect(musician.yearsPlaying).toBe(10);
    });

    test('Rejecting negative years playing value', () => {
        const musician = new Musician();
        musician.yearsPlaying = -2;
        expect(musician.yearsPlaying).toBe('');
    });

    test('Setting and getting hourly rate over 50', () => {
        const musician = new Musician();
        musician.hourlyRate = 60;
        expect(musician.hourlyRate).toBe(60);
    });

    test('Setting and getting hourly rate over 100', () => {
        const musician = new Musician();
        musician.hourlyRate = 120;
        expect(musician.hourlyRate).toBe(120);
    });

    test('Rejecting hourly rate less than 50', () => {
        const musician = new Musician();
        musician.hourlyRate = 45;
        expect(musician.hourlyRate).toBe('');
    });

    test('Setting and getting interesting fact', () => {
        const musician = new Musician();
        musician.interestingFact = 'Some interesting fact';
        expect(musician.interestingFact).toBe('Some interesting fact');
    });

    test('Setting and getting interesting fact', () => {
        const musician = new Musician();
        musician.interestingFact = 'Any interesting fact';
        expect(musician.interestingFact).toBe('Any interesting fact');
    });

    test('Setting and getting interesting fact', () => {
        const musician = new Musician();
        musician.interestingFact = 'Cool interesting fact';
        expect(musician.interestingFact).toBe('Cool interesting fact');
    });
});

// Test cases for the Troupe class
describe('Troupe class', () => {
    test('Setting and getting troupe name within valid length', () => {
        const troupe = new Troupe();
        troupe.troupeName = 'Rock Band';
        expect(troupe.troupeName).toBe('Rock Band');
    });

    test('Rejecting troupe name with length less than 3 characters', () => {
        const troupe = new Troupe();
        troupe.troupeName = 'RB';
        expect(troupe.troupeName).toBe('');
    });

    test('Rejecting troupe name with length more than 30 characters', () => {
        const troupe = new Troupe();
        troupe.troupeName = 'LoremIpsumDolorSitAmetConsectetur';
        expect(troupe.troupeName).toBe('');
    });

    test('Setting and getting troupe genre "rock"', () => {
        const troupe = new Troupe();
        troupe.troupeGenre = 'rock';
        expect(troupe.troupeGenre).toBe('rock');
    });

    test('Setting and getting troupe genre "jazz"', () => {
        const troupe = new Troupe();
        troupe.troupeGenre = 'jazz';
        expect(troupe.troupeGenre).toBe('jazz');
    });

    test('Setting and getting troupe genre "pop"', () => {
        const troupe = new Troupe();
        troupe.troupeGenre = 'pop';
        expect(troupe.troupeGenre).toBe('pop');
    });

    test('Rejecting invalid troupe genre', () => {
        const troupe = new Troupe();
        troupe.troupeGenre = 'country';
        expect(troupe.troupeGenre).toBe('');
    });

    test('Setting and getting troupe minimum duration within valid range', () => {
        const troupe = new Troupe();
        troupe.troupeMDuration = 2;
        expect(troupe.troupeMDuration).toBe(2);
    });

    test('Rejecting troupe minimum duration less than 0.5 hours', () => {
        const troupe = new Troupe();
        troupe.troupeMDuration = 0.3;
        expect(troupe.troupeMDuration).toBe('');
    });

    test('Rejecting troupe minimum duration more than 3 hours', () => {
        const troupe = new Troupe();
        troupe.troupeMDuration = 3.5;
        expect(troupe.troupeMDuration).toBe('');
    });
});

// Test cases for the Guitarist class
describe('Guitarist class', () => {
    test('Guitarist interesting fact', () => {
        const guitarist = new Guitarist();
        guitarist.interestingFact = 'The more strings you have, the better you are';
        expect(guitarist.interestingFact).toBe('The more strings you have, the better you are');
    });

    test('Guitarist interesting fact', () => {
        const guitarist = new Guitarist();
        guitarist.interestingFact = 'very cool fact';
        expect(guitarist.interestingFact).toBe('very cool fact');
    });

    test('Guitarist interesting fact', () => {
        const guitarist = new Guitarist();
        guitarist.interestingFact = 'awesome cool fact';
        expect(guitarist.interestingFact).toBe('awesome cool fact');
    });


    test('Setting and getting musician name for Guitarist', () => {
        const guitarist = new Guitarist();
        guitarist.musicianName = 'Jimmy Page';
        expect(guitarist.musicianName).toBe('Jimmy Page');
    });

    test('Rejecting Guitarist name with invalid length', () => {
        const guitarist = new Guitarist();
        guitarist.musicianName = 'J';
        expect(guitarist.musicianName).toBe('');
    });

    test('Rejecting Guitarist name with invalid length', () => {
        const guitarist = new Guitarist();
        guitarist.musicianName = 'LoremIpsumDolorSitAmetConsectetur';
        expect(guitarist.musicianName).toBe('');
    });

    test('Setting and getting years playing for Guitarist', () => {
        const guitarist = new Guitarist();
        guitarist.yearsPlaying = 20;
        expect(guitarist.yearsPlaying).toBe(20);
    });

    test('Rejecting negative years playing value for Guitarist', () => {
        const guitarist = new Guitarist();
        guitarist.yearsPlaying = -5;
        expect(guitarist.yearsPlaying).toBe('');
    });

    test('Setting and getting years playing for Guitarist', () => {
        const guitarist = new Guitarist();
        guitarist.yearsPlaying = 5;
        expect(guitarist.yearsPlaying).toBe(5);
    });

    test('Setting and getting hourly rate over 50 for Guitarist', () => {
        const guitarist = new Guitarist();
        guitarist.hourlyRate = 70;
        expect(guitarist.hourlyRate).toBe(70);
    });

    test('Setting and getting hourly rate over 50 for Guitarist', () => {
        const guitarist = new Guitarist();
        guitarist.hourlyRate = 120;
        expect(guitarist.hourlyRate).toBe(120);
    });

    test('Rejecting hourly rate less than or equal to 50 for Guitarist', () => {
        const guitarist = new Guitarist();
        guitarist.hourlyRate = 45;
        expect(guitarist.hourlyRate).toBe('');
    });
});

// Test cases for the Bassist class
describe('Bassist class', () => {
    test('Bassist interesting fact', () => {
        const bassist = new Bassist();
        bassist.interestingFact = 'Everyone loves a bassist'
        expect(bassist.interestingFact).toBe('Everyone loves a bassist');
    });

    test('Bassist interesting fact', () => {
        const bassist = new Bassist();
        bassist.interestingFact = 'a bassist'
        expect(bassist.interestingFact).toBe('a bassist');
    });

    test('Bassist interesting fact', () => {
        const bassist = new Bassist();
        bassist.interestingFact = 'crazy on the sticks'
        expect(bassist.interestingFact).toBe('crazy on the sticks');
    });

    test('Setting and getting musician name for Bassist', () => {
        const bassist = new Bassist();
        bassist.musicianName = 'Flea';
        expect(bassist.musicianName).toBe('Flea');
    });

    test('Setting and getting musician name for Bassist should be invalid since name is less than 3 characters', () => {
        const bassist = new Bassist();
        bassist.musicianName = 'F';
        expect(bassist.musicianName).toBe('');
    });


    test('Setting and getting musician name for Bassist should be invalid since name is more than 30 characters', () => {
        const bassist = new Bassist();
        bassist.musicianName = 'LoremIpsumDolorSitAmetConsectetur';
        expect(bassist.musicianName).toBe('');
    });


    test('Setting and getting years playing for Bassist', () => {
        const bassist = new Bassist();
        bassist.yearsPlaying = 15;
        expect(bassist.yearsPlaying).toBe(15);
    });

    test('Rejecting negative years playing value for Bassist', () => {
        const bassist = new Bassist();
        bassist.yearsPlaying = -3;
        expect(bassist.yearsPlaying).toBe('');
    });

    test('Setting and getting years playing for Bassist', () => {
        const bassist = new Bassist();
        bassist.yearsPlaying = 50;
        expect(bassist.yearsPlaying).toBe(50);
    });

    test('Setting and getting hourly rate over 50 for Bassist', () => {
        const bassist = new Bassist();
        bassist.hourlyRate = 60;
        expect(bassist.hourlyRate).toBe(60);
    });

    test('Rejecting hourly rate less than or equal to 50 for Bassist', () => {
        const bassist = new Bassist();
        bassist.hourlyRate = 45;
        expect(bassist.hourlyRate).toBe('');
    });

    test('Setting and getting hourly rate over 50 for Bassist', () => {
        const bassist = new Bassist();
        bassist.hourlyRate = 150;
        expect(bassist.hourlyRate).toBe(150);
    });
});

// Test cases for the Percussionist class
describe('Percussionist class', () => {
    test('Percussionist interesting fact', () => {
        const percussionist = new Percussionist();
        percussionist.interestingFact = 'Me drum';
        expect(percussionist.interestingFact).toBe('Me drum');
    });

    test('Percussionist interesting fact', () => {
        const percussionist = new Percussionist();
        percussionist.interestingFact = 'Me stick';
        expect(percussionist.interestingFact).toBe('Me stick');
    });


    test('Percussionist interesting fact', () => {
        const percussionist = new Percussionist();
        percussionist.interestingFact = 'Me bass';
        expect(percussionist.interestingFact).toBe('Me bass');
    });


    test('Setting and getting musician name for Percussionist', () => {
        const percussionist = new Percussionist();
        percussionist.musicianName = 'Neil Peart';
        expect(percussionist.musicianName).toBe('Neil Peart');
    });

    test('Setting and getting musician name for Percussionist should be invalid since its less than 3 characters', () => {
        const percussionist = new Percussionist();
        percussionist.musicianName = 'N';
        expect(percussionist.musicianName).toBe('');
    });

    test('Setting and getting musician name for Percussionist should be invalid since its more than 30 characters', () => {
        const percussionist = new Percussionist();
        percussionist.musicianName = 'LoremIpsumDolorSitAmetConsectetur';
        expect(percussionist.musicianName).toBe('');
    });

    test('Setting and getting years playing for Percussionist', () => {
        const percussionist = new Percussionist();
        percussionist.yearsPlaying = 25;
        expect(percussionist.yearsPlaying).toBe(25);
    });

    test('Rejecting negative years playing value for Percussionist', () => {
        const percussionist = new Percussionist();
        percussionist.yearsPlaying = -2;
        expect(percussionist.yearsPlaying).toBe('');
    });

    test('Setting and getting years playing for Percussionist', () => {
        const percussionist = new Percussionist();
        percussionist.yearsPlaying = 50;
        expect(percussionist.yearsPlaying).toBe(50);
    });

    test('Setting and getting hourly rate over 50 for Percussionist', () => {
        const percussionist = new Percussionist();
        percussionist.hourlyRate = 55;
        expect(percussionist.hourlyRate).toBe(55);
    });

    test('Rejecting hourly rate less than or equal to 50 for Percussionist', () => {
        const percussionist = new Percussionist();
        percussionist.hourlyRate = 45;
        expect(percussionist.hourlyRate).toBe('');
    });

    test('Setting and getting hourly rate over 50 for Percussionist', () => {
        const percussionist = new Percussionist();
        percussionist.hourlyRate = 125;
        expect(percussionist.hourlyRate).toBe(125);
    });
});

// Test cases for the Flautist class
describe('Flautist class', () => {
    test('Flautist interesting fact', () => {
        const flautist = new Flautist();
        flautist.interestingFact = '1989 heavy metal instrument of the year'
        expect(flautist.interestingFact).toBe('1989 heavy metal instrument of the year');
    });

    test('Flautist interesting fact', () => {
        const flautist = new Flautist();
        flautist.interestingFact = 'cool fact'
        expect(flautist.interestingFact).toBe('cool fact');
    });

    test('Flautist interesting fact', () => {
        const flautist = new Flautist();
        flautist.interestingFact = 'interesting'
        expect(flautist.interestingFact).toBe('interesting');
    });

    test('Setting and getting musician name for Flautist', () => {
        const flautist = new Flautist();
        flautist.musicianName = 'Ian Anderson';
        expect(flautist.musicianName).toBe('Ian Anderson');
    });

    test('Setting and getting musician name for Flautist should be invalid since name is less than 3 characters', () => {
        const flautist = new Flautist();
        flautist.musicianName = 'I';
        expect(flautist.musicianName).toBe('');
    });

    test('Setting and getting musician name for Flautist should be invalid since name is more than 30 characters', () => {
        const flautist = new Flautist();
        flautist.musicianName = 'LoremIpsumDolorSitAmetConsectetur';
        expect(flautist.musicianName).toBe('');
    });


    test('Setting and getting years playing for Flautist', () => {
        const flautist = new Flautist();
        flautist.yearsPlaying = 30;
        expect(flautist.yearsPlaying).toBe(30);
    });

    test('Rejecting negative years playing value for Flautist', () => {
        const flautist = new Flautist();
        flautist.yearsPlaying = -5;
        expect(flautist.yearsPlaying).toBe('');
    });

    test('Setting and getting years playing for Flautist', () => {
        const flautist = new Flautist();
        flautist.yearsPlaying = 4;
        expect(flautist.yearsPlaying).toBe(4);
    });

    test('Setting and getting hourly rate over 50 for Flautist', () => {
        const flautist = new Flautist();
        flautist.hourlyRate = 60;
        expect(flautist.hourlyRate).toBe(60);
    });

    test('Rejecting hourly rate less than or equal to 50 for Flautist', () => {
        const flautist = new Flautist();
        flautist.hourlyRate = 45;
        expect(flautist.hourlyRate).toBe('');
    });

    test('Setting and getting hourly rate over 50 for Flautist', () => {
        const flautist = new Flautist();
        flautist.hourlyRate = 100;
        expect(flautist.hourlyRate).toBe(100);
    });

});
