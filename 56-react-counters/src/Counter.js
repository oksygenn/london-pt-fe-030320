import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const incr = () => setCount(count + 1);
  const decr = () => setCount(count - 1);

  return (
    <div className="counter">
      <h1 className="">{count}</h1>
      <div className="buttons">
        <button onClick={incr} className="increment button">
          +
        </button>
        <button onClick={decr} className="decrement button">
          -
        </button>
      </div>
    </div>
  );
}
export default Counter;
