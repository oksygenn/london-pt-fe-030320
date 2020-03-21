/**
 * create an array "carBrands"
 * and assign to it ["Mercedes", "Volvo", "BMW", "Reno", "Vauxhall"]
 */
const carBrands = ["Mercedes", "Volvo", "BMW", "Citroen", "Vauxhall", "Reno"];
console.log(carBrands);
/**
 * Exercise 1
 *
 * remove the last element from the carBrands array
 *
 * * PS: console.log() the result to see the difference
 */
carBrands.pop();
console.log(carBrands);
/**
 * Exercise 2
 *
 * remove the first element from the carBrands array
 *
 * * PS: console.log() the result to see the difference
 */
carBrands.shift();
console.log(carBrands);
/**
 * Exercise 3
 *
 * from "carBrands" remove "Vauxhall"
 *
 * * PS: console.log() the result to see the difference
 */
const vauxhallIndex = carBrands.indexOf("Vauxhall");
carBrands.splice(vauxhallIndex, 1);
console.log(vauxhallIndex, carBrands);

/**
 * Exercise 4
 *
 * in "carBrands" replace Citroen with Rolls-Royce
 *
 * * PS: console.log() the result to see the difference
 */
const citroenIndex = carBrands.indexOf("Citroen");
carBrands.splice(citroenIndex, 1, "Rolls-Royce");
console.log(citroenIndex, carBrands);