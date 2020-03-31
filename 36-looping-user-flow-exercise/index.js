// install and  import "readline-sync" npm package before you do exercises
const readlineSync = require("readline-sync");
const chalk = require("chalk");
const questionColor = message => chalk.cyanBright.bold(message);
const answerColor = message => chalk.magentaBright.bold(message);

let selectedItems = {
  book: "",
  movie: "",
  nextTrip: ""
};

const movies = [
  "The Invisible Man",
  "Never Rarely Sometimes Always",
  "Gretel & Hansel",
  "No time to die",
  "Bloodshot",
  "Onward",
  "Sonic"
];

const books = [
  "My Dark Vanessa",
  "Uncanny Valley",
  "Weather",
  "The night watchman",
  "All adults here",
  "Dear Edward",
  "Grown ups"
];

const countries = [
  "Italy",
  "France",
  "Germany",
  "Spain",
  "Portugal",
  "Denmark",
  "Netherland"
];

/**
 * Exercise 1
 *
 * create a sub menu "Books" where you need to render a list of {books}.
 * User should be able to select one. On selection store the response
 * to {user.book}.
 *
 * NOTE: You need to add option to go back, to main menu
 */
const chooseBook = () => {
  const selectedIndex = readlineSync.keyInSelect(
    books,
    questionColor("Which book would you like to read?"),
    {
      cancel: "Go back"
    }
  );
  if (selectedIndex !== -1) {
    selectedItems.book = books[selectedIndex];
  }
};

/**
 * Exercise 2
 *
 * create a sub menu "Movies" where you need to render a list of {movies}.
 * User should be able to select one. On selection store the response
 * to {user.movie}.
 *
 * NOTE: You need to add option to "go back", to main menu
 */
const chooseMovie = () => {
  const selectedIndex = readlineSync.keyInSelect(
    movies,
    questionColor("Which movie would you like to watch?"),
    {
      cancel: "Go back"
    }
  );
  if (selectedIndex !== -1) {
    selectedItems.movie = movies[selectedIndex];
  }
};
/**
 * Exercise 3
 *
 * create a sub menu "Next destination" where you need to render a list
 * of {countries}. User should be able to select one. On selection store
 * the response to {user.nextTrip}.
 *
 * NOTE: You need to add option to go back, to main menu
 */
const chooseNextTrip = () => {
  const selectedIndex = readlineSync.keyInSelect(
    countries,
    questionColor("Which country would you like to visit?"),
    {
      cancel: "Go back"
    }
  );
  if (selectedIndex !== -1) {
    selectedItems.nextTrip = countries[selectedIndex];
  }
};
/**
 * Exercise 4
 *
 * create a top menu with categories: "Books", "Movies", "Next destination"
 * so user can pick one. User also should have the option "Exit".
 * When the user pick "Exit", log selected items.
 */

let shouldLoopMenu = true;

while (shouldLoopMenu) {
  const menuSelected = readlineSync.keyInSelect(
    ["Books", "Movies", "Next Destination"],
    questionColor("Please pick a category: "),
    {
      cancel: "Exit"
    }
  );
  switch (menuSelected) {
    case 0:
      chooseBook();
      break;
    case 1:
      chooseMovie();
      break;
    case 2:
      chooseNextTrip();
      break;
    default:
      console.log(
        answerColor(
          `
        Here's your 
        next book 📖 ${selectedItems.book}, 
        next movie 🍿 ${selectedItems.movie}, 
        next trip 🛩  to ${selectedItems.nextTrip}!
        `
        )
      );
      shouldLoopMenu = false;
  }
}
