import React from 'react';

function Item({ item, deleteItem, editItem }) {
  return (
    <li style={{
      backgroundColor: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: "12px",
      padding: "20px",
      marginBottom: "15px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div style={{ textAlign: "left" }}>
        <p><strong>Alumno:</strong> <span style={{ fontWeight: 'normal' }}>{item.nombre}</span></p>
        <p><strong>Asignatura:</strong> <span style={{ fontWeight: 'normal' }}>{item.asignatura}</span></p>
        <p><strong>Promedio:</strong> <span style={{ fontWeight: 'normal' }}>{item.promedio}</span></p>
        <span style={{
          display: 'inline-block',
          backgroundColor: '#e0f2fe',
          color: '#1e3a8a',
          padding: '4px 12px',
          borderRadius: '10px',
          fontWeight: 'bold',
          fontSize: '13px',
          marginTop: '5px'
        }}>{item.apreciacion}</span>
      </div>

      <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px"
      }}>
        <button onClick={() => editItem(item)} style={{
          backgroundColor: '#facc15',
          color: '#000',
          border: 'none',
          borderRadius: '8px',
          padding: '8px 12px',
          fontWeight: 'bold',
          width: "80px"
        }}>Editar</button>

        <button onClick={() => deleteItem(item.id)} style={{
          backgroundColor: '#ef4444',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          padding: '8px 12px',
          fontWeight: 'bold',
          width: "80px"
        }}>Eliminar</button>
      </div>
    </li>
  );
}

export default Item;
