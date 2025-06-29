import React, { useState, useEffect } from 'react'; //Importa React y hooks

function Form({ addOrUpdateItem, itemToEdit }) {
    //Estado para controlar el valor del input
  const [inputValue, setInputValue] = useState('');
  const [nombre, setNombre]=useState("");
  const [asignatura, setAsignatura]=useState("");
  const [promedio, setPromedio]=useState("");
  const [error, setError]=useState("");


  //Efecto que se ejecuta cuando el ítem a editar cambia 
  useEffect(() => {
    if (itemToEdit) {
        //Si hay un ítem para editar, carga su valor en el input
      setInputValue(itemToEdit.value);
      setNombre(itemToEdit.nombre);
      setAsignatura(itemToEdit.asignatura);
      setPromedio(itemToEdit.promedio);
      setError(itemToEdit.error);
    } else {
        //Si no hay ítem para editar, limpia el input
      setInputValue('');       // SE BORRA ??????????????????????????????
    }
  }, [itemToEdit]);

  const calApreciacion=(promedio)=>{
    
    const p = parseFloat(promedio);
    if (p >= 6.5) return "Destacado";
    if (p >= 5.6) return "Buen trabajo";
    if (p >= 4.0) return "Con mejora";
    return "Deficiente";

  };

  //Manejador del evento de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); //Previene recarga de la página
    if (!nombre || !asignatura || promedio === "") {
      setError("Cada campo es obligatorios");
      return;
    }

    if (isNaN(promedio) || promedio < 1 || promedio > 7) {
      setError("El promedio debe ser un número entre 1.0 y 7.0");
      return;
    }
    setError("");

    const nuevaApreciacion = calApreciacion(promedio);
    addOrUpdateItem({
      nombre,
      asignatura,
      promedio,
      apreciacion: nuevaApreciacion,
    });

    setNombre("");
    setAsignatura("");
    setPromedio("");
  };
    


  return (
    <>
    <h2 style={{ 
      textAlign: 'center', 
      marginBottom: '20px', 
      background: '#fff', 
      padding: '10px 20px', 
      borderRadius: '12px', 
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)' 
    }}>
      {itemToEdit ? "Editar Evaluación" : "Agregar Nueva Evaluación"}
    </h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del Alumno"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)} //Actualiza el estado al escribir
      />
      <input
        type="text"
        placeholder="Asignatura"
        value={asignatura}
        onChange={(e) => setAsignatura(e.target.value)}
      />
      <input
        type="number"
        step="0.1"
        placeholder="Promedio (1.0 a 7.0)"
        value={promedio}
        onChange={(e) => setPromedio(e.target.value)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">{itemToEdit ? 'Actualizar' : 'Agregar'}</button> {/*Texto del botón según si se edita o agrega*/}
    </form>
    </>
  );
}

export default Form;
