const ps=require('prompt-sync');
const prompt=ps();

const fs=require('fs');

const {Musician,Troupe,Guitarist,Bassist,Percussionist,Flautist}=require('./classes.js');

var musicianDetails=new Array();
var troupeDetails=new Array();

function registerMusician() {
    // Prompt user for musician details
    let mname= prompt("Enter musician name (between 3 and 30 characters):");
    let yplaying = parseInt(prompt("Enter years playing (non-negative):"));
    let hrate = parseFloat(prompt("Enter hourly rate (over 50):"));
    let ifact = prompt("Choose an instrument (Guitarist, Bassist, Percussionist, Flautist):");

    
    while (mname.length < 3 || mname.length > 30) {
        console.log("Invalid musician name. It should be between 3 and 30 characters.");
        mname = prompt("Re-enter musician name:");
    }

    
    while (isNaN(yplaying) || yplaying < 0) {
        console.log("Invalid value for years playing. It should be non-negative.");
        yplaying = parseInt(prompt("Re-enter years playing:"));
    }

    
    while (isNaN(hrate) || hrate <= 50) {
        console.log("Invalid hourly rate. It should be over 50.");
        hrate = parseFloat(prompt("Re-enter hourly rate:"));
    }

    
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

function registerTroupe(){
    let tname="";
    let tgenre="";
    let tmduration=0;

    while(true){
        if(tname.length>=3 && tname.length<=30){
            if(tgenre=="rock" || tgenre=="pop" || tgenre=="jazz"){
                   if(tmduration>=0.5 && tmduration<=3){
                    break;
                   }
                   else{
                    tmduration=parseInt(prompt("Minimum Duration in hours (0.5 - 3): "));
                   }
                }
            else{
                tgenre=prompt("enter valid genre (rock, pop or jazz): ");
            }
        }
        else{
            tname=prompt("enter troupe name (3-30 characters): ");
        }
    }  

    const troupe=new Troupe();
    troupe.troupeName=tname;
    troupe.troupeGenre=tgenre;
    troupe.troupeMDuration=tmduration;
    troupeRegistration(troupe);

    console.log("Troupe registered successfully!");
    console.log("Name: " + troupe.troupeName);
    console.log("Genre: " +  troupe.troupeGenre);
    console.log("Duration: " + troupe.troupeMDuration);
    
}

function troupeRegistration(troupe){
    troupeDetails.push(troupe);
    console.log(troupeDetails);

}



module.exports={registerMusician,musicianRegistration,registerTroupe,troupeRegistration};
















