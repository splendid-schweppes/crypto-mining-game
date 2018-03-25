import {extend} from 'lodash'

import {loadCoins} from '../Util'

const saveCoin = count => {
  window.localStorage.setItem('coins', JSON.stringify(count))
}

const save = ({action, next}) => {
  saveCoin(loadCoins() + 1)
  return next(extend({}, action, {coins: loadCoins()}))
}

const remove = ({action, next}) => {
  saveCoin(loadCoins() - action.count)
  return next(extend({}, action, {coins: loadCoins()}))
}

export default () => next => action => {
  switch (action.type) {
    case 'GET_COIN':
      return save({action, next})
    case 'REMOVE_COINS':
      return remove({action, next})
    default:
      return next(action)
  }
}
