import React, { useState, useEffect } from 'react'; // Importa React y hooks
import Form from './components/Form'; // Importa el Formulario
import List from './components/List'; // Importa la Lista
import './App.css'; // Estilos
 
function App() {
  const [items, setItems] = useState([]); // Lista de ítems
  const [itemToEdit, setItemToEdit] = useState(null); // Ítem en edición

  //Al montar el componente, carga datos desde LocalStorage
  useEffect(() => {
  const storedItems = JSON.parse(localStorage.getItem('items'));
  if (Array.isArray(storedItems) && storedItems.length > 0) {
    setItems(storedItems); //Actualiza el estado con los ítems guardados
  }
  }, []);

  //Cada vez que cambian los ítems, los guarda en LocalStorage
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  //Función para agregar o actualizar un ítem
  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      //Si estamos editando, reemplaza el ítem en la lista
      setItems(items.map(item =>
        item.id === itemToEdit.id ? { ...item, ...value } : item
      ));
      setItemToEdit(null); // Limpia el ítem en edición
    } else {
      //Si estamos agregando, crea un nuevo ítem con un ID único
      setItems([...items, { id: Date.now(), ...value }]);
    }
  };

  //Función para eliminar un ítem por ID
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  //Función para marcar un ítem como el que se va a editar
  const editItem = (item) => {
    setItemToEdit(item);
  };

  return (
    <div className="App">
      <h1 className="main-title">Evaluación de Alumnos</h1>
      <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
      <h2 className="guardadas-title">Evaluaciones Guardadas</h2>
      {items.length === 0 ? (
        <p className="no-items">No hay evaluaciones guardadas aún. ¡Agrega una!</p>
      ) : (
        <List items={items} deleteItem={deleteItem} editItem={editItem} />
      )}
    </div>
  );
}

export default App;
