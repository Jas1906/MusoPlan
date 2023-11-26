const ps = require('prompt-sync');
const prompt = ps();

const { Musician, Troupe, Guitarist, Bassist, Percussionist, Flautist } = require('./classes.js');
const programFunctions = require('./function.js');

var choice = 0;

while (true) {

    if (choice == 0) {
        console.log("=================================================");
        console.log("select your choice:");
        console.log("\t1.Create a Musician\n\t2.Create a Troupe\n\t3.Add a Musician to a troupe\n\t4.Summary Description of a troupe\n\t5.Detailed description of a troupe\n\t6.Calculate the cost of a troupe for a number of hours\n\t7.Read a list of troupe names to be populated from a file\n\t8.Write a list of the detailed descriptions for all troupes to a given filename\n\t9.Exit");
        choice = prompt('Enter your choice [1,2,3,4,5,6,7,8,9] :');
    }
    else if (choice >= 1 && choice <= 9) {
        if (choice == 1) {
            programFunctions.registerMusician();
        }
        else if (choice == 2) {
            programFunctions.registerTroupe();
        }
        else if (choice == 3) {
            programFunctions.addMusicianToTroupe();
        }
        else if (choice == 4) {
            programFunctions.displayTroupeInformation();
        }
        else if (choice == 5) {
            programFunctions.displayTroupeDetails();
        }
        else if (choice == 6) {
            programFunctions.calculateDeploymentCost();
        }
        else if (choice == 7) {
            programFunctions.readTroupeDetailsFromFile();
        }
        else if (choice == 8) {
            programFunctions.printAllTroupesToFile();
        }
        else if (choice == 9) {
            break;
        }
        choice = 0;
    } else {
        console.log("Invalid choice. Please enter a number between 1 and 9.");
        choice = 0;
    }
}
