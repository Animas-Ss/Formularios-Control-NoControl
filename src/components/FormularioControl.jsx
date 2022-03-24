import React, { useState } from "react";

const Formulario = () => {
  // se iniciliza en un objeto vacio
  const [tareas, setTareas] = useState({
    nombreTarea: "",
    descripcionTarea: "",
    estadoTarea: "pendiente",
    checkTarea: false,
  });
  // estado para el Error de carga
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    // nos permite evitar el comportamiento por defecto
    e.preventDefault();
    // desectructuramos para poder hacer la validacion mas comprensible
    const { nombreTarea, descripcionTarea } = tareas;
    // pequenia validacion
    if (!nombreTarea.trim() || !descripcionTarea.trim()) {
      setError(true);
      return;
    } else {
      setError(false);
    }
  };

  const PintarError = () => (
    <div className="alert alert-danger">Todos Los campos son obligatorios</div>
  );
  //onChange={e => setTareas({...tareas, nombreTarea: e.target.value})}
  //onChange={e => setTareas({...tareas, descripcionTarea: e.target.value})}
  //onChange={e => setTareas({...tareas, estadoTarea: e.target.value})}

  const handleChange = (e) => {
    //console.log(e.target.name);
    //console.log(e.target.value);
    console.log(e.target.type);

    // copiamos en el estado el estado actual mas le cambio asignado
    //setTareas({...tareas, [e.target.name]: e.target.value})
    //setTareas((old) =>({...old, [e.target.name]: e.target.value}))

    setTareas((old) => {
      return {
        ...old,
        //checked={tareas.checkTarea}
        //name="checkTarea"
        // comparar el tipo si es checked asignar el valor de chate sino el valor de value y guardar en el estado
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };
  // para el renderizado condicional creamos una funcion luego con un operador ternario se deside si se pinta o no
  return (
    <>
      <h2>FORMULARIO CONTROLADO</h2>
      {error && <PintarError />}
      <form onSubmit={handleSubmit}>
        <label>INGRESE TAREA:</label>
        <input
          type="texto"
          placeholder="Ingrese la tarea"
          name="nombreTarea"
          className="form-control mb-2"
          onChange={handleChange}
          value={tareas.nombreTarea}
        />
        <label>DESCRIBA LA TAREA:</label>
        <textarea
          name="descripcionTarea"
          placeholder="ingrese descripcion"
          className="form-control mb-2"
          onChange={handleChange}
          value={tareas.descripcionTarea}
        />
        <label>ESTADO DE LA TAREA:</label>
        <select
          name="estadoTarea"
          className="form-control mb-2"
          onChange={handleChange}
          value={tareas.estadoTarea}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="checkTarea"
            id="flexRadioDefault1"
            onChange={handleChange}
            checked={tareas.checkTarea}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Prioridad
          </label>
        </div>
        <button type="submit" className="btn btn-warning">
          Agregar
        </button>
      </form>
    </>
  );
};

export default Formulario;
