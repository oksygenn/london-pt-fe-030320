const addCounterEl = document.querySelector("#new_timer");
const timersContainerEl = document.querySelector(".timers");

/**
 * Exercise 1
 *
 * create a function {createTimerEl} which takes a number
 * and creates a div which matches the HTML structure you can find
 * in the README
 *
 * NOTE: each timer should have additional class with unique number(as you
 * can see in example - timer_$)
 */
const createElementWithClass = (el, className) => {
  let newEl = document.createElement(el);
  newEl.className = className;
  return newEl;
};

const createTimerEl = (number) => {
  const container = createElementWithClass("div", `timer timer_${number}`);
  const crossToRemove = createElementWithClass("div", "remove");
  crossToRemove.addEventListener("click", () => {
    removeTimer(number);
  });
  container.appendChild(crossToRemove);

  const h3 = createElementWithClass("h3", "");
  const span = createElementWithClass("span", "");

  h3.appendChild(span);
  container.appendChild(h3);
  const divWithButtons = createElementWithClass("div", "btn");

  const resetBtn = createElementWithClass("button", "reset");
  resetBtn.innerText = "Reset";
  resetBtn.addEventListener("click", () => {
    resetTimer(number);
  });

  const stopBtn = createElementWithClass("button", "stop");

  stopBtn.innerText = "Stop";
  stopBtn.addEventListener("click", () => {
    stopTimer(number);
  });

  divWithButtons.append(resetBtn, stopBtn);
  container.appendChild(divWithButtons);

  return container;
};

// USE THIS VARIABLE TO COUNT TIMERS
let timersCount = 0;

const newTimer = addCounterEl.addEventListener("click", () => {
  if (timersCount === 5) {
    return;
  }
  const newTimerNumber = timersCount + 1;

  const timerContainer = createTimerEl(newTimerNumber);
  timersContainerEl.appendChild(timerContainer);
  containers[newTimerNumber] = timerContainer;

  timersCount += 1;

  resetTimer(newTimerNumber);
});

let intervalIds = [];
let times = [];
let containers = [];

const resetTimer = (number) => {
  stopTimer(number);
  times[number] = 0;
  intervalIds[number] = setInterval(() => {
    tickTimer(number);
  }, 10);
};

const tickTimer = (number) => {
  times[number] += 1;
  const time = times[number];

  const seconds = Math.floor(time / 100);
  const milliseconds = time % 100;
  const secondsDisplayed = containers[number].querySelector("h3");
  secondsDisplayed.innerHTML = `${seconds} <span>${milliseconds}</span>`;
};

const stopTimer = (number) => {
  clearInterval(intervalIds[number]);
};

const removeTimer = (number) => {
  stopTimer(number);
  let timerToRemove = containers[number];
  timerToRemove.remove();
};
