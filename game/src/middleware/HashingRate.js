import {extend} from 'lodash'

const defaultRate = 0.005

const loadHashingRate = () =>
  Number(JSON.parse(window.localStorage.getItem('hashingRate') || defaultRate))

const saveClick = click => {
  window.localStorage.setItem('hashingRate', JSON.stringify(loadHashingRate() + defaultRate))
}

const save = ({action, next}) => {
  saveClick(action.click)
  return next(extend({}, action, {hashingRate: loadHashingRate()}))
}

export default () => next => action => {
  switch (action.type) {
    case 'CLICK':
      return save({action, next})
    default:
      return next(action)
  }
}
