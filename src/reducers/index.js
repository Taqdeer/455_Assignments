import { combineReducers } from 'redux';
import buttonCount from './buttonCount';
import imageItems from './imageItems';

const rootReducer = combineReducers({
    buttonCount,
    imageItems
});

export default rootReducer;