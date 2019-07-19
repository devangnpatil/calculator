import React from 'react';
import AppHeader from './components/AppHeader';
import CalcInput from './components/CalcInput'
import CalcButton from './components/CalcButton';
import CalcResult from './components/CalcResult';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="calculator-wrapper">
        <div className="calculator-header-wrapper">
          <AppHeader/>
        </div>
        <div className="calc-input-wrapper">
          <CalcInput />
        </div>
        <div className="button-wrapper">
          <CalcButton />
          <CalcButton />
          <CalcButton />
          <CalcButton />
        </div>
        <div className="result-wrapper">
          <CalcResult />
        </div>
      </div>
    </div>
  );
}

export default App;
