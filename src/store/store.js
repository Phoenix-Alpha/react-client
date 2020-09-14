import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import reducers from '../redux/index';

const middleware = [
  thunk,
];

const store = () => {
  let store = null;

  store = createStore(
    reducers,
    compose(applyMiddleware(...middleware))
  );

  const persistor = persistStore(store);
  return { store, persistor };
};

export default store();
