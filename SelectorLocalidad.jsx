import React, { useState, useEffect } from 'react';

function SelectorLocalidad({ provincia, setLocalidad }) {
  const [localidades, setLocalidades] = useState([]);

  useEffect(() => {
    if (provincia) {
      fetch(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/MunicipiosPorProvincia/${provincia}`)
        .then(response => response.json())
        .then(data => setLocalidades(data));
    }
  }, [provincia]);

  return (
    <div className="grupo-formulario">
      <label>Localidad</label>
      <select onChange={(e) => setLocalidad(e.target.value)}>
        <option value="">Selecciona una localidad</option>
        {localidades.map((localidad) => (
          <option key={localidad.IDMunicipio} value={localidad.IDMunicipio}>
            {localidad.Municipio}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectorLocalidad;
