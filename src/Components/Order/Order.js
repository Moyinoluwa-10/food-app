import React from "react";
import "./order.css";
import Image from "../assets/images/image5.png";

const Order = () => {
  return (
    <div className="order">
      <div className="order-container">
        <div>
          <h2>Your Orders</h2>
        </div>

        <div className="order-box">
          <div>
            <p className="normal column1" style={{ color: "red" }}>
              Item
            </p>
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

        <div className="order-box">
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

        <div className="order-box">
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

        <div className="order-box">
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
      </div>
    </div>
  );
};

export default Order;
