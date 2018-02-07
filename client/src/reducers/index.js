import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import chatReducer from './chatReducer';

export default combineReducers({
  auth: authReducer,
  chat: chatReducer
});
