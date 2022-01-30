import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";

function App() {
  const [busqueda, guardarBusqueda] = useState("");
  const [imagenes,guardarImagenes] = useState([]);

  useEffect(() => {
      const consultarApi = async () => {
        if (busqueda === "") return;
        const imagenesPorPagina = 10;
        const key = '25423740-9c00ad4b29bae6a57416f9373';
        const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
 
        guardarImagenes(resultado.hits);

        console.log("HOLAAA",resultado.tags);
      };
      consultarApi();
    }, [busqueda])

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador De Imagenes</p>
        <Formulario guardarBusqueda={guardarBusqueda} />
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagenes}/>
      </div>
    </div>
  );
}

export default App;
