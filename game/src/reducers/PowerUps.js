import {loadPowerUpsOwned} from '../Util'

export default (state = loadPowerUpsOwned(), action) => {
  switch (action.type) {
    case 'ADD_POWERUP':
      return action.powerUp
    default:
      return state
  }
}
