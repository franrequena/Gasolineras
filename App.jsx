import React, { useState, useEffect } from 'react';
import './App.css';
import SelectorComunidad from './SelectorComunidad';
import SelectorProvincia from './SelectorProvincia';
import SelectorLocalidad from './SelectorLocalidad';
import TablaPrecios from './TablaPrecios';

function App() {
  const [comunidad, setComunidad] = useState('');
  const [provincia, setProvincia] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [fecha, setFecha] = useState('');
  const [precios, setPrecios] = useState([]);

  useEffect(() => {
    if (localidad) {
      fetch(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroMunicipio/${localidad}`)
        .then(response => response.json())
        .then(data => {
          setFecha(`Precios actuales: ${data.Fecha}`);
          setPrecios(data.ListaEESSPrecio);
        });
    }
  }, [localidad]);

  return (
    <div className="contenedor">
      <h1>Precios de Gasolineras</h1>
      <SelectorComunidad setComunidad={setComunidad} />
      {comunidad && <SelectorProvincia comunidad={comunidad} setProvincia={setProvincia} />}
      {provincia && <SelectorLocalidad provincia={provincia} setLocalidad={setLocalidad} />}
      
      <div className="tabla-container">
        <h2>{fecha}</h2>
        <TablaPrecios precios={precios} />
      </div>
    </div>
  );
}

export default App;
