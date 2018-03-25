import {loadAchievements} from '../Util'

export default (state = loadAchievements(), action) => {
  switch (action.type) {
    case 'ADD_ACHIEVEMENT':
      return action.achievements
    default:
      return state
  }
}
