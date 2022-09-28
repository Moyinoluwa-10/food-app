import React from "react";
import "./sidebar.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHome,
  faNoteSticky,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/svg/logo.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="image-container">
        <img src={Logo} alt="logo" />
      </div>

      <div className="">
        <ul>
          <li>
            <NavLink exact activeClassName="active" to={"./"}>
              <FontAwesomeIcon icon={faHome} className="icon" /> Dashboard
            </NavLink>
          </li>
          <li>
            <Link exact to={"./"}>
              <FontAwesomeIcon icon={faUser} className="icon" /> Your Profile
            </Link>
          </li>
          <li>
            <NavLink exact activeClassName="active" to={"./order"}>
              <FontAwesomeIcon icon={faNoteSticky} className="icon" /> Orders
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to={"./cart"}>
              <FontAwesomeIcon icon={faCartShopping} className="icon" /> Your
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
