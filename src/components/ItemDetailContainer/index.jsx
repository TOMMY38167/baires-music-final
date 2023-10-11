import React, { useContext, useEffect, useState } from "react";
import imagenes from "../../helpers/images";
import { useParams } from "react-router-dom";
import "./index.css";
import { Context } from "../../Context";

export default function ItemDetailContainer({ instrumentos, categorias }) {
  let { id } = useParams();
  let { setOpenModalWithId } = useContext(Context);
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
          <img
            src={imagenes[instrumentoActual.imagen]}
            className="singleItemImg"
          />
          <div className="itemDetails">
            <p>{instrumentoActual.nombre}</p>
            <p>{categorias[instrumentoActual.categoria]}</p>
            <p>{instrumentoActual.detalles}</p>
            <p>{numberWithCommas(instrumentoActual.precio)}</p>
            <div
              className="button"
              onClick={() => setOpenModalWithId(instrumentoActual.id)}
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
