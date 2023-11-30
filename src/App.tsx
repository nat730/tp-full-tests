import { useState } from 'react';
import './App.css';
import { hour } from "./hour";
import React from 'react';

function App() {
  const [moon, setMoon] = useState('1');
  const [earth, setEarth] = useState('1');
  const [sun, setSun] = useState('1');
  const [result, setResult] = useState('');
  
  const handleMoonChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setMoon(e.target.value);
  };

  const handleEarthChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEarth(e.target.value);
  };

  const handleSunChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSun(e.target.value);
  };

  const calculateResult = () => {
    const moonValue = parseInt(moon);
    const earthValue = parseInt(earth);
    const sunValue = parseInt(sun);

    const calculatedResult = hour(moonValue, earthValue, sunValue);
    setResult(calculatedResult.toString());
  };

  return (
    <div className="App">
      <h1>Calculateur de Cadrans</h1>
      <label>
        Lune:
        <select id='moon' value={moon} onChange={handleMoonChange}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </label>
      <label>
        Terre:
        <select id='earth' value={earth} onChange={handleEarthChange}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </label>
      <label>
        Soleil:
        <select id='sun' value={sun} onChange={handleSunChange}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </label>
      <button onClick={calculateResult}>Calculer</button>
      {result && <div>Résultat : {result}</div>}
    </div>
  );
}

export default App;
