import NavBar from "./components/NavBar";
import ItemsListContainer from "./components/ItemsListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Checkout from "./components/Checkout";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import db from "./helpers/firebase";
import { collection, query, getDocs } from "firebase/firestore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [instrumentos, setInstrumentos] = useState([]);

  useEffect(() => {
    //Cargar instrumentos
    fetchData();
  }, []);

  const fetchData = async () => {
    const q = query(collection(db, "instrumentos"));
    const data = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let instrumento = {
        id: doc.id,
        ...doc.data(),
      };
      data.push(instrumento);
      console.log(doc.id, " => ", doc.data());
    });
    setInstrumentos(data);
  };

  const categorias = ["Guitarras", "Microfonos", "Pianos"];

  return (
    <div>
      <NavBar />
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          Component={(props) => (
            <ItemsListContainer
              instrumentos={instrumentos}
              categorias={categorias}
              {...props}
            />
          )}
        />
        <Route
          path="/category/:id"
          Component={(props) => (
            <ItemsListContainer
              instrumentos={instrumentos}
              categorias={categorias}
              {...props}
            />
          )}
        />
        <Route
          path="/item/:id"
          Component={(props) => (
            <ItemDetailContainer
              instrumentos={instrumentos}
              categorias={categorias}
              {...props}
            />
          )}
        />
        <Route
          path="/checkout/"
          Component={(props) => (
            <Checkout
              instrumentos={instrumentos}
              categorias={categorias}
              {...props}
            />
          )}
        />
      </Routes>
    </div>
  );
}

export default App;
