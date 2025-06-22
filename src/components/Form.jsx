import React, { useState, useEffect } from 'react'; //Importa React y hooks

function Form({ addOrUpdateItem, itemToEdit }) {
    //Estado para controlar el valor del input
  const [inputValue, setInputValue] = useState('');
  //Efecto que se ejecuta cuando el ítem a editar cambia 
  useEffect(() => {
    if (itemToEdit) {
        //Si hay un ítem para editar, carga su valor en el input
      setInputValue(itemToEdit.value);
    } else {
        //Si no hay ítem para editar, limpia el input
      setInputValue('');
    }
  }, [itemToEdit]);

  //Manejador del evento de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); //Previene recarga de la página
    if (inputValue.trim()) {
        //Si el input no está vacío
      addOrUpdateItem(inputValue); //Agrega o actualiza el ítem
      setInputValue(''); //Limpia el campo
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} //Actualiza el estado al escribir
      />
      <button type="submit">{itemToEdit ? 'Actualizar' : 'Agregar'}</button> {/*Texto del botón según si se edita o agrega*/}
    </form>
  );
}

export default Form;
