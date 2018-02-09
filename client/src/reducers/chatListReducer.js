import { FETCH_CHATLIST } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CHATLIST:
      return action.payload;
    default:
      return state;
  }
}
