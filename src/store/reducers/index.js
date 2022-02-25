import { combineReducers } from 'redux';
import counterReducer from './counter'
import isLoggedReducer from './isLogged'

export default combineReducers({
   counter: counterReducer,
   isLogged: isLoggedReducer
});
