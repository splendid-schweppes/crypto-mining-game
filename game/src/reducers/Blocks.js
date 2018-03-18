
const defaultBlocks = 0

// Copypaste from middleware
const loadBlocks = () =>
  Number(JSON.parse(window.localStorage.getItem('blocks') || defaultBlocks))

export default (state = loadBlocks(), action) => {
  switch (action.type) {
    case 'SOLVE_BLOCK':
      console.log('action', action)
      console.log('state', state)
      return action.blocks
    default:
      return state
  }
}
