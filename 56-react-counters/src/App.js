import React from "react";
import "./App.css";
import Counter from "./Counter";
import { useState } from "react";
/**
 * 1. Create component Counter which will have:
 * - button with class {increment}
 * - button with class {decrement}
 * - h1 element which will represent state value
 * - state should hold {counter} value(default value = 0)
 * - with buttons you should be able to in/decrement {counter} value
 *
 * 2. In App component add button with class {newCounter}
 * 3. when you click {newCounter} you should add new counter to view
 *
 * NOTE: feel free to add some CSS to style your counters.
 */

function App() {
  const [counters, setCounters] = useState([]);
  const addNewCounter = () => setCounters([...counters, true]);

  return (
    <main>
      <div className="App">
        <button onClick={addNewCounter} className="newCounter">
          New Counter
        </button>
        <div className="counters">
          {counters.map(() => (
            <Counter />
          ))}
        </div>
      </div>
    </main>
  );
}
export default App;
