import { FETCH_SINGLE_INFO } from './actionTypes'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_INFO: {
      return {
        ...state,
        fetching: true
      }
    }
    default: {
      return state
    }
  }
}
