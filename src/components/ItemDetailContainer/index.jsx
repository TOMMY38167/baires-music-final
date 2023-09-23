import React, { useEffect, useState } from "react";
import placeholderImage from "../../img/placeholder.webp";
import { useParams } from "react-router-dom";
import { agregarCarrito } from "../../helpers/carrito";
import "./index.css";

export default function ItemDetailContainer({ instrumentos, categorias }) {
  let { id } = useParams();
  let [instrumentoActual, setInstrumentoActual] = useState();
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  useEffect(() => {
    if (id) {
      const aux = instrumentos.find((instrumento) => instrumento.id === id);
      setInstrumentoActual(aux);
    }
  }, [id]);

  const renderItemCard = () => {
    if (instrumentoActual) {
      return (
        <div className="itemCard">
          <img src={placeholderImage} className="singleItemImg" />
          <div className="itemDetails">
            <p>{instrumentoActual.nombre}</p>
            <p>{categorias[instrumentoActual.categoria]}</p>
            <p>{instrumentoActual.detalles}</p>
            <p>{numberWithCommas(instrumentoActual.precio)}</p>
            <div
              className="button"
              onClick={() => agregarCarrito(instrumentoActual.id)}
            >
              <p>Agregar al carrito</p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div className="categoriaTitulo">
        <p>{instrumentoActual && categorias[instrumentoActual.categoria]}</p>
      </div>
      {renderItemCard()}
    </div>
  );
}
