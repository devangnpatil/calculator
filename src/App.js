import React, {Component} from 'react';
import AppHeader from './components/AppHeader';
import CalcInput from './components/CalcInput'
import CalcButton from './components/CalcButton';
import CalcResult from './components/CalcResult';
import './App.css';

class App extends Component{

  state = {
    value1: '',
    value2: '',
    operations: [
      {name: 'add', icon:'+', id:1},
      {name:'Substract', icon:'-', id:2},
      {name:'Multiply', icon:'x', id:3},
      {name:'Divide', icon:'÷', id:4}
    ]
  }

  render() {
    return (
      <div className="App">
        <div className="calculator-wrapper">
          <div className="calculator-header-wrapper">
            <AppHeader/>
          </div>
          <div className="calc-input-wrapper">
            <CalcInput name="value1" />
            <CalcInput name="value2" />
          </div>
          <div className="button-wrapper">
            <CalcButton operations={this.state.operations}/>
          </div>
          <div className="result-wrapper">
            <CalcResult />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
