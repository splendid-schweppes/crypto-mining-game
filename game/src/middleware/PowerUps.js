import {extend} from 'lodash'

import {loadPowerUpsOwned, savePowerUpsOwned} from '../Util'

const save = ({action, next}) => {
  savePowerUpsOwned([...loadPowerUpsOwned(), action.powerUp])
  return next(extend({}, action, {powerUp: loadPowerUpsOwned()}))
}

export default () => next => action => {
  switch (action.type) {
    case 'ADD_POWERUP':
      return save({action, next})
    default:
      return next(action)
  }
}
