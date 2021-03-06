import {extend, find} from 'lodash'

import {loadAchievements} from '../Util'

const saveAchievement = achievements => {
  window.localStorage.setItem('achievements', JSON.stringify(achievements))
}

const save = ({action, next, id}) => {
  const current_achievements = loadAchievements()
  if (!find(current_achievements, {id})) {
    saveAchievement([...current_achievements, {id, time: new Date()}])
  }

  return next(extend({}, action, {achievements: loadAchievements()}))
}

export default () => next => action => {
  switch (action.type) {
    case 'ACHIEVEMENT_FIRST_COIN':
      return save({action, next, id: 1})
    case 'ACHIEVEMENT_TEN_COINS':
      return save({action, next, id: 2})
    case 'ACHIEVEMENT_FIRST_ASSET':
      return save({action, next, id: 3})
    case 'ACHIEVEMENT_FIRST_COMPUTER':
      return save({action, next, id: 4})
    case 'ACHIEVEMENT_FIFTY_COINS':
      return save({action, next, id: 5})
    case 'ACHIEVEMENT_HUNDRED_COINS':
      return save({action, next, id: 10})
    case 'ACHIEVEMENT_THOUSAND_COINS':
      return save({action, next, id: 15})
    case 'ACHIEVEMENT_MILLION_COINS':
      return save({action, next, id: 20})
    default:
      return next(action)
  }
}
