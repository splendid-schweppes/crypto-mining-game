import {createStore, combineReducers, applyMiddleware} from 'redux'
import ClickReducer from './reducers/Click'
import HashingRateReducer from './reducers/HashingRate'

import ClickMiddleware from './middleware/Click'
import HashingRateMiddleware from './middleware/HashingRate'

const appReducer = combineReducers({
  clicks: ClickReducer,
  hashingRate: HashingRateReducer
});

const middleware = applyMiddleware(
  ClickMiddleware,
  HashingRateMiddleware
);

export default createStore(appReducer, middleware)
