let step = 0;
let counter = 0;

/**
 * Exercise 1
 *
 * create a function {action} which will take a {symbol} param: "+" or "-".
 * increment {counter} by {step} if you pass "+", or
 * decrement {counter} by {step} if you pass "-"
 *
 * NOTE: ".counter_value" should always represent the current value of {counter}
 */

const action = (symbol) => {
  const counterValue = document.querySelector(".counter_value");
  if (symbol === "+") {
    counter += step;
  } else if (symbol === "-") {
    counter -= step;
  }
  counterValue.innerText = counter;
};
/**
 * Exercise 2
 *
 * When the user clicks on "Set step" button, you need to:
 * 1. set {step} to the current value of input.
 * 2. reset value of input field to 1
 * 3. update value of ".step_value" to value of {step}
 *
 * NOTE: {step} should be an integer
 *
 */
const setStep = () => {
  const form = document.querySelector(".step_form");
  const input = form.querySelector("input");
  const stepValue = document.querySelector(".step_value");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    step = parseInt(input.value);
    stepValue.innerText = step;
    input.value = 1;
  });
};
setStep();
/**
 * Exercise 3
 *
 * handle click on "#decrement" button and
 * decrement counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
const decrement = () => {
  const decrementBtn = document.querySelector("#decrement");
  decrementBtn.addEventListener("click", () => {
    action("-");
  });
};
decrement();
/**
 * Exercise 4
 *
 * handle click on "#increment" button and
 * increment counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
const increment = () => {
  const incrementBtn = document.querySelector("#increment");
  incrementBtn.addEventListener("click", () => {
    action("+");
  });
};
increment();
/**
 * Exercise 5
 *
 * when the user clicks on "#auto_decrement",
 * {counter} should be decremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */
let timerHandle = 0;
const stopInterval = () => clearInterval(timerHandle);

const autoDecrement = () => {
  const autoDecrementButton = document.querySelector("#auto_decrement");
  autoDecrementButton.addEventListener("click", () => {
    stopInterval();
    timerHandle = setInterval(() => {
      action("-");
    }, 1000);
  });
};
autoDecrement();
/**
 * Exercise 6
 *
 * when the user clicks on "#auto_increment",
 * {counter} should be incremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */
const autoIncrement = () => {
  const autoIncrementButton = document.querySelector("#auto_increment");
  autoIncrementButton.addEventListener("click", () => {
    stopInterval();
    timerHandle = setInterval(() => {
      action("+");
    }, 1000);
  });
};
autoIncrement();
/**
 * Exercise 7
 *
 * when the user clicks on "#stop_auto",
 * the auto counter should stop
 */
const stopAuto = document.querySelector("#stop_auto");
stopAuto.addEventListener("click", () => {
  stopInterval();
});
