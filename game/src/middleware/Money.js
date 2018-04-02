import {extend} from 'lodash'

import {loadMoney} from '../Util'
import {shop_commission_percent} from '../Config'

const saveMoney = count => {
  window.localStorage.setItem('money', JSON.stringify(count))
}

const save = ({action, next}) => {
  const money_from_coins = action.count * action.rate
  const commission_amount = money_from_coins * shop_commission_percent / 100
  const money = money_from_coins - commission_amount

  saveMoney(loadMoney() + money)
  return next(extend({}, action, {money: loadMoney()}))
}


const remove = ({action, next}) => {
  saveMoney(loadMoney() - action.amount)
  return next(extend({}, action, {money: loadMoney()}))
}

export default () => next => action => {
  switch (action.type) {
    case 'SELL_COINS':
      return save({action, next})
    case 'REMOVE_MONEY':
      return remove({action, next})
    default:
      return next(action)
  }
}
