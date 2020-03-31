// install and  import "readline-sync" npm package before you do exercises

/**
 * Exercise 1
 *
 * ask user for a name and assign a response to variable {name}
 */
const chalk = require("chalk");
const readlineSync = require("readline-sync");

const logAnswer = message => console.log(chalk.blue(message));
const questionColor = message => chalk.yellow(message);

const name = readlineSync.question(questionColor("What is your name? "), {
  limit: input => input !== ""
});

// ===== DO NOT TOUCH THIS BLOCK =====
logAnswer(`Hi ${name}!`);
console.log("=====================");
console.log(`Let me do math for you!`);
console.log("=====================");
// ===================================

/**
 * Exercise 2
 *
 * offer user to do some math, ask to provide a math symbol and
 * offer a few options: +, -, * or /
 * Save response to {selectedSymbol} variable.
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get correct symbol
 */

const operators = ["+", "-", "/", "*"];

let selectedSymbol;

while (!operators.includes(selectedSymbol)) {
  selectedSymbol = readlineSync.question(
    questionColor(
      `Choose math operation from these ${operators.join(
        ", "
      )} what do you choose? `
    )
  );
}

logAnswer(`Ok, you chose ${selectedSymbol} `);
/**
 * Exercise 3
 *
 * ask user for the first number and assign response to a variable {number1}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */
const number1 = readlineSync.questionFloat(
  questionColor("Please choose first number: ")
);
logAnswer(`First number is ${number1}`);
/**
 * Exercise 4
 *
 * ask user for the second number and assign response to a variable {number2}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */
const number2 = readlineSync.questionFloat(
  questionColor("Please choose second number: ")
);
logAnswer(`Second number is ${number2}`);
/**
 * Exercise 5
 *
 * take numbers that user provided to you and do math based on user
 * selected symbol.
 *
 * show the result to the user
 */
const result = eval(`${number1} ${selectedSymbol} ${number2}`);
console.log("=====================");
logAnswer(questionColor(`Here you go, the result is ${result}`));
