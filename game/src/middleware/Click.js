import {extend} from 'lodash'

import {loadClicks} from '../Util'

const saveClick = click => {
  window.localStorage.setItem('clicks', JSON.stringify([...loadClicks(), click]))
}

const save = ({action, next}) => {
  saveClick(action.click)
  return next(extend({}, action, {clicks: loadClicks()}))
}

export default () => next => action => {
  switch (action.type) {
    case 'CLICK':
      return save({action, next})
    default:
      return next(action)
  }
}
