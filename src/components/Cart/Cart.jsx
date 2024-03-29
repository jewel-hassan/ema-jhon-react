import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  let totalPrice = 0;

  let totalShipping = 0;

  let quantity = 0;

  for (const product of cart) {

    
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }

  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + tax + totalShipping;

  return (
    <div className="cart">
      <h4>Order summery</h4>
      <p>Selected Items:{quantity}</p>
      <p>Total Price:${totalPrice}</p>
      <p>Total Shipping:{totalShipping}</p>
      <p>Tax:${tax.toFixed(2)}</p>
      <h6>Grand Total:${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
