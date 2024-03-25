#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computerwill generate a remdom number-Done
// 2) user input for guessing number-Done
// 3) compare user input with computer generate number and show result-Done
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please Guess a Number Between 1-6:",
    },
]);
if (answer.UserGuessedNumber === randomNumber) {
    console.log("congratulations! You Guessed Right Number.");
}
else {
    console.log("You Guessed Wrong Number.");
}
;
