import React, { useState } from "react";
import Formulario from "./components/Formulario";
import FormularioControl from "./components/FormularioControl";
import "./App.css";
import Logo from "./Imagenes/Lobos.png";

function App() {
  const [formularioB, setFormularioB] = useState(false);
  const [formularioNo, setFormularioNO] = useState(false);

  const handleClick = (e) => {
    const { name } = e.target;
    if (name === "FormularioC") {
      !formularioB ? setFormularioB(true) : setFormularioB(false);
      return;
    }
    if (name === "FormularioN") {
      !formularioNo ? setFormularioNO(true) : setFormularioNO(false);
      return;
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            {formularioB ? (
              <div
                className="card text-dark bg-info mb-3"
                style={{ width: 20 + "rem" }}
              >
                <img src={Logo} className="card-img-top" alt="logo" />
                <div className="card-body">
                  <FormularioControl />
                </div>
              </div>
            ) : null}
          </div>
          <div className="col-sm-4">
            <h1>Sebastian Sosa</h1>
            <div className="contaniner mt-2">
              <p>
                Proyecto con dos formularios practica en react , renderizado
                condicional estados y funciones el formulario controlado seria
                con estados y el formulrio no controlado esta relacionado a una
                referencia useRef se puede elegir una de las dos o las dos a la
                ver el formulario, por consola se ven los objetos creaods por
                los formularios y los estados activos de los dos formularios
              </p>
              <button
                className="btn btn-warning"
                name="FormularioC"
                onClick={handleClick}
              >
                Formulario Controlado
              </button>
              <button
                className="btn btn-warning"
                name="FormularioN"
                onClick={handleClick}
              >
                Formulario No Controlado
              </button>
            </div>
          </div>
          <div className="col-sm-4">
            {formularioNo ? (
              <div
                className="card text-white bg-danger mb-3"
                style={{ width: 20 + "rem" }}
              >
                <img src={Logo} className="card-img-top" alt="logo" />
                <div className="card-body">
                  <Formulario />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
