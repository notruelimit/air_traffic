import API from '../../api/planeInfo'
import { FETCH_SINGLE_INFO } from './actionTypes'

export const fetchSingleInfo = id => dispatch => {
  dispatch({ type: FETCH_SINGLE_INFO })
  API.fetchSingleInfo(id)
    .then(res => {
      console.log(res.data)
    })
}
