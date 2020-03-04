const target = 15;
const userValue = "15";

const password = "JSisKool888";
const passwordConfirmation = "JSisCool888";

const sortOrder = "ALPHABETICAL";

// ADD YOUR CODE BELOW
const targetMatchesCoercedUserValue = target == userValue;
const targetMatchesUserValue = target === userValue;
const passwordMatchesConfirmation = password === passwordConfirmation;
let passwordMessage;
if(password !== passwordConfirmation) {
    passwordMessage = 'Oops, your password and confirmation do not match!';
};
let fruits;
if(sortOrder == "ALPHABETICAL") {
 fruits = 'banana, cherry, watermelon';
};

