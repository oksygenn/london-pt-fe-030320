import React from "react";
import Item from "./Item/Item";

const Cart = (props) => {
  return (
    <div className="cart">
      <h3>Cart</h3>
      <ul>
        {props.cart.map((item) => (
          <Item
            key={item.id}
            item={item}
            removeFromCart={props.removeFromCart}
            updateCart={props.updateCart}
          />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
