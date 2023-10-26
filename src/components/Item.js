import React, { useState } from "react";

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
