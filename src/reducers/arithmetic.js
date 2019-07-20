import * as actionType from '../actions/actionType';
import updateObject from '../helper/updateObject';

const initialState = {
	result: ""
};

const updateResult = (state, action) => {
	const {num1, num2, operation} = action.result;
	let result = 0;
	switch (operation) {
		case 'add': result = num1 + num2; break;
		case 'subtract': result = num1 - num2; break;
		case 'multiply': result = num1 * num2; break;
		case 'divide': result = (num2 >0) ? num1 / num2 : "Divide by 0 not possible"; break;
		default: result = 0;
	}
	return updateObject(state, {result});
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.UPDATE_RESULT: return updateResult(state, action);
		default: return state;
	}
};

export default reducer;
