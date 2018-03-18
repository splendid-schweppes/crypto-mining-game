
// Copypaste from middleware
const loadClicks = () =>
  JSON.parse(window.localStorage.getItem('clicks') || '[]')

export default (state = {data: loadClicks(), latestClick: {}}, action) => {
  switch (action.type) {
    case 'CLICK':
      return {data: [...action.clicks], latestClick: action.click}
    default:
      return state
  }
}
