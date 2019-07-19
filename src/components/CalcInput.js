import React, {Component} from 'react';
class CalcInput extends Component{

  render(){
    const {inputElements} = this.props;
    const handleChange = name => event => {
      // this.setState({[name]: event.target.value });
    };
		const inputList = inputElements.map(input => {
			return (
          <input type="text" 
            label= {input.labelName} 
            onChange={handleChange(input.name)} 
            name= {input.name}
            key={input.id}
            placeholder={input.labelName}
          />
			)
		})
    return (
      <div className="input-list">
				{inputList}
			</div>
    )
  }
}

export default CalcInput
