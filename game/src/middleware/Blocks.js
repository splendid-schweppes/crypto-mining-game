import {extend} from 'lodash'

import {loadBlocks} from '../Util'

const saveClick = count => {
  window.localStorage.setItem('blocks', JSON.stringify(loadBlocks() + count))
}

const save = ({action, next}) => {
  saveClick(action.count)
  return next(extend({}, action, {blocks: loadBlocks()}))
}

const resetBlock = ({action, next}) => {
  window.localStorage.setItem('blocks', '0')
  return next(extend({}, action, {blocks: 0}))
}

export default () => next => action => {
  switch (action.type) {
    case 'SOLVE_BLOCK':
      return save({action, next})
    case 'RESET_BLOCK':
      return resetBlock({action, next})
    default:
      return next(action)
  }
}
