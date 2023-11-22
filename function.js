const ps=require('prompt-sync');
const prompt=ps();

const fs=require('fs');

const {Musician,Troupe,Guitarist,Bassist,Percussionist,Flautist}=require('./classes.js');

var musicianDetails=new Array()

function registerMusician() {
    // Prompt user for musician details
    let mname= prompt("Enter musician name (between 3 and 30 characters):");
    let yplaying = parseInt(prompt("Enter years playing (non-negative):"));
    let hrate = parseFloat(prompt("Enter hourly rate (over 50):"));
    let ifact = prompt("Choose an instrument (Guitarist, Bassist, Percussionist, Flautist):");

    // Validate musician name
    while (mname.length < 3 || mname.length > 30) {
        console.log("Invalid musician name. It should be between 3 and 30 characters.");
        mname = prompt("Re-enter musician name:");
    }

    // Validate years playing
    while (isNaN(yplaying) || yplaying < 0) {
        console.log("Invalid value for years playing. It should be non-negative.");
        yplaying = parseInt(prompt("Re-enter years playing:"));
    }

    // Validate hourly rate
    while (isNaN(hrate) || hrate <= 50) {
        console.log("Invalid hourly rate. It should be over 50.");
        hrate = parseFloat(prompt("Re-enter hourly rate:"));
    }

    // Create musician based on the chosen instrument
    let musician;
    switch (ifact) {
        case 'Guitarist':
            musician = new Guitarist();
            musician.musicianName=mname;
            musician.yearsPlaying=yplaying;
            musician.hourlyRate=hrate;
            musicianRegistration(musician)
            break;
        case 'Bassist':
            musician = new Bassist();
            musician.musicianName=mname;
            musician.yearsPlaying=yplaying;
            musician.hourlyRate=hrate;
            musicianRegistration(musician)
            break;
        case 'Percussionist':
            musician = new Percussionist();
            musician.musicianName=mname;
            musician.yearsPlaying=yplaying;
            musician.hourlyRate=hrate;
            musicianRegistration(musician)
            break;
        case 'Flautist':
            musician = new Flautist();
            musician.musicianName=mname;
            musician.yearsPlaying=yplaying;
            musician.hourlyRate=hrate;
            musicianRegistration(musician)
            break;
        default:
            console.log("Invalid instrument choice. Choose from Guitarist, Bassist, Percussionist, Flautist.");
            return;
    }

    // Display registered musician details
    console.log("Musician registered successfully!");
    console.log("Name: " + musician.musicianName);
    console.log("Years Playing: " + musician.yearsPlaying);
    console.log("Hourly Rate: " + musician.hourlyRate);
    console.log("Interesting Fact: " + musician.interestingFact);
}

function musicianRegistration(musician){
    musicianDetails.push(musician);
    console.log(musicianDetails);
}



module.exports={registerMusician,musicianRegistration};
















