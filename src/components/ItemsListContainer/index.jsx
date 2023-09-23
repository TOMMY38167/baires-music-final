import React, { useEffect, useState } from "react";
import ListedItem from "../ListedItem";
import "./style.css";
import { useParams } from "react-router-dom";

export default function ItemsListContainer({ instrumentos, categorias }) {
  let { id } = useParams();
  let [instrumentosActuales, setInstrumentosActuales] = useState(instrumentos);

  useEffect(() => {
    if (id) {
      console.log(Number(id));
      const aux = instrumentos.filter(
        (instrumento) => instrumento.categoria === Number(id)
      );
      console.log(aux);
      setInstrumentosActuales(aux);
    }
  }, [id]);

  return (
    <div className="container">
      <p className="categoria">{id ? categorias[id] : "Instrumentos"}</p>
      <div className="listado">
        {instrumentosActuales.map((instrumento) => {
          return (
            <ListedItem instrumento={instrumento} categorias={categorias} />
          );
        })}
      </div>
    </div>
  );
}
