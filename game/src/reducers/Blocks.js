import {loadBlocks} from '../Util'

export default (state = loadBlocks(), action) => {
  switch (action.type) {
    case 'SOLVE_BLOCK':
      return action.blocks
    default:
      return state
  }
}
