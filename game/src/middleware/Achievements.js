import {extend} from 'lodash'

import {loadAchievements} from '../Util'

const saveAchievement = achievements => {
  window.localStorage.setItem('achievements', JSON.stringify(achievements))
}

const save = ({action, next}) => {
  saveAchievement([...loadAchievements(), action.achievement])
  return next(extend({}, action, {achievements: loadAchievements()}))
}

export default () => next => action => {
  switch (action.type) {
    case 'ADD_ACHIEVEMENT':
      return save({action, next})
    default:
      return next(action)
  }
}
