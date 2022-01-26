import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";

function App() {
  const [busqueda, guardarBusqueda] = useState("");

  useEffect(() => {
      const consultarApi = async () => {
        if (busqueda === "") return;
        const imagenesPorPagina = 10;
        const key = '25423740-9c00ad4b29bae6a57416f9373';
        const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        console.log(resultado);
      };
      consultarApi();
    }, [busqueda])

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador De Imagenes</p>
        <Formulario guardarBusqueda={guardarBusqueda} />
      </div>
    </div>
  );
}

export default App;
