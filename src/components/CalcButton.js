import React from 'react'

const CalcButton = () => {
  
	const handleChange = (e) =>{
		console.log('test');
	}
    return (
        <button className="calc-button" onClick={()=>{handleChange()}}>
			  <span className="icon">+</span>
			  <span className="text">Add</span>
		</button>
    );
}

export default CalcButton
