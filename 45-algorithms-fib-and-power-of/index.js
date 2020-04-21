/**
 * Exercise 1
 *
 * create a function {generateFibonacci} which will take a parameter
 * that represents a length of an array that needs to be generated
 *
 * The array must be a Fibonacci sequence:
 *
 * The next number is found by adding up the two numbers before it,
 * always starting with 0 and 1.
 *
 * Ex: generateFibonacci(5) // return [0, 1, 1, 2, 3];
 */

const generateFibonacci = (lengthOfAnArray) => {
  if (lengthOfAnArray === 1) {
    return [0];
  }
  if (lengthOfAnArray === 2) {
    return [0, 1];
  }
  let result = [0, 1];
  for (let index = 2; index < lengthOfAnArray; index++) {
    result[index] = result[index - 1] + result[index - 2];
  }
  return result;
};
console.log(generateFibonacci(88));
/**
 * Exercise 2
 *
 * create a function {isPowerOf} which takes 2 arguments:
 *
 * number – a number
 * primeNumber – a number (a prime number)
 *
 * return a Boolean if your number is a power of primeNumber
 *
 * Ex: isPowerOf(27, 3) // return true;
 */
const isPowerOf = (number, primeNumber) => {
  let result = primeNumber;
  while (result < number) {
    result *= primeNumber;
  }
  return number === result;
};
