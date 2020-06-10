import React from "react";
import Item from "./Item/Item";

const Store = (props) => {
  return (
    <div className="store">
      <h3>Store</h3>
      <ul>
        {props.stock.map((item) => (
          <Item key={item.id} item={item} addToCart={props.addToCart} />
        ))}
      </ul>
    </div>
  );
};

export default Store;
