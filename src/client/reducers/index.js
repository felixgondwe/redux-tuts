import {combineReducers} from 'redux';
import todos from  './reducers';
import visibility_filter from './visibility_filter';

const todoApp = combineReducers({
    todos,visibility_filter
});

export default todoApp;