import {loadHashingRate} from '../Util'

export default (state = loadHashingRate(), action) => {
  switch (action.type) {
    case 'CLICK':
      return action.hashingRate
    default:
      return state
  }
}
