import {extend, random} from 'lodash'

import {loadMoney} from '../Util'

const coinConversionRate = random(10, 100, true)

const saveCoin = count => {
  window.localStorage.setItem('money', JSON.stringify(loadMoney() + count))
}

const save = ({action, next}) => {
  saveCoin(action.count * coinConversionRate)
  return next(extend({}, action, {money: loadMoney()}))
}

export default () => next => action => {
  switch (action.type) {
    case 'SELL_COINS':
      return save({action, next})
    default:
      return next(action)
  }
}
