import React from 'react';

const CalcButton = (props) => {
	const { operations, handleClick, active } = props;
	const buttonList = operations.map((operation, index) => {
		return (
			<button
				className={`calc-button ${active === operation.name ? 'active': ""}`}
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
