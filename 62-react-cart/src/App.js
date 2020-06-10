import React, { useState } from "react";
import "./App.css";

import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";
import Item from "./components/Store/Item/Item";

const initialStock = [
  {
    id: 1,
    name: "Butter",
    quantity: 20,
  },
  {
    id: 2,
    name: "Apples",
    quantity: 5,
  },
  {
    id: 3,
    name: "Salmon",
    quantity: 13,
  },
  {
    id: 4,
    name: "Soap",
    quantity: 2,
  },
];

const App = () => {
  const [stock, setStock] = useState([...initialStock]);
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    if (quantity < 1) return;
    const newItem = stock.find((el) => el.id === item.id);
    newItem.quantity = newItem.quantity - quantity;
    setStock([...stock]);

    const myItem = cart.find((el) => el.id === newItem.id);

    if (myItem) {
      myItem.quantity += quantity;
      setCart([...cart]);
    } else {
      const cartItem = { ...newItem };
      cartItem.quantity = quantity;
      setCart([...cart, cartItem]);
    }
  };

  const removeFromCart = (item) => {
    const newCart = cart.filter((el) => el.id !== item.id);
    setCart([...newCart]);

    let stockItem = stock.find((el) => el.id === item.id);
    stockItem.quantity += item.quantity;

    setStock([...stock]);
  };

  const updateCart = (item, quantity) => {
    const quantityToMoveToStore = item.quantity - quantity;
    item.quantity = quantity;

    let stockItem = stock.find((el) => el.id === item.id);

    stockItem.quantity += quantityToMoveToStore;
    setStock([...stock]);

    console.log(stockItem);
    console.log("Updated cart", item, quantity, stock);
  };

  return (
    <div className="app">
      <Store key="store" stock={stock} addToCart={addToCart} />
      <Cart
        key="cart"
        cart={cart}
        removeFromCart={removeFromCart}
        updateCart={updateCart}
      />
    </div>
  );
};

export default App;
