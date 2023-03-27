import React, { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    setResult(result + parseInt(input));
    setInput('');
  };

  const handleSubtract = () => {
    setResult(result - parseInt(input));
    setInput('');
  };

  const handleMultiply = () => {
    setResult(result * parseInt(input));
    setInput('');
  };

  const handleDivide = () => {
    setResult(result / parseInt(input));
    setInput('');
  };

  const handleClear = () => {
    setResult(0);
    setInput('');
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input type="number" value={input} onChange={handleInput} />
      <br />
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleMultiply}>*</button>
      <button onClick={handleDivide}>/</button>
      <br />
      <button onClick={handleClear}>Clear</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;
