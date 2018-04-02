import {last} from 'lodash'
import {loadClicks} from '../Util'

export default (state = {data: loadClicks(), latestClick: last(loadClicks())}, action) => {
  switch (action.type) {
    case 'CLICK':
    case 'REPLAY_CLICK':
      return {data: [...action.clicks], latestClick: action.click}
    default:
      return state
  }
}
