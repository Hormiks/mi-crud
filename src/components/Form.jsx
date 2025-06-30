import React, { useState, useEffect } from 'react'; //Importa React y hooks

function Form({ addOrUpdateItem, itemToEdit }) {
  const [nombre, setNombre] = useState('');
  const [asignatura, setAsignatura] = useState('');
  const [promedio, setPromedio] = useState('');
  const [error, setError] = useState('');

  //Efecto que se ejecuta cuando el ítem a editar cambia 
  useEffect(() => {
    if (itemToEdit) {
      setNombre(itemToEdit.nombre); //Si hay un ítem para editar, carga su valor en el input
      setAsignatura(itemToEdit.asignatura);
      setPromedio(itemToEdit.promedio);
    } else {
      setNombre(''); //Si no hay ítem para editar, limpia el input
      setAsignatura('');
      setPromedio('');
    }
  }, [itemToEdit]);

  const calApreciacion = (promedio) => {
    const p = parseFloat(promedio);
    if (p >= 6.5) return "Destacado";
    if (p >= 5.6) return "Buen trabajo";
    if (p >= 4.0) return "Con mejora";
    return "Deficiente";
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //Previene recarga de la página
    if (!nombre || !asignatura || promedio === "") {
      setError("Cada campo es obligatorio");
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

    setNombre(""); //Limpia el campo
    setAsignatura("");
    setPromedio("");
  };

  const labelStyle = {
    fontWeight: '600',
    fontSize: '15px',
    color: '#1f2937',
    marginBottom: '-8px',
    marginTop: '10px',
    textAlign: 'left'
  };

  return (
    <form onSubmit={handleSubmit} style={{
      backgroundColor: "#fff",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
      maxWidth: "500px",
      width: "100%",
      margin: "0 auto 40px auto",
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    }}>
      <h2 style={{
        textAlign: 'center',
        color: '#1f2937',
        marginBottom: '10px'
      }}>
        {itemToEdit ? "Editar Evaluación" : "Agregar Nueva Evaluación"}
      </h2>
      <label style={labelStyle}>Nombre del Alumno:</label>
      <input
        type="text"
        placeholder="Ej: Daniela Romero"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)} //Actualiza el estado al escribir

      />
      <label style={labelStyle}>Asignatura:</label>
      <input
        type="text"
        placeholder="Ej: Prog. frontEnd"
        value={asignatura}
        onChange={(e) => setAsignatura(e.target.value)} //Actualiza el estado al escribir
      />
      <label style={labelStyle}>Promedio (0.0 - 7.0):</label>
      <input
        type="number"
        step="0.1"
        placeholder="Ej: 6.5"
        value={promedio}
        onChange={(e) => setPromedio(e.target.value)} //Actualiza el estado al escribir
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" style={{
        backgroundColor: '#2563eb',
        color: 'white',
        padding: '12px',
        border: 'none',
        borderRadius: '8px',
        fontWeight: 'bold'
      }}>
        {itemToEdit ? 'Actualizar Evaluación' : 'Agregar Evaluación'}
      </button>
    </form>
  );
}

export default Form;
