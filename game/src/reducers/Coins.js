import {loadCoins} from '../Util'

export default (state = loadCoins(), action) => {
  switch (action.type) {
    case 'GET_COIN':
      return action.coins
    default:
      return state
  }
}