import {loadAchievements} from '../Util'

export default (state = loadAchievements(), action) => {
  switch (action.type) {
    case 'ACHIEVEMENT_FIRST_COIN':
    case 'ACHIEVEMENT_TEN_COINS':
    case 'ACHIEVEMENT_FIRST_ASSET':
    case 'ACHIEVEMENT_FIRST_COMPUTER':
      return action.achievements
    default:
      return state
  }
}
