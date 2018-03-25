import {createStore, combineReducers, applyMiddleware} from 'redux'
import ClickReducer from './reducers/Click'
import CoinsReducer from './reducers/Coins'
import HashingRateReducer from './reducers/HashingRate'
import BlocksReducer from './reducers/Blocks'
import MoneyReducer from './reducers/Money'

import ClickMiddleware from './middleware/Click'
import CoinsMiddleware from './middleware/Coins'
import HashingRateMiddleware from './middleware/HashingRate'
import BlocksMiddleware from './middleware/Blocks'
import MoneyMiddleware from './middleware/Money'

const appReducer = combineReducers({
  clicks: ClickReducer,
  coins: CoinsReducer,
  hashingRate: HashingRateReducer,
  blocks: BlocksReducer,
  money: MoneyReducer
})

const middleware = applyMiddleware(
  ClickMiddleware,
  CoinsMiddleware,
  HashingRateMiddleware,
  BlocksMiddleware,
  MoneyMiddleware
)

export default createStore(appReducer, middleware)
