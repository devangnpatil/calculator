import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import CalcButton from './components/CalcButton';
import CalcResult from './components/CalcResult';
import './App.css';
import * as actions from './actions';
import { connect } from 'react-redux';

class App extends Component {

	state = {
		operations: [
			{ name: 'add', icon: '+', id: 1 },
			{ name: 'subtract', icon: '-', id: 2 },
			{ name: 'multiply', icon: 'x', id: 3 },
			{ name: 'divide', icon: '÷', id: 4 }
		],
		num1: '',
		num2: '',
		output: 0
	}

	handleChange = name => (e) => {
		let value = parseFloat(e.target.value);
      this.setState({ [name]: value });
	}

	handleClick = (operation) => {
		const { num1, num2 } = this.state
		this.props.evaluateResult({ num1, num2, operation })
	};

	render() {
		const { num1, num2, operations } = this.state;
		const { arithmetic } = this.props;
		return (
				<div className="calculator-wrapper">
					<div className="calculator-header-wrapper">
						<AppHeader />
					</div>
					<div className="input-list">
						<input type="number"
							value={num1}
							onChange={this.handleChange('num1')}
							placeholder="Enter value 1"
						/>
						<input type="number"
							value={num2}
							onChange={this.handleChange('num2')}
							placeholder="Enter value 2"
						/>
					</div>
					<div className="button-wrapper">
						<CalcButton operations={operations} handleClick={this.handleClick} />
					</div>
					<div className="result-wrapper">
						<CalcResult result={arithmetic.result} />
					</div>
				</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		arithmetic: state.arithmetic
	}
};

const mapDispatchToProps = dispatch => {
	return {
		evaluateResult: (obj) => dispatch(actions.evaluateResult(obj))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
