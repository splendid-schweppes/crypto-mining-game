
const defaultRate = 0.005

// Copypaste from middleware
const loadHashingRate = () =>
  Number(JSON.parse(window.localStorage.getItem('hashingRate') || defaultRate))

export default (state = loadHashingRate(), action) => {
  switch (action.type) {
    case 'CLICK':
      return action.hashingRate
    default:
      return state
  }
}
