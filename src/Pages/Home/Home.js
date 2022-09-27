import React from "react";
import Footer from "../../Components/Footer/Footer";
import Food from "../../Components/Food/Food";
import "./home.css";
import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/svg/google.svg";
import AppleIcon from "../../assets/svg/apple.svg";
import Image1 from "../../assets/images/image1.png";
import Image2 from "../../assets/images/image2.png";
import Image3 from "../../assets/images/image3.png";
import Image4 from "../../assets/images/image4.png";
import Logo from "../../assets/svg/logo2.svg";

const Home = () => {
  return (
    <div className="home">
      <div className="nav">
        <div>
          <img src={Logo} alt="Logo" />
        </div>

        <div>
          <ul>
            <li>
              <Link to="/" style={{ color: "#FBDDBB" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" style={{ color: "#FFFFFF" }}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="unique">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="section1">
        <div>
          <h2>
            Order <span>food</span> anytime, anywhere
          </h2>
          <p>
            Browse from our list of specials to place your order and have food
            delivered to you in no time. Affordable, tasty and fast!
          </p>
          <div>
            <Link to={"/"}>
              <img
                src={GoogleIcon}
                alt="googleicon"
                style={{ marginRight: "10px" }}
                className="download"
              />
            </Link>
            <Link to={"/"}>
              <img src={AppleIcon} alt="appleicon" className="download" />
            </Link>
          </div>
        </div>

        <div className="image-container">
          <img src={Image1} alt="image1" />
        </div>
      </div>

      <div className="section2">
        <h3>Special Meals of the day!</h3>
        <p>
          Check our sepecials of the day and get discounts on all our meals and
          swift delivery to what ever location within Ilorin.
        </p>
      </div>

      <div className="section3">
        <Food
          imageName={Image2}
          altTitle={"image2"}
          foodName={"Stir fry Pasta"}
        />
        <Food imageName={Image3} altTitle={"image3"} foodName={"Meat Balls"} />
        <Food imageName={Image4} altTitle={"image4"} foodName={"Burger Meal"} />
      </div>

      <div className="section4">
        <div>
          <h3>Get notified when we update!</h3>
          <p>
            Get notified when we add new items to our specials menu, update our
            price list of have promos!
          </p>
        </div>

        <div>
          <form>
            <input
              type={"email"}
              name="email"
              placeholder="gregphillips@gmail.com"
            />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Get notified
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
