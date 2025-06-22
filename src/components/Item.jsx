import React from 'react';

function Item({ item, deleteItem, editItem }) {
  return (
    <li>
      {item.value} {/*Muestra el texto del ítem*/}
      <button onClick={() => editItem(item)}>Editar</button> {/* Botón para editar */}
      <button onClick={() => deleteItem(item.id)}>Eliminar</button> {/* Botón para eliminar */}
    </li>
  );
}

export default Item;
