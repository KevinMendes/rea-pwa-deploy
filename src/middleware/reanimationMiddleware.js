import { SET_CATEGORY, updateCategory } from '../actions/reanimation';

const reanimationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SET_CATEGORY: {
      const state = store.getState();
      console.log(state);
      console.log(action);
      store.dispatch(updateCategory(action.category));
      break;
    }
    default:
      break;
  }
  next(action);
};

export default reanimationMiddleware;
