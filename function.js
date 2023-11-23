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
function addMusicianToTroupe() {
    // Display existing musicians and troupes
    console.log("Existing Musicians:");
    console.log(musicianDetails);
    console.log("\nExisting Troupes:");
    console.log(troupeDetails);

    // Prompt user for musician and troupe selection
    let musicianIndex = parseInt(prompt("Enter the index of the musician to add: "));
    let troupeIndex = parseInt(prompt("Enter the index of the troupe to add the musician to: "));

    // Check if the indices are valid
    if (isNaN(musicianIndex) || musicianIndex < 0 || musicianIndex >= musicianDetails.length) {
        console.log("Invalid musician index.");
        return;
    }

    if (isNaN(troupeIndex) || troupeIndex < 0 || troupeIndex >= troupeDetails.length) {
        console.log("Invalid troupe index.");
        return;
    }

    // Get the selected musician and troupe
    let selectedMusician = musicianDetails[musicianIndex];
    let selectedTroupe = troupeDetails[troupeIndex];

    // Check if the troupe already has 5 musicians
    if (selectedTroupe.member.length >= 5) {
        console.log("Troupe already has the maximum allowed musicians (5).");
        return;
    }

    // Add the musician to the troupe
    selectedTroupe.member.push(selectedMusician);

    console.log("Musician added to troupe successfully!");
    console.log("Musician Name: " + selectedMusician.musicianName);
    console.log("Troupe Name: " + selectedTroupe.troupeName);
    console.log("Updated Troupe Members: ");
    console.log(selectedTroupe.member);
}

function displayTroupeInformation() {
    // Display existing Troupes
    console.log("Existing Troupes:");
    console.log(troupeDetails);

    // Prompt user for the troupe name
    let troupeName = prompt("Enter the name of the troupe to display information:");

    // Search for the troupe in troupeDetails array
    const troupe = troupeDetails.find((troupe) => troupe.troupeName === troupeName);

    // If the troupe is found, display information
    if (troupe) {
        console.log("Troupe Name: " + troupe.troupeName);

        // Count the number of each type of musician in the troupe
        const musicianCounts = {
            Guitarists: 0,
            Bassists: 0,
            Percussionists: 0,
            Flautists: 0,
        };

        troupe.member.forEach((musician) => {
            if (musician instanceof Guitarist) {
                musicianCounts.Guitarists++;
            } else if (musician instanceof Bassist) {
                musicianCounts.Bassists++;
            } else if (musician instanceof Percussionist) {
                musicianCounts.Percussionists++;
            } else if (musician instanceof Flautist) {
                musicianCounts.Flautists++;
            }
        });

        // Display musician counts for each type
        console.log("Guitarists: " + musicianCounts.Guitarists);
        console.log("Bassists: " + musicianCounts.Bassists);
        console.log("Percussionists: " + musicianCounts.Percussionists);
        console.log("Flautists: " + musicianCounts.Flautists);
    } else {
        console.log("Troupe not found.");
    }
}

function displayTroupeDetails() {
    // Display existing Troupes
    console.log("Existing Troupes:");
    console.log(troupeDetails);

    // Prompt user for the troupe name
    let troupeName = prompt("Enter the name of the troupe to display information:");

    // Search for the troupe in troupeDetails array
    const troupe = troupeDetails.find((troupe) => troupe.troupeName === troupeName);

    // If the troupe is found, display information
    if (troupe) {
        console.log("Troupe Name: " + troupe.troupeName);

        // Display information about each musician in the troupe
        troupe.member.forEach((musician) => {
            console.log(musician.constructor.name + "s:");
            console.log("Interesting Fact: " + musician.interestingFact);
            console.log("Name: " + musician.musicianName + ", Hourly Rate: " + musician.hourlyRate);
        });
    } else {
        console.log("Troupe not found.");
    }
}

function calculateDeploymentCost() {
    // Display existing Troupes
    console.log("Existing Troupes:");
    console.log(troupeDetails);

    // Prompt user for the troupe name
    let troupeName = prompt("Enter the name of the troupe for deployment:");

    // Search for the troupe in troupeDetails array
    const troupe = troupeDetails.find((troupe) => troupe.troupeName === troupeName);

    // If the troupe is found, proceed with deployment cost calculation
    if (troupe) {
        let hours = parseFloat(prompt("Enter the number of hours for deployment:"));

        // Validate the input for hours
        while (isNaN(hours) || hours <= 0) {
            console.log("Invalid input for hours. Please enter a positive number.");
            hours = parseFloat(prompt("Re-enter the number of hours for deployment:"));
        }

        // Calculate the deployment cost based on the individual musician's hourly rate
        let deploymentCost = 0;

        troupe.member.forEach((musician) => {
            deploymentCost += hours * musician.hourlyRate;
        });

        // Display the calculated deployment cost
        console.log("Deployment Cost for Troupe " + troupe.troupeName + " for " + hours + " hours: $" + deploymentCost.toFixed(2));
    } else {
        console.log("Troupe not found.");
    }
}
function printTroupeNamesToFile() {
    // Display existing Troupes
    console.log("Existing Troupes:");
    console.log(troupeDetails);

    // Prompt user for the file name
    let fileName = prompt("Enter the file name (with extension) to save Troupe names:");

    // Create a writable stream to the file
    const stream = fs.createWriteStream(fileName);

    // Write Troupe names to the file
    troupeDetails.forEach((troupe) => {
        stream.write(troupe.troupeName + "\n");
    });

    // Close the stream
    stream.end();

    console.log("Troupe names have been saved to the file: " + fileName);
}





module.exports={registerMusician,musicianRegistration,registerTroupe,troupeRegistration,addMusicianToTroupe,displayTroupeInformation,displayTroupeDetails,calculateDeploymentCost,printTroupeNamesToFile};
















