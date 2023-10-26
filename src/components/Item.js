
import React, { useState } from "react";


function Item({ name, category }) {
  return (
    <li className="in-cart">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}

function Item() {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(true);
  };

  return (
    <div>
      <li className={inCart ? "in-cart" : ""}>Item Name</li>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
export default Item;
