import { GET_LOCATION, FETCH_AIR_TRAFFIC, SET_AIR_TRAFFIC } from './actionTypes'
import { API } from '../../api/planeList'

export const getLocation = location => dispatch => {
  dispatch(fetchAirTraffic(location))
  dispatch({ type: GET_LOCATION, location })
}

const fetchAirTraffic = location => dispatch => {
  dispatch({ type: FETCH_AIR_TRAFFIC })
  API.fetchAirTraffic()
    .then(res => {
      dispatch(setAirTraffic(location, res.data.acList))
    })
}
  
const setAirTraffic = ({ latitude, longitude }, airTraffic) => {
  airTraffic = airTraffic.filter(plane => (
    plane.Lat >= latitude - 1 && plane.Lat <= latitude + 1 &&
    plane.Long >= longitude - 1 && plane.Long <= longitude + 1
  )).map(plane => ({
    Id: plane.Id,
    Trak: plane.Trak,
    Alt: plane.Alt,
    CNum: plane.CNum
  }))
  return {
    type: SET_AIR_TRAFFIC,
    airTraffic
  }
}
