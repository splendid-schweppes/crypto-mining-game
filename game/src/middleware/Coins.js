import {extend} from 'lodash'

import {loadCoins} from '../Util'

const saveCoin = count => {
  window.localStorage.setItem('coins', JSON.stringify(loadCoins() + 1))
}

const save = ({action, next}) => {
  saveCoin()
  return next(extend({}, action, {coins: loadCoins()}))
}

export default () => next => action => {
  switch (action.type) {
    case 'GET_COIN':
      return save({action, next})
    case 'RESET_BLOCK':
    default:
      return next(action)
  }
}
