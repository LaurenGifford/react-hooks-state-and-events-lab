import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  function handleAddToCart() {
    const carted = inCart ? null : true
    setInCart(carted)
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
