const ps=require('prompt-sync');
const prompt=ps();

const fs=require('fs');

const {Musician,Troupe,Guitarist,Bassist,Percussionist,Flautist}=require('./classes.js');

var musicianDetails=new Array();
var troupeDetails=new Array();

function registerMusician(musicianName,yearsPlaying,hourlyRate,interestingFact) {

    let mname= musicianName;
    let yplaying = yearsPlaying;
    let hrate = hourlyRate;
    let ifact = interestingFact;

    // Prompt user for musician details
    /*let mname= prompt("Enter musician name (between 3 and 30 characters):");
    let yplaying = parseInt(prompt("Enter years playing (non-negative):"));
    let hrate = parseFloat(prompt("Enter hourly rate (over 50):"));
    let ifact = prompt("Choose an instrument (Guitarist, Bassist, Percussionist, Flautist):");
    */



    //check if input are valid
    while (mname.length < 3 || mname.length > 30) {
        //console.log("Invalid musician name. It should be between 3 and 30 characters.");
        //mname = prompt("Re-enter musician name:");
        throw new Error ('Invalid musician name. It should be between 3 and 30 characters.');
        
    }

    //check if input are valid
    while (isNaN(yplaying) || yplaying < 0) {
        //console.log("Invalid value for years playing. It should be non-negative.");
        //yplaying = parseInt(prompt("Re-enter years playing:"));
        throw new Error ('Invalid value for years playing. It should be non-negative.');
        
    }

    //check if input are valid
    while (isNaN(hrate) || hrate <= 50) {
        //console.log("Invalid hourly rate. It should be over 50.");
        //hrate = parseFloat(prompt("Re-enter hourly rate:"));
        throw new Error ('Invalid hourly rate. It should be over 50.');
        
    }

    //choice of instrument and create a class based on choice
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
            //console.log("Invalid instrument choice. Choose from Guitarist, Bassist, Percussionist, Flautist.");
            throw new Error('Invalid instrument choice. Choose from Guitarist, Bassist, Percussionist, Flautist.');
            //return;
    }

    //display musician
    /*console.log("Musician registered successfully!");
    console.log("Name: " + musician.musicianName);
    console.log("Years Playing: " + musician.yearsPlaying);
    console.log("Hourly Rate: " + musician.hourlyRate);
    console.log("Interesting Fact: " + musician.interestingFact);
    */

    let string="Musician registered successfully!"+"Name: " + musician.musicianName+"Years Playing: " + musician.yearsPlaying+"Hourly Rate: " + musician.hourlyRate+"Interesting Fact: " + musician.interestingFact;
    return string;
}

function musicianRegistration(musician){
    musicianDetails = [];
    musicianDetails.push(musician);
    //console.log(musicianDetails);
    return musicianDetails;
}

function registerTroupe(troupeName,troupeGenre,troupeMinDuration){

    let tname=troupeName;
    let tgenre=troupeGenre;
    let tmduration=troupeMinDuration;

    /*let tname="";
    let tgenre="";
    let tmduration=0;
    */

    //check if value are valid
    while(true){
        if(tname.length>=3 && tname.length<=30){
            if(tgenre=="rock" || tgenre=="pop" || tgenre=="jazz"){
                   if(tmduration>=0.5 && tmduration<=3){
                    break;
                   }
                   else{
                    //tmduration=parseInt(prompt("Minimum Duration in hours (0.5 - 3): "));
                    throw new Error('Minimum Duration in hours (0.5 - 3)');
                   }
                }
            else{
                //tgenre=prompt("enter valid genre (rock, pop or jazz): ");
                throw new Error('enter valid genre (rock, pop or jazz)');
            }
        }
        else{
            //tname=prompt("enter troupe name (3-30 characters): ");
            throw new Error('enter troupe name (3-30 characters)');
        }
    }  
    // if valid create a troupe
    const troupe=new Troupe();
    troupe.troupeName=tname;
    troupe.troupeGenre=tgenre;
    troupe.troupeMDuration=tmduration;
    troupeRegistration(troupe);

    //display troupes
    /*console.log("Troupe registered successfully!");
    console.log("Name: " + troupe.troupeName);
    console.log("Genre: " +  troupe.troupeGenre);
    console.log("Duration: " + troupe.troupeMDuration);
    */

    let tresult="Troupe registered successfully!"+"Name: " + troupe.troupeName+"Genre: " +  troupe.troupeGenre+"Duration: " + troupe.troupeMDuration;
    return tresult;
    
}

