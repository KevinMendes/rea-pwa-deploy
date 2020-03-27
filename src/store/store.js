import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// middlewares

// Reducer
import rootReducer from '../reducers/rootReducer';

// const enhancers = composeWithDevTools(
//   applyMiddleware(
//   ),
// );
const store = createStore(
  rootReducer,
  // enhancers,
);

export default store;
