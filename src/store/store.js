import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from '../modules/Auth/reducer';
import { authMiddleware, registerMiddleware } from '../modules/Auth/Middleware';

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(authMiddleware, registerMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (noop) => noop,
    ),
  );
  return store;
};

export default createAppStore;