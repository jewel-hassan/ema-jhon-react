import React from "react";
import "./Product.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const Product = (props) => {
  const { img, name, seller, quantity, price, ratings } = props.product;
  const handlerCart = props.handlerCart;

  
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="products-name">{name}</h6>
        <p>Price:${price}</p>
        <p>Manufacture:{seller}</p>
        <p>Ratings:{ratings}Star</p>
      </div>
      <button onClick={()=> handlerCart(props.product)} className="btn-cart">Add to Cart<FontAwesomeIcon icon={faShoppingCart} /></button>
    </div>
  );
};

export default Product;
