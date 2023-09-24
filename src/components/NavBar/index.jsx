import React from "react";
import CartWidget from "../CartWidget";
import { ReactComponent as ReactLogo } from "../../img/Bairesvector.svg";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { Link } from "react-router-dom";
import classNames from "classnames";

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const gridMenuClass = classNames("gridMenu", {
    abrirMenu: open,
  });

  return (
    <div className="colorNav">
      <div className="itemsNav">
        <div className="logo">
          <Link to="/">
            <ReactLogo />
          </Link>
        </div>
        <div className="dropdown">
          <button className="dropdownBtn" onClick={handleOpen}>
            Instrumentos
          </button>
        </div>
        <div className="carrito">
          <CartWidget />
        </div>
      </div>
      <div className={gridMenuClass}>
        <ul className="menu">
          <Link to={"/category/0"} onClick={() => setOpen(!open)}>
            <li className="menu-item">
              <p className="puntito">❖</p>
              <p>Guitarras</p>
            </li>
          </Link>
          <Link to={"/category/1"} onClick={() => setOpen(!open)}>
            <li className="menu-item">
              <p className="puntito">❖</p>
              <p>Microfonos</p>
            </li>
          </Link>
          <Link to={"/category/2"} onClick={() => setOpen(!open)}>
            <li className="menu-item">
              <p className="puntito">❖</p>
              <p>Pianos</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
