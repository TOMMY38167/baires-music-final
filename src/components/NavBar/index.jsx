import React from "react";
import CartWidget from "../CartWidget";
import { ReactComponent as ReactLogo } from "../../img/Bairesvector.svg";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "../Dropdown";
import "./style.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="colorNav">
      <Link to="/">
        <ReactLogo />
      </Link>
      <ul className="navList">
        <div className="dropdown">
          <Dropdown />
        </div>
      </ul>
      <div className="carrito">
        <CartWidget />
      </div>
    </div>
  );
}
