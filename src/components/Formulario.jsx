import React, { useRef } from 'react';

const Formulario = () => {
    // referencia del dom real
    const formulario = useRef(null);


   const handleSubmit = (e)=>{
     e.preventDefault();
     //console.log(e);
     // le pasamos el formulario en el formdata
     const datos = new FormData(formulario.current)
     //console.log(...datos.entries());
     // nos trasforma los datos en un objeto con propiedad valor
     const objetoDatos = Object.fromEntries([...datos.entries()]);
     console.log(objetoDatos);
     // destructuring
     const {nombreTarea, descripcionTarea} = objetoDatos;

     if (nombreTarea.trim() === "" || !descripcionTarea.trim()){
       console.log("Nombre incompleto");
       // apra que no siga el programa se requiere que alfinal de la validacion retorne y no siga
       return;
     }
      console.log("paso validaciones");
   }


  return (
    <>
    <h2>FORMULARIO NO CONTROLADO</h2>
    <form ref={formulario} onSubmit={handleSubmit}>
        <label>INGRESE TAREA:</label>
        <input 
        type="texto"
        placeholder='Ingrese la tarea'
        name='nombreTarea'
        className='form-control mb-2'
        />
        <label>DESCRIBA LA TAREA:</label>
        <textarea
         name='descripcionTarea'
         placeholder='ingrese descripcion'
         className='form-control mb-2'
         />
         <label>ESTADO DE LA TAREA:</label>
         <select name='estadoTarea' className='form-control mb-2'>
             <option value="pendiente">Pendiente</option>
             <option value="completada">Completada</option>
         </select>
         <button type='submit' className='btn btn-warning'>Agregar</button>
    </form>
    </>
  )
}

export default Formulario;