import {extend} from 'lodash'

import {loadCoinLog} from '../Util'

const saveCoin = count => {
  window.localStorage.setItem('coinlog', JSON.stringify(count))
}

const save = ({action, next}) => {
  saveCoin(loadCoinLog() + 1)
  return next(extend({}, action, {coins: loadCoinLog()}))
}

export default () => next => action => {
  switch (action.type) {
    case 'COINLOG_ADD':
      return save({action, next})
    default:
      return next(action)
  }
}
