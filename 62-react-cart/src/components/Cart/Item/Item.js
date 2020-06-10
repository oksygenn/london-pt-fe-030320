import React, { useState, useEffect } from "react";

const Item = (props) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(props.item.quantity);
  }, [props.item.quantity]);

  const handleChange = (e) => setQuantity(parseInt(e.target.value));

  const handleRemove = () => {
    props.removeFromCart(props.item, quantity);
  };

  const handleUpdate = () => {
    props.updateCart(props.item, quantity);
  };

  return (
    <>
      <li>
        <span>{props.item.name}</span>
        <input
          type="number"
          value={quantity}
          onChange={handleChange}
          min="0"
          max={props.item.quantity}
        />
        <button className="update" onClick={handleUpdate}>
          update
        </button>
        <button onClick={handleRemove} className="delete">
          remove
        </button>
      </li>
    </>
  );
};

export default Item;
