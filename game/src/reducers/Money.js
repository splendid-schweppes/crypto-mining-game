import {loadMoney} from '../Util'

export default (state = loadMoney(), action) => {
  switch (action.type) {
    case 'SELL_COINS':
    case 'REMOVE_MONEY':
      return action.money
    default:
      return state
  }
}
