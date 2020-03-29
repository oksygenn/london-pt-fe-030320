// ============================================
// ALL IMPLEMENTATIONS SHOULD BE WITH {map} METHOD
// ============================================

/**
 * Exercise 1
 *
 * create an arrow function {convertToPositive} which takes
 * array of numbers, convert all negatives to positives and return
 * a new array.
 */
const convertToPositive = arrayOfNumbers => {
  const result = arrayOfNumbers.map(element => {
    return Math.abs(element);
  });
  return result;
};
/**
 * Exercise 2
 *
 * create an arrow function {getAllNames} which will take
 * an array of users(objects) as parameter and return an
 * array on names
 *
 * Ex: getAllNames([
 *   {name: 'Alex', age: 26},
 *   {name: 'John', age: 25}
 * ]) will return ['Alex', 'John']
 */
const getAllNames = arrayOfUsers => {
  const names = arrayOfUsers.map(element => {
    return element["name"];
  });
  return names;
};
/**
 * Exercise 3
 *
 * create a function {greetAll} that takes array of names as a parameter
 * and return a new array of greetings "Hi, {name}!"
 */
const greetAll = arrOfNames =>
  arrOfNames.map(name => {
    return `Hi, ${name}!`;
  });
/**
 * Exercise 4
 *
 * create a function {multiplyAllNumbers} that takes an array as a param
 * and multiply all numbers inside array by 5 and return the whole array
 * with multiplied numbers
 */

const multiplyAllNumbers = array =>
  array.map(element => {
    if (typeof element == "number") {
      return element * 5;
    }
    return element;
  });
