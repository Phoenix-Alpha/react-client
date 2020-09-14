import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducer as UserReducer } from './UserReducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
  ],
};

export default persistCombineReducers(persistConfig, {
  user: UserReducer,
});