function troupeRegistration(troupe){
    troupeDetails = [];
    troupeDetails.push(troupe);
    //console.log(troupeDetails);
    return troupeDetails;

}

function addMusicianToTroupe() {
    // Display existing musicians and troupes
    console.log("Existing Musicians:");
    console.log(musicianDetails);
    console.log("\nExisting Troupes:");
    console.log(troupeDetails);

    // Prompt user for musician and troupe selection
    let musicianName = prompt("Enter the name of the musician to add: ");
    let troupeName = prompt("Enter the name of the troupe to add the musician to: ");

    // Search for the musician in musicianDetails array
    const selectedMusician = musicianDetails.find((musician) => musician.musicianName === musicianName);

    // Search for the troupe in troupeDetails array
    const selectedTroupe = troupeDetails.find((troupe) => troupe.troupeName === troupeName);

    // Check if the musician and troupe are found
    if (!selectedMusician) {
        console.log("Musician not found.");
        return;
    }

    if (!selectedTroupe) {
        console.log("Troupe not found.");
        return;
    }

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

    // If the troupe is found display information
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

    // If the troupe is found display information
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

    // If the troupe is found proceed with deployment cost calculation
    if (troupe) {
        let hours = parseFloat(prompt("Enter the number of hours for deployment:"));

        // Validate the input for hours
        while (isNaN(hours) || hours <= 0) {
            console.log("Invalid input for hours. Please enter a positive number.");
            hours = parseFloat(prompt("Re-enter the number of hours for deployment:"));
        }

        // Calculate the deployment cost based on the individual musicians hourly rate
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

function readTroupeDetailsFromFile() {
    // Prompt user for the file name
    let fileName = prompt("Enter the file name (with extension) containing troupe details:");

    try {
        // Read the content of the file
        const fileContent = fs.readFileSync(fileName, 'utf-8');

        // Split the content into an array of lines
        const lines = fileContent.trim().split('\n');

        // Create troupe objects with the given details from file
        lines.forEach((line) => {
            const [troupeName, troupeGenre, troupeMDuration] = line.split(',').map((item) => item.trim());

            const troupe = new Troupe();
            troupe.troupeName = troupeName;
            troupe.troupeGenre = troupeGenre;
            troupe.troupeMDuration = parseFloat(troupeMDuration);

            troupeDetails.push(troupe);
        });

        // Display the created troupe objects
        console.log("Troupes created from file:");
        console.log(troupeDetails);
    } catch (error) {
        console.error("Error reading the file:", error.message);
        // error messasge
    }
}


function printAllTroupesToFile() {
    // Prompt user for the file name
    //let fileName = prompt("Enter the file name (with extension) to save all troupe details:");

    try {
        // Create a string to store the content
        let fileContent = "";

        // Write troupe details to the content string
        troupeDetails.forEach((troupe) => {
            fileContent += "Troupe Name: " + troupe.troupeName + "\n";
            fileContent += "Genre: " + troupe.troupeGenre + "\n";
            fileContent += "Minimum Duration: " + troupe.troupeMDuration + " hours\n";

            // Display information about each musician in the troupe
            troupe.member.forEach((musician) => {
                fileContent += musician.constructor.name + ":\n";
                fileContent += "Interesting Fact: " + musician.interestingFact + "\n";
                fileContent += "Name: " + musician.musicianName + ", Hourly Rate: $" + musician.hourlyRate + "\n";
            });

            // Add a separator between troupes
            fileContent += "\n------------------------\n\n";
        });

        // Write the content to the file
        fs.writeFileSync(fileName, fileContent);

        console.log("All troupe details have been saved to the file: " + fileName);
    } catch (error) {
        console.error("Error writing to the file:", error.message);
        // Optionally, you can handle the error as needed
    }
}



module.exports={registerMusician,musicianRegistration,registerTroupe,troupeRegistration,addMusicianToTroupe,displayTroupeInformation,displayTroupeDetails,calculateDeploymentCost, readTroupeDetailsFromFile,printAllTroupesToFile};
















