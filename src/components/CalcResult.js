import React from 'react'

const CalcResult = (props) => {
    return (
        <div className="result">
			<span className="result-text">Result</span>
			<span className="output">{props.result}</span>
		</div>
    );
}

export default CalcResult
