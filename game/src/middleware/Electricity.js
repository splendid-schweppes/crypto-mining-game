import {extend} from 'lodash'

import {loadElectricity} from '../Util'

export const saveElectricity = electricity =>
  window.localStorage.setItem('electricity', JSON.stringify(electricity))

const save = ({action, next}) => {
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
