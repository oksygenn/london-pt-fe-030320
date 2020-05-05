const ingredients = [
  { name: "carrot", time: 500 },
  { name: "potato", time: 1000 },
  { name: "onion", time: 250 },
  { name: "celery", time: 150 },
  { name: "tomato", time: 100 },
];

const syncCookIngredient = ({ name, time }) => {
  const start = Date.now();
  console.log(`Start cooking ${name}`);
  while (start + time > Date.now()) {}

  console.log(`${name} cooked!`);
};

/**
 * Exercise 1
 *
 * create a function {syncCookMeal} which will receive an
 * array of {ingredientsToCook}, (similar to th
 * e array
 * defined on line 1) and call {syncCookIngredient}
 * for each ingredient in the array
 *
 * After all the ingredients are cooked,
 * log the message "Soup is ready to serve"
 */

const syncCookMeal = (ingredients) => {
  for (let ingredient of ingredients) {
    syncCookIngredient(ingredient);
  }
  console.log("Soup is ready to serve");
};
/**
 * Exercise 2
 *
 * create a function {asyncCookIngredient} which takes 1 argument:
 *
 * an {ingredient} object (like the objects in the array on line 1)
 * with 2 keys: name and time.
 *
 * Log out the message "Start cooking INGREDIENT_NAME"
 * then after the cooking time has elapsed,
 * log out "INGREDIENT_NAME cooked!". Both times displaying
 * the name of the ingredient.
 *
 */

const asyncCookIngredient = ({ name, time }) => {
  console.log(`Start cooking ${name}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} cooked!`);
      resolve();
    }, time);
  });
};

/**
 * Exercise 3
 *
 * create a function {asyncCookMeal} which will which will receive an
 * array of {ingredientsToCook} and call {asyncCookIngredient} for
 * each ingredient
 *
 * After all the ingredients are cooked,
 * log the message "Soup is ready to serve"
 */

const asyncCookMeal = async (ingredientsToCook) => {
  return Promise.all(
    ingredientsToCook.map((ingredient) => asyncCookIngredient(ingredient))
  ).then(() => console.log("Soup is ready to serve"));
};

// asyncCookMeal(ingredients);
