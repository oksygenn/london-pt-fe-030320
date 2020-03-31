// install and  import "readline-sync" npm package before you do exercises
const readlineSync = require("readline-sync");
const chalk = require("chalk");

const color = text => chalk.blueBright(text);
const questionColor = text => chalk.greenBright(text);

const user = {};
/**
 * Exercise 1
 *
 * ask user for a first name and save response to {user.firstName}
 */
user.firstName = readlineSync.question(
  questionColor("What is your first name? "),
  {
    limit: input => input !== ""
  }
);
/**
 * Exercise 2
 *
 * ask user for a last name and save response to {user.lastName}
 */
user.lastName = readlineSync.question(
  questionColor("What is your last name? "),
  { limit: input => input !== "" }
);
console.log(color(`Hello ${user.firstName} ${user.lastName}!`));

/*
 * Exercise 3
 *
 * ask user for a age and save response to {user.age}
 */
user.age = readlineSync.questionFloat(questionColor("How old are you? "));
/*
 * Exercise 4
 *
 * ask user for a email and save response to {user.email}
 */
user.email = readlineSync.questionEMail(
  questionColor("Please type your email: ")
);
/**
 * OPTIONAL:
 *
 * use "chalk" to print out user data with colours :)
 */

console.log(
  color(
    `Here what we have, your full name is ${user.firstName} ${user.lastName}. 
    You are ${user.age} and if we need to contact with you we can send 
    a letter to ${user.email} `
  )
);
