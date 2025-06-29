import React from 'react';

function Item({ item, deleteItem, editItem }) {
  return (
    <li style={{border:"1px solid #ccc", padding:"10px", marginBottom:"10px", borderRadius:"8px"}}>
      <p><strong>Nombre:</strong> {item.nombre}</p>
      <p><strong>Asignatura:</strong> {item.asignatura}</p>
      <p><strong>Promedio:</strong> {item.promedio}</p>
      <p><strong>Escala de Apreciación:</strong> {item.apreciacion}</p>
      <button onClick={() => editItem(item)}>Editar</button> {/* Botón para editar */}
      <button onClick={() => deleteItem(item.id)}>Eliminar</button> {/* Botón para eliminar */}
    </li>
  );
}

export default Item;
