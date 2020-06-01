import React from "react";
import "./App.css";
import createList from "./list";

const APP_TITLE = "Awesome Pet Shop";

/**
 * Exercise: 1
 *
 * 1. Create a list element and render all animals as list items.
 *
 * Exercise 2
 *
 * 1. Display the APP_TITLE in an h1
 * 2. Display today's date in a p
 */

const App = () => {
  const animals = ["cat", "dog", "giraffe", "pig", "lion", "rabbit"];

  return (
    <div className="app">
      <h1>{APP_TITLE}</h1>
      <p>{new Date().toLocaleDateString()}</p>
      {createList(animals)}
    </div>
  );
};

export default App;
