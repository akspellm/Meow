import { combineReducers } from 'redux';
import authReducer from './authReducer';
import chatReducer from './chatReducer';
import chatListReducer from './chatListReducer';

export default combineReducers({
  auth: authReducer,
  chat: chatReducer,
  surveys: chatListReducer
});
