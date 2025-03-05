import React, { useState, useEffect } from 'react';

function SelectorComunidad({ setComunidad }) {
  const [comunidades, setComunidades] = useState([]);

  useEffect(() => {
    fetch('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/ComunidadesAutonomas/')
      .then(response => response.json())
      .then(data => setComunidades(data));
  }, []);

  return (
    <div className="grupo-formulario">
      <label>Comunidad Autónoma</label>
      <select onChange={(e) => setComunidad(e.target.value)}>
        <option value="">Selecciona una comunidad</option>
        {comunidades.map((comunidad) => (
          <option key={comunidad.IDCCAA} value={comunidad.IDCCAA}>
            {comunidad.CCAA}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectorComunidad;
