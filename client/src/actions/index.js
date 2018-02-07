import axios from 'axios';
import { FETCH_USER, FETCH_CHAT } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchChat = () => async dispatch => {
  const res = await axios.get('/api/chat');

  dispatch({ type: FETCH_CHAT, payload: res.data })
}
