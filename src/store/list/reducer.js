import * as actionTypes from './actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_LOCATION: {
      return {
        ...state,
        location: action.location
      }
    }
    case actionTypes.FETCH_AIR_TRAFFIC: {
      return {
        ...state,
        fetching: true
      }
    }
    case actionTypes.SET_AIR_TRAFFIC: {
      return {
        ...state,
        airTraffic: action.airTraffic,
        fetching: false
      }
    }
    default: {
      return state
    }
  }
}
