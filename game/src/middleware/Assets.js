import {extend} from 'lodash'

import {loadAssets} from '../Util'

const saveAsset = assets => {
  window.localStorage.setItem('assets', JSON.stringify(assets))
}

const save = ({action, next}) => {
  saveAsset([...loadAssets(), action.asset])
  return next(extend({}, action, {assets: loadAssets()}))
}

export default () => next => action => {
  switch (action.type) {
    case 'ADD_ASSET':
      return save({action, next})
    default:
      return next(action)
  }
}
