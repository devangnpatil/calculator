import React, {Component} from 'react';

class CalcButton extends Component{

	state = {
		test: 10
	};

	handleChange = (e) =>{
		e.preventDefault();
		console.log(this.state);
	};
	render(){
		const {operations} = this.props;
		const buttonList = operations.map(operation => {
			return (
				<button className="calc-button" onClick={this.handleChange} key={operation.id}>
					<span className="icon">{operation.icon}</span>
					<span className="text">{operation.name}</span>
				</button>
			)
		})
		return (
			<div className="operation-list">
				{buttonList}
			</div>
		)
	}

}

export default CalcButton
