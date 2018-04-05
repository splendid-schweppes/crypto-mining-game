import {loadElectricity} from '../Util'

export default (state = loadElectricity(), action) => {
  switch (action.type) {
    case 'ADD_ELECTRICITY':
      return action.electricity
    default:
      return state
  }
}
