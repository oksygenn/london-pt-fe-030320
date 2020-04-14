const productsContainer = document.querySelector("#products");
const remaining = document.querySelector("#remaining > span");
const cart = document.querySelector("#cart");

const createProductDiv = (product) => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = product.img;

  const h3 = document.createElement("h3");
  h3.innerText = product.name;

  const p = document.createElement("p");
  p.innerText = product.price;

  const select = document.createElement("select");
  select.addEventListener("input", () => {
    const selectedQuantity = select.value;
    const index = products.indexOf(product);
    quantities[index] = selectedQuantity;

    const remainingBudget = calcRemainingBudget();
    if (remainingBudget < 0) {
      showNoBudgetAlert();
      select.value = 0;
      quantities[index] = 0;
    }

    updateBudget();
  });

  for (
    let optionValue = 0;
    optionValue <= product.max_quantity;
    optionValue++
  ) {
    const option = document.createElement("option");
    option.innerText = optionValue;
    select.appendChild(option);
  }

  div.append(img, h3, p, select);

  return div;
};

for (product of products) {
  const productDiv = createProductDiv(product);
  productsContainer.appendChild(productDiv);
}

let quantities = [];
const budget = 50;

const calcRemainingBudget = () => {
  let costOfAllItems = 0;
  for (const index in products) {
    const price = products[index].price;
    const qty = quantities[index] || 0;
    costOfAllItems += price * qty;
  }
  const remainingBudget = budget - costOfAllItems;
  return remainingBudget;
};

const updateBudget = () => {
  const remainingBudget = calcRemainingBudget();
  remaining.innerHTML = `£${remainingBudget.toFixed(2)}`;
};

const showNoBudgetAlert = () => {
  const error = document.createElement("div");
  error.className = "error";
  error.innerText = "Not enough money left for that!";
  cart.appendChild(error);
  setTimeout(() => {
    error.remove();
  }, 3000);
};
