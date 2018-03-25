import {loadHashingRate} from '../Util'

export default (state = loadHashingRate(), action) => {
  switch (action.type) {
    case 'CLICK':
    case 'DECREASE_HASHING_RATE':
      return action.hashingRate
    default:
      return state
  }
}
