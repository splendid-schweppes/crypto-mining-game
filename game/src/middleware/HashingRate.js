import {extend} from 'lodash'

import {defaultHashingRate} from '../Config'
import {loadHashingRate} from '../Util'

const saveClick = (rate) => {
  window.localStorage.setItem('hashingRate', JSON.stringify(rate))
}

const increase = ({action, next}) => {
  saveClick(loadHashingRate() + defaultHashingRate)
  return next(extend({}, action, {hashingRate: loadHashingRate()}))
}

const decrease = ({action, next}) => {
  const rate = loadHashingRate() - defaultHashingRate
  if (rate >= 0) {
    saveClick(rate)
  }
  return next(extend({}, action, {hashingRate: loadHashingRate()}))
}

export default () => next => action => {
  switch (action.type) {
    case 'CLICK':
      return increase({action, next})
    case 'DECREASE_HASHING_RATE':
      return decrease({action, next})
    default:
      return next(action)
  }
}
