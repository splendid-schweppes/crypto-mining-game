import {extend} from 'lodash'

import {defaultHashingRate} from '../Config'
import {loadHashingRate} from '../Util'

const saveClick = () => {
  window.localStorage.setItem('hashingRate', JSON.stringify(loadHashingRate() + defaultHashingRate))
}

const save = ({action, next}) => {
  saveClick()
  return next(extend({}, action, {hashingRate: loadHashingRate()}))
}

export default () => next => action => {
  switch (action.type) {
    case 'CLICK':
      return save({action, next})
    default:
      return next(action)
  }
}
