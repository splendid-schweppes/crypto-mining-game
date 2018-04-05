import {createStore, combineReducers, applyMiddleware} from 'redux'
import ClickReducer from './reducers/Click'
import CoinsReducer from './reducers/Coins'
import HashingRateReducer from './reducers/HashingRate'
import BlocksReducer from './reducers/Blocks'
import MoneyReducer from './reducers/Money'
import AssetsReducer from './reducers/Assets'
import AchievementsReducer from './reducers/Achievements'
import PowerUpsReducer from './reducers/PowerUps'
import ElectricityReducer from './reducers/Electricity'

import ClickMiddleware from './middleware/Click'
import CoinsMiddleware from './middleware/Coins'
import HashingRateMiddleware from './middleware/HashingRate'
import BlocksMiddleware from './middleware/Blocks'
import MoneyMiddleware from './middleware/Money'
import AssetsMiddleware from './middleware/Assets'
import AchievementsMiddleware from './middleware/Achievements'
import PowerUpsMiddleware from './middleware/PowerUps'
import ElectricityMiddleware from './middleware/Electricity'

const appReducer = combineReducers({
  clicks: ClickReducer,
  coins: CoinsReducer,
  hashingRate: HashingRateReducer,
  blocks: BlocksReducer,
  money: MoneyReducer,
  assets: AssetsReducer,
  achievements: AchievementsReducer,
  powerUps: PowerUpsReducer,
  electricity: ElectricityReducer
})

const middleware = applyMiddleware(
  ClickMiddleware,
  CoinsMiddleware,
  HashingRateMiddleware,
  BlocksMiddleware,
  MoneyMiddleware,
  AssetsMiddleware,
  AchievementsMiddleware,
  PowerUpsMiddleware,
  ElectricityMiddleware,
)

export default createStore(appReducer, middleware)
