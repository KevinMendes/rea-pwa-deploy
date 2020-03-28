import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// middlewares
import reanimationMiddleware from '../middleware/reanimationMiddleware';
// Reducer
import rootReducer from '../reducers/rootReducer';

const enhancers = composeWithDevTools(
  applyMiddleware(
    reanimationMiddleware,
  ),
);
const store = createStore(
  rootReducer,
  enhancers,
);

export default store;
