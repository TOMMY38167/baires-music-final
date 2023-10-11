import React, { useContext } from "react";
import imagenes from "../../helpers/images";
import "./index.css";
import { Link } from "react-router-dom";
import { agregarCarrito } from "../../helpers/carrito";
import { Context } from "../../Context";

export default function ListedItem({ instrumento, categorias }) {
  let { openModalWithId, setOpenModalWithId } = useContext(Context);
  const numberWithCommas = (precio) => {
    return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  return (
    <div className="card">
      <img src={imagenes[instrumento.imagen]} className="itemImg" />
      <h2>{instrumento.nombre}</h2>
      <h2>{categorias[instrumento.categoria]}</h2>
      <h2>{instrumento.resumen}</h2>
      <h2>${numberWithCommas(instrumento.precio)}</h2>
      <div className="cardButtons">
        <div className="button">
          <Link to={`/item/${instrumento.id}`}>Ver mas</Link>
        </div>
        <div className="button" onClick={() => setOpenModalWithId(instrumento.id)}>
          <p>Agregar al carrito</p>
        </div>
      </div>
    </div>
  );
}
