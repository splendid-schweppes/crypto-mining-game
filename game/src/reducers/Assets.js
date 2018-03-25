import {loadAssets} from '../Util'

export default (state = loadAssets(), action) => {
  switch (action.type) {
    case 'ADD_ASSET':
      return action.assets
    default:
      return state
  }
}
