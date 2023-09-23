import React from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import "./style.css";

export default function CartWidget() {
  return (
    <div className="carrito">
      <Link to="/checkout">
        <FontAwesomeIcon icon={faCartShopping} />
      </Link>
    </div>
  );
}
