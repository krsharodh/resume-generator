import React from 'react';
import './App.css';
import Button from './button/button'

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>Resume Generator</h1>
        <Button name={'Create Resume'}></Button>
      </div>
    </div>
  );
}

export default App;
