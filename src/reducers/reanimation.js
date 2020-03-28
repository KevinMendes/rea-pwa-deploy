import { SET_CATEGORY, SET_HOURS } from '../actions/reanimation';

const initialState = {
  reanimation: {
    category: '',
    initialTime: '',
  },
};

const reanimationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        reanimation: {
          ...state.reanimation,
          category: action.category,
        },
      };
    case SET_HOURS:
      return {
        ...state,
        reanimation: {
          ...state.reanimation,
          initialTime: action.initialTime,
        },
      };
    default:
      return state;
  }
};

export default reanimationReducer;
