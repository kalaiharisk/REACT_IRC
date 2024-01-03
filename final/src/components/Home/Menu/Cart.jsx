// Cart.js

import React, { useState } from 'react';
import "./Cart.scss"; // Import your cart styles here
import { popular } from '../../../data';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <div className='cart'>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.title} />
              <div className="item-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="price">${item.price}</span>
                <button onClick={() => removeFromCart(item.id)}>
                  Remove From Cart
                </button>
              </div>
            </div>
          ))}
          <div className="total">
            <p>Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
