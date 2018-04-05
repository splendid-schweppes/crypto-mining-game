import {extend} from 'lodash'

import {loadElectricity, saveElectricity} from '../Util'

const save = ({action, next}) => {
  console.log('save electricity', action)
  saveElectricity([...loadElectricity(), action.electricity])
  return next(extend({}, action, {powerUp: loadElectricity()}))
}

export default () => next => action => {
  switch (action.type) {
    case 'ADD_ELECTRICITY':
      return save({action, next})
    default:
      return next(action)
  }
}
