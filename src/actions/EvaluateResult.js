import * as actionTypes from './actionType';

export const evaluateResult = (result) => {
	return { type: actionTypes.UPDATE_RESULT, result };
}
