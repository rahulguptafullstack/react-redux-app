import { GET_ALL_POSTS, ADD_NEW_POST } from '../constants/postConstant';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case ADD_NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}