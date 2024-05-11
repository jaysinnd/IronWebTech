"use client";
import { useState } from 'react';

export default function weightconversion() {
  const [inputValue, setInputValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');
  
  const handleKilosToPounds = () => {
    const kilos = parseFloat(inputValue);
    if (!isNaN(kilos)) {
      const pounds = kilos * 2.20462;
      setConvertedValue(`${kilos} kilos = ${pounds.toFixed(2)} pounds`);
    } else {
      setConvertedValue('Please enter a valid number');
    }
  };

  const handlePoundsToKilos = () => {
    const pounds = parseFloat(inputValue);
    if (!isNaN(pounds)) {
      const kilos = pounds / 2.20462;
      setConvertedValue(`${pounds} pounds = ${kilos.toFixed(2)} kilos`);
    } else {
      setConvertedValue('Please enter a valid number');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Weight Conversion Tool</h1>
        <div className="flex flex-col space-y-4">
      <input 
      type="text" 
      value={inputValue} 
      onChange={handleInputChange}
      style={{ color: 'black' }}  />
      <br />
      <button onClick={handleKilosToPounds}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-white">Kilos to Pounds</button>
      <button onClick={handlePoundsToKilos}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-white">Pounds to Kilos</button>
      <br />
      <div>{convertedValue}</div>
    </div>
    </main>
    </div>
  );
}