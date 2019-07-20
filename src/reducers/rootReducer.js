import { combineReducers } from 'redux';
import arithmetic from './arithmetic';

const rootReducer = combineReducers({
	arithmetic: arithmetic
});

export default rootReducer;
