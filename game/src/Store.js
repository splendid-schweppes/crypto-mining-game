import {createStore, combineReducers, applyMiddleware} from 'redux'
import ClickReducer from './reducers/Click'

import ClickMiddleware from './middleware/Click'

const appReducer = combineReducers({
  clicks: ClickReducer
});

const middleware = applyMiddleware(
  ClickMiddleware
);

export default createStore(appReducer, middleware)
