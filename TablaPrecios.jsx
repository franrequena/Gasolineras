import React from 'react';

function TablaPrecios({ precios }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Estación</th>
          <th>Dirección</th>
          <th>Horario</th>
          <th>Gasolina 95</th>
          <th>Gasolina 98</th>
          <th>Gasóleo A</th>
          <th>Gasóleo A+</th>
          <th>Gasóleo B</th>
        </tr>
      </thead>
      <tbody>
        {precios.map((precio, index) => (
          <tr key={index}>
            <td>{precio['Rótulo']}</td>
            <td>{precio['Dirección']}</td>
            <td>{precio['Horario']}</td>
            <td>{precio['Precio Gasolina 95 E5'] || 'No disponible'}</td>
            <td>{precio['Precio Gasolina 98 E5'] || 'No disponible'}</td>
            <td>{precio['Precio Gasoleo A'] || 'No disponible'}</td>
            <td>{precio['Precio Gasoleo Premium'] || 'No disponible'}</td>
            <td>{precio['Precio Gasoleo B'] || 'No disponible'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaPrecios;
