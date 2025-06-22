import React from 'react';
import Item from './Item'; //Importa componente hijo

function List({ items, deleteItem, editItem }) {
  return (
    <ul>
    {/*Itera sobre los ítems y renderiza uno por cada uno*/}
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      ))}
    </ul>
  );
}

export default List;
