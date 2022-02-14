import { combineReducers } from 'redux';
import authReducer from './authReducer';
import locale from './locale';

export default combineReducers({
  authUser: authReducer,
  locale,
});
