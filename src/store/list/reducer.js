import * as actionTypes from './actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_LOCATION: {
      return {
        ...state,
        location: action.location
      }
    }
    default: {
      return state
    }
  }
}
