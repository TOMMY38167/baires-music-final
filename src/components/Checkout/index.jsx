import React, { useEffect, useState } from "react";
import images from "../../helpers/images";
import { toast } from "react-toastify";
import "./style.css";

export default function Checkout({ instrumentos, categorias }) {
  let [instrumentosActuales, setInstrumentosActuales] = useState([]);
  let [cantidadInstrumentos, setCantidadInstrumentos] = useState(0);
  let [totalCompra, setTotalCompra] = useState(0);
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const eliminarDelCarrito = (id) => {
    const carrito = localStorage.getItem("carrito") ?? "";
    let idsCarrito = carrito.split(",");
    const arrayCarrito = idsCarrito.filter((itemId) => itemId !== id);
    localStorage.setItem("carrito", arrayCarrito);
    parsearCarrito();
    toast("Producto eliminado del carrito exitosamente");
  };

  const confirmarCompra = () => {
    let carrito = localStorage.getItem("carrito") ?? "";
    if (carrito) {
      localStorage.removeItem("carrito");
      setInstrumentosActuales([]);
      setCantidadInstrumentos(0);
      setTotalCompra(0);
      toast("Felicidades, tu compra se ha realizado con exito");
    }
  };

  const parsearCarrito = () => {
    let carrito = localStorage.getItem("carrito") ?? "";
    let arrayCarrito = [];
    let total = 0;
    let idsCarrito = carrito.split(",");
    if (carrito !== "") {
      setCantidadInstrumentos(idsCarrito.length);
    } else {
      setCantidadInstrumentos(0);
    }
    idsCarrito.forEach((id) => {
      let exists = arrayCarrito.findIndex((item) => item.id === id.toString());
      if (exists >= 0) {
        console.log(exists);
        arrayCarrito[exists] = {
          ...arrayCarrito[exists],
          cantidad: arrayCarrito[exists].cantidad + 1,
        };
        total += Number(arrayCarrito[exists].precio);
      } else {
        let instrumento = instrumentos.find(
          (item) => item.id === id.toString()
        );
        if (instrumento) {
          arrayCarrito.push({
            ...instrumento,
            cantidad: 1,
          });
          total += Number(instrumento.precio);
        }
      }
    });
    console.log(arrayCarrito);
    setInstrumentosActuales(arrayCarrito);
    setTotalCompra(total);
  };

  useEffect(() => {
    parsearCarrito();
  }, []);
  return (
    <div className="container">
      <div className="checkoutContainer">
        <div className="title">
          <h1>Tu carrito ({cantidadInstrumentos})</h1>
          <hr />
        </div>
        {instrumentosActuales.map((instrumento) => {
          console.log(instrumento);
          return (
            <div className="itemCheckout">
              <div className="itemImagen">
                <img src={images[instrumento.imagen]} className="itemImg" />
              </div>
              <div className="itemDetalles">
                <p>{instrumento.nombre}</p>
                <p>{instrumento.detalles}</p>
                <p>Cantidad: {instrumento.cantidad}</p>
                <button onClick={() => eliminarDelCarrito(instrumento.id)}>
                  Eliminar
                </button>
              </div>
              <div className="itemPrecio">
                <p>
                  ${numberWithCommas(instrumento.precio * instrumento.cantidad)}
                </p>
              </div>
            </div>
          );
        })}
        <div className="total">
          <hr />
          <p>Total ${numberWithCommas(totalCompra)}</p>
          <button className="confirmar" onClick={() => confirmarCompra()}>
            Confirmar compra
          </button>
        </div>
      </div>
    </div>
  );
}
