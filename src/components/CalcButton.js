import React from 'react';

const CalcButton = (props) => {

	const { operations, handleClick } = props;
	const buttonList = operations.map((operation, index) => {
		return (
			<button
				className="calc-button"
				onClick={() => handleClick(operation.name)}
				key={index}
			>
				<span className="icon">{operation.icon}</span>
				<span className="text">{operation.name}</span>
			</button>
		)
	});

	return (
		<div className="operation-list">
			{buttonList}
		</div>
	)
}

export default CalcButton
