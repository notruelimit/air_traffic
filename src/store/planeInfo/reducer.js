import { FETCH_SINGLE_PLANE_INFO, SET_SINGLE_PLANE_INFO, FETCH_SINGLE_PLANE_LOGO, SET_SINGLE_PLANE_LOGO } from './actionTypes'

const initialState = {
  fetching: false,
  plane: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_PLANE_INFO: {
      return {
        ...state,
        fetching: true
      }
    }
    case SET_SINGLE_PLANE_INFO: {
      state.plane = {}
      return {
        ...state,
        plane: action.plane,
        fetching: false
      }
    }
    case FETCH_SINGLE_PLANE_LOGO: {
      return {
        ...state,
        fetchingLogo: true
      }
    }
    case SET_SINGLE_PLANE_LOGO: {
      return {
        ...state,
        logo: action.logo,
        fetchingLogo: false
      }
    }
    default: {
      return state
    }
  }
}
