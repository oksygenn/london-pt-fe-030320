import React, { useState, useEffect } from "react";

const Item = (props) => {
  const [quantity, setQuantity] = useState(0);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(props.item.quantity < 1);
  }, [props.item.quantity]);

  const handleChange = (e) => setQuantity(parseInt(e.target.value));
  const handleClick = () => {
    props.addToCart(props.item, quantity);
    setQuantity(0);
  };

  return (
    <>
      <li className="item">
        <span>{props.item.name}</span>
        <input
          disabled={disabled}
          type="number"
          value={quantity}
          onChange={handleChange}
          min="0"
          max={props.item.quantity}
        />
        <button disabled={disabled} onClick={handleClick}>
          Add to cart
        </button>
        {disabled ? <label className="label">Out of stock</label> : ""}
      </li>
    </>
  );
};

export default Item;
