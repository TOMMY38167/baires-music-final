import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default function Dropdown() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <button className="dropdownBtn" onClick={handleOpen}>
        Instrumentos
      </button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <Link to={"/category/0"} onClick={() => setOpen(!open)}>
              Guitarras
            </Link>
          </li>
          <li className="menu-item">
            <Link to={"/category/1"} onClick={() => setOpen(!open)}>
              Microfonos
            </Link>
          </li>
          <li className="menu-item">
            <Link to={"/category/2"} onClick={() => setOpen(!open)}>
              Pianos
            </Link>
          </li>
        </ul>
      ) : null}
    </React.Fragment>
  );
}
