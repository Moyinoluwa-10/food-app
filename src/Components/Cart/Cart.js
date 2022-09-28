import React from "react";
import "./cart.css";
import Image from "../../assets/images/image5.png";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-container">
        <div>
          <h2>Your Cart</h2>
        </div>

        <div className="cart-box">
          <div>
            <p className="normal column1">Item</p>
          </div>
          <div>
            <p className="normal">Qty</p>
          </div>
          <div>
            <p className="normal">Price</p>
          </div>
          <div>
            <p className="normal">Status</p>
          </div>
        </div>

        <div className="cart-box">
          <div className="column1">
            <div className="image-container">
              <img src={Image} alt="Imageggh" />
            </div>
            <div className="box1">
              <h3>Stir Fry Pasta</h3>
              <p className="remove">Remove</p>
            </div>
          </div>
          <div>
            <p className="amount">3</p>
          </div>
          <div>
            <p className="price">N 1,000.00</p>
          </div>
          <div>
            <p className="status">Delivered</p>
          </div>
        </div>

        <div className="cart-box">
          <div className="column1">
            <div className="image-container">
              <img src={Image} alt="Imageggh" />
            </div>
            <div className="box1">
              <h3>Stir Fry Pasta</h3>
              <p className="remove">Remove</p>
            </div>
          </div>
          <div>
            <p className="amount">3</p>
          </div>
          <div>
            <p className="price">N 1,000.00</p>
          </div>
          <div>
            <p className="status">Delivered</p>
          </div>
        </div>

        <div className="cart-box">
          <div className="column1">
            <div className="image-container">
              <img src={Image} alt="Imageggh" />
            </div>
            <div className="box1">
              <h3>Stir Fry Pasta</h3>
              <p className="remove">Remove</p>
            </div>
          </div>
          <div>
            <p className="amount">3</p>
          </div>
          <div>
            <p className="price">N 1,000.00</p>
          </div>
          <div>
            <p className="status">Delivered</p>
          </div>
        </div>

        <div className="total">
          <div>
            <p className="normall">Total</p>
          </div>
          <div>
            <p className="price">N 30,000.00</p>
          </div>
        </div>

        <div>
          <button type="submit">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
