import { combineReducers } from 'redux';

import reanimationReducer from './reanimation';

const rootReducer = combineReducers({
  reanimation: reanimationReducer,
});
export default rootReducer;
