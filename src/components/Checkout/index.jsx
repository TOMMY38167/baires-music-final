import React, { useEffect, useState, useContext } from "react";
import images from "../../helpers/images";
import { toast } from "react-toastify";
import { Context } from "../../Context";
import { collection, addDoc } from "firebase/firestore";
import db from "../../helpers/firebase";
import "./style.css";

export default function Checkout({ instrumentos, categorias }) {
  let { carrito, setCarrito } = useContext(Context);
  let [instrumentosActuales, setInstrumentosActuales] = useState([]);
  let [cantidadInstrumentos, setCantidadInstrumentos] = useState(0);
  let [totalCompra, setTotalCompra] = useState(0);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const eliminarDelCarrito = (id) => {
    const arrayCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(arrayCarrito);
    parsearCarrito();
    toast("Producto eliminado del carrito exitosamente");
  };

  const confirmarCompra = async () => {
    if (carrito.length >0) {
      const docRef = await addDoc(collection(db, "orders"), {
        total: totalCompra,
      });
      setCarrito([]);
      setInstrumentosActuales([]);
      setCantidadInstrumentos(0);
      setTotalCompra(0);
      toast(
        `Felicidades, tu compra se ha realizado con exito! Nro. orden: ${docRef.id}`
      );
    } else {
      toast(
        `carrito vacio`
      );
    }
  };

  const parsearCarrito = () => {
    let arrayCarrito = [];
    let total = 0;
    let cantidadInstrumentos = 0;
    carrito.forEach((item) => {
      let instrumento = instrumentos.find(
        (instrumento) => instrumento.id === item.id
      );
      if (instrumento) {
        arrayCarrito.push({
          ...instrumento,
          cantidad: item.cantidad,
        });
        total += Number(instrumento.precio * item.cantidad);
        cantidadInstrumentos += item.cantidad;
      }
    });
    console.log(arrayCarrito);
    setInstrumentosActuales(arrayCarrito);
    setCantidadInstrumentos(cantidadInstrumentos);
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
