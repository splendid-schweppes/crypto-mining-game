import {createStore, combineReducers, applyMiddleware} from 'redux'
import ClickReducer from './reducers/Click'
import HashingRateReducer from './reducers/HashingRate'
import BlocksReducer from './reducers/Blocks'

import ClickMiddleware from './middleware/Click'
import HashingRateMiddleware from './middleware/HashingRate'
import BlocksMiddleware from './middleware/Blocks'

const appReducer = combineReducers({
  clicks: ClickReducer,
  hashingRate: HashingRateReducer,
  blocks: BlocksReducer
});

const middleware = applyMiddleware(
  ClickMiddleware,
  HashingRateMiddleware,
  BlocksMiddleware
);

export default createStore(appReducer, middleware)
