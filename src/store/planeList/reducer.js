import { GET_LOCATION, FETCH_AIR_TRAFFIC, SET_AIR_TRAFFIC } from './actionTypes'

let initialState = {
  fetching: false,
  location: {},
  airTraffic: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATION: {
      return {
        ...state,
        location: action.location
      }
    }
    case FETCH_AIR_TRAFFIC: {
      return {
        ...state,
        fetching: true
      }
    }
    case SET_AIR_TRAFFIC: {
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
