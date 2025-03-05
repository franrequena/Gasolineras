import React, { useState, useEffect } from 'react';

function SelectorProvincia({ comunidad, setProvincia }) {
  const [provincias, setProvincias] = useState([]);

  useEffect(() => {
    if (comunidad) {
      fetch(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/ProvinciasPorComunidad/${comunidad}`)
        .then(response => response.json())
        .then(data => setProvincias(data));
    }
  }, [comunidad]);

  return (
    <div className="grupo-formulario">
      <label>Provincia</label>
      <select onChange={(e) => setProvincia(e.target.value)}>
        <option value="">Selecciona una provincia</option>
        {provincias.map((provincia) => (
          <option key={provincia.IDPovincia} value={provincia.IDPovincia}>
            {provincia.Provincia}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectorProvincia;
