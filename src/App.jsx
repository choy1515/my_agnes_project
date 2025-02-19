import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };
  
  return (
    <div className="calculator">
      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter calculation"
        />
      </div>
      <div className="buttons">
        <button onClick={handleCalculate}>Calculate</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <div className="result">
        <h3>Result: {result}</h3>
      </div>
    </div>
  );
}

export default App;
