import {extend, find} from 'lodash'

import {loadAchievements} from '../Util'

const saveAchievement = achievements => {
  window.localStorage.setItem('achievements', JSON.stringify(achievements))
}

const save = ({action, next, achievement}) => {
  const current_achievements = loadAchievements()
  if (!find(current_achievements, {id: achievement.id})) {
    saveAchievement([...current_achievements, achievement])
  }

  return next(extend({}, action, {achievements: loadAchievements()}))
}

export default () => next => action => {
  switch (action.type) {
    case 'ACHIEVEMENT_FIRST_COIN':
      return save({action, next, achievement: {id: 1, time: new Date()}})
    case 'ACHIEVEMENT_TEN_COINS':
      return save({action, next, achievement: {id: 2, time: new Date()}})
    case 'ACHIEVEMENT_FIRST_ASSET':
      return save({action, next, achievement: {id: 3, time: new Date()}})
    case 'ACHIEVEMENT_FIRST_COMPUTER':
      return save({action, next, achievement: {id: 4, time: new Date()}})
    default:
      return next(action)
  }
}
