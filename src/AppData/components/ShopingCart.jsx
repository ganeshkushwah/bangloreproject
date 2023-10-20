// ShoppingCart.js
import React from "react";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  // Access cartItems from the store correctly
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.productName} - Color: {item.color}, Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
