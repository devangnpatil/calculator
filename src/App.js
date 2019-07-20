import React, {Component} from 'react';
import AppHeader from './components/AppHeader';
import CalcInput from './components/CalcInput'
import CalcButton from './components/CalcButton';
import CalcResult from './components/CalcResult';
import './App.css';
class App extends Component{

  state = {
    operations: [
      {name: 'add', icon:'+', id:1},
      {name:'Substract', icon:'-', id:2},
      {name:'Multiply', icon:'x', id:3},
      {name:'Divide', icon:'÷', id:4}
    ],
    inputElements: [
      {name: 'value1', id:1, labelName: 'Enter value 1', value:''},
      {name: 'value2', id:2, labelName: 'Enter value 2', value:''},
    ],
    output:0
  }

  render() {
    return (
      <div className="App">
        <div className="calculator-wrapper">
          <div className="calculator-header-wrapper">
            <AppHeader/>
          </div>
          <div className="calc-input-wrapper">
            <CalcInput inputElements={this.state.inputElements} />
          </div>
          <div className="button-wrapper">
            <CalcButton operations={this.state.operations}/>
          </div>
          <div className="result-wrapper">
            <CalcResult result={this.state.output}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
