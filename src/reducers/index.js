import { combineReducers } from 'redux';
import buttonCount from './buttonCount';
import addItem from './addItem';

const rootReducer = combineReducers({
    buttonCount,
    addItem
});

export default rootReducer;