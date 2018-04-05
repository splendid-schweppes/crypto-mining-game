import {loadCoins} from '../Util'

export default (state = loadCoins(), action) => {
  switch (action.type) {
    case 'COINLOG_ADD':
      return action.coins
    default:
      return state
  }
}
