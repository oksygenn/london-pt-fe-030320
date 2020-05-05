const ingredients = [
  { name: "carrot", time: 500 },
  { name: "potato", time: 1000 },
  { name: "onion", time: 250 },
  { name: "celery", time: 150 },
  { name: "tomato", time: 100 },
];

/**
 * Exercise 1
 *
 * create a function {asyncCookIngredient} which takes 1 argument:
 *
 * an {ingredient} object (like the objects in the array on line 1)
 * with 2 keys: name and time.
 *
 * Return a promise which gets resolved after the time has elapsed.
 *
 * The value used to resolve the promise should be the original
 * {ingredient} object
 *
 */
const asyncCookIngredient = async (ingredient) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ingredient);
    }, ingredient.time);
  });
};

/**
 * Exercise 2
 *
 * create a function {asyncCookMeal} which will receive an
 * array of {ingredientsToCook} and call {asyncCookIngredient} for
 * each ingredient
 *
 * Return a promise which gets resolved after all of the
 * ingredients are cooked
 *
 * The value used to resolve the promise should be and object
 * containing an array of {ingredientNames} and the {totalTime}:
 *
 * {
 *  ingredientNames: ["carrot", "onion"],
 *  totalTime: 750
 * }
 *
 */

const asyncCookMeal = async (ingredientsToCook) => {
  const totalTime = ingredientsToCook.reduce(
    (acc, ingredient) => acc + ingredient.time,
    0
  );

  const ingredientNames = ingredientsToCook.map(
    (ingredient) => ingredient.name
  );

  const result = { ingredientNames: ingredientNames, totalTime: totalTime };

  await Promise.all(
    ingredientsToCook.map((ingredient) => asyncCookIngredient(ingredient))
  );
  return Promise.resolve(result);
};

// second version:

// const asyncCookMeal = async (ingredientsToCook) => {
//   let totalTime = 0;
//   let ingredientNames = [];

//   for (let ingredient of ingredientsToCook) {
//     ingredientNames.push(ingredient.name);
//     totalTime = totalTime + ingredient.time;
//   }

//   const result = { ingredientNames: ingredientNames, totalTime: totalTime };

//   await Promise.all(
//     ingredientsToCook.map((ingredient) => asyncCookIngredient(ingredient))
//   );
//   return Promise.resolve(result);
// };

// first version:

// const asyncCookMeal = async (ingredientsToCook) => {
//   let totalTime = 0;
//   let ingredientNames = [];

//   return Promise.all(
//     ingredientsToCook.map((ingredient) => asyncCookIngredient(ingredient))
//   ).then(() => {
//     return new Promise((resolve) => {
//       for (let ingredient of ingredientsToCook) {
//         asyncCookIngredient(ingredient);
//         ingredientNames.push(ingredient.name);
//         totalTime = totalTime + ingredient.time;
//       }
//       resolve({ ingredientNames: ingredientNames, totalTime: totalTime });
//     });
//   });
// };
