/* ===================================== */
/* For these exercises use "for of" loop */
/* ===================================== */

/**
 * Exercise 1
 *
 * create a function {getIntegersOnly} which takes an array
 * as a param, get all integers from this array and return
 * a new array with these integers. If there is no integers it should return
 * empty array.
 */

function getIntegersOnly(array) {
    let newArray = []
    for(const item of array) {
        if(Number.isInteger(item)) {
            newArray.push(item);
        }
    }
    return newArray;
}

/**
 * Exercise 2
 * create a function {getEvenNumbers}, which takes an array of integers
 * and returns a new array with even numbers only, if there is no even
 * integers it should return an empty array
 */
function getEvenNumbers(integers) {
    let myNewArray = [];
    for(const element of integers) {
        if(element !== 0 && element % 2 === 0) {
            myNewArray.push(element)
        }
    }
    return myNewArray;
}
/**
 * Exercise 3
 *
 * create a function {getEvenNumbersFromMixedArray},
 * which takes an array of values with different types and returns
 * a new array with even numbers only, if there is no even integers it
 * should return an empty array
 */
function getEvenNumbersFromMixedArray(numbers) {
    let evenNumbersArray = [];
    for(const element of numbers) {
        if(Number.isInteger(element) && element !== 0 && element % 2 === 0) {
            evenNumbersArray.push(element)
        }
    }
    return evenNumbersArray;
}
/**
 * Exercise 4
 * create a function {getOddNumbers}, which takes an array of integers
 * and returns a new array with odd numbers only, if there is no odd
 * integers it should return an empty array
 */
function getOddNumbers(integer) {
    let oddNumbersArray = [];
    for(const item of integer) {
        if(item !== 0 && item % 2 === 1) {
            oddNumbersArray.push(item)
        }
    }
    return oddNumbersArray;
}
/**
 * Exercise 5
 * create a function {evenOddTransform} which takes
 * array of integers as a param. Take each integer
 * and if it's odd add 1, if it's even subtract 1
 *
 * If your param is [1,2,3,4,5] the result should be
 * [2,1,4,3,6]
 */
function evenOddTransform(items) {
    let result = [];
    for (let element of items) {
        if(element !== 0 && element % 2 === 0) {
           element -= 1;
        }
        else if(element !== 0 && element % 2 === 1) {
            element += 1;
        }
        result.push(element);
    } 
    return result;
}