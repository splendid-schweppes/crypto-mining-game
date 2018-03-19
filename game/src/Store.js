import {createStore, combineReducers, applyMiddleware} from 'redux'
import ClickReducer from './reducers/Click'
import CoinsReducer from './reducers/Coins'
import HashingRateReducer from './reducers/HashingRate'
import BlocksReducer from './reducers/Blocks'

import ClickMiddleware from './middleware/Click'
import CoinsMiddleware from './middleware/Coins'
import HashingRateMiddleware from './middleware/HashingRate'
import BlocksMiddleware from './middleware/Blocks'

const appReducer = combineReducers({
  clicks: ClickReducer,
  coins: CoinsReducer,
  hashingRate: HashingRateReducer,
  blocks: BlocksReducer
});

const middleware = applyMiddleware(
  ClickMiddleware,
  CoinsMiddleware,
  HashingRateMiddleware,
  BlocksMiddleware
);

export default createStore(appReducer, middleware)
