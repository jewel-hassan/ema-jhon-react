import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";


const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addtoCarthandler = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Product product={product} handlerCart={addtoCarthandler} />
            </div>
          );
        })}
      </div>
      <div className="cart-container">
      <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
