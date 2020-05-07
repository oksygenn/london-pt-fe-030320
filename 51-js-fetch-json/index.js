const button = document.querySelector("button");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// ================================

// URL: https://cat-fact.herokuapp.com/facts

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve` in this directory

/**
 * Exercise 1
 *
 * create a function {fetchData} which takes
 * a URL as an argument and sends a GET request.
 * When you get a response, return an array of facts.
 */

/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. click on a button "Get random facts"
 * 2. view 3 random facts in ".result" element
 */

const fetchData = async () => {
  const json = await fetch(
    "https://cat-fact.herokuapp.com/facts"
  ).then((response) => response.json());
  return json.all;
};

const nodeFact = (randomFact) => {
  const li = document.createElement("li");
  const text = document.createElement("p");
  text.className = "text";
  text.innerText = randomFact.text;
  const author = document.createElement("p");
  author.className = "author";
  const fullName = `${randomFact.user.name.first} ${randomFact.user.name.last}`;
  author.innerText = fullName;
  li.append(text, author);
  return li;
};

const main = () => {
  button.addEventListener("click", async () => {
    const facts = await fetchData();

    result.innerHTML = "";

    for (let i = 0; i < 3; i++) {
      const randomFact = facts[Math.floor(Math.random() * facts.length)];
      const li = nodeFact(randomFact);
      result.appendChild(li);
    }
  });
};

main();
