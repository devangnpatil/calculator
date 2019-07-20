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
		output: 0,
		active: '',
		error: {
			num1: '',
			num2: ''
		}
	}

	handleChange = name => (e) => {
		let value = e.target.value;
		if (e.target.value === "") {
			return this.setState({ [name]: '' });

		}

		if (!isFinite(e.target.value)) {
			return;
		}

		value = parseFloat(e.target.value);
		this.setState({ [name]: value, active: name });

	}

	isValidAndSetError = () => {
		let { error } = this.state;
		let result = true;
		Object.keys(error).forEach(item => {
			error[item] = this.state[item] === "" ? "Please Enter Value" : "";
			result = result && isFinite(this.state[item]);
		});
		this.setState({ error });
		return result;
	}

	handleClick = (operation) => {
		if (!this.isValidAndSetError()) return;
		this.setState({ active: operation });
		const { num1, num2 } = this.state
		this.props.evaluateResult({ num1, num2, operation })
	};

	render() {
		const { num1, num2, operations, active, error } = this.state;
		const { arithmetic } = this.props;
		return (
			<div className="calculator-wrapper">
				<div className="calculator-header-wrapper">
					<AppHeader />
				</div>
				<div className="input-list">
					<input type="text"
						value={num1}
						onChange={this.handleChange('num1')}
						placeholder="Enter value 1"
					/>
					<p className="error">{error['num1']}</p>
					<input type="text"
						value={num2}
						onChange={this.handleChange('num2')}
						placeholder="Enter value 2"
					/>
					<p className="error">{error['num2']}</p>
				</div>
				<div className="button-wrapper">
					<CalcButton operations={operations} handleClick={this.handleClick} active={active} />
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
