import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';

import { newsFeedReducer } from '../reducers/newsFeed';
import { userReducer } from '../reducers/user';

const reducer = combineReducers({
  newsFeed: newsFeedReducer,
  user: userReducer,
});
export type RootState = ReturnType<typeof reducer>;
const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
