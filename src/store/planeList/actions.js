import { GET_LOCATION, FETCH_AIR_TRAFFIC, SET_AIR_TRAFFIC } from './actionTypes'
import { API } from '../../api/planeList'

export const getLocation = location => dispatch => {
  dispatch(fetchAirTraffic(location))
  dispatch({ type: GET_LOCATION, location })
}

const fetchAirTraffic = location => dispatch => {
  dispatch({ type: FETCH_AIR_TRAFFIC })
  API.fetchAirTraffic(location.latitude, location.longitude, 100)
    .then(res => {
      dispatch(setAirTraffic(res.data.acList))
    })
}
  
const setAirTraffic = airTraffic => {
  airTraffic = airTraffic.map(plane => ({
    Id: plane.Icao,
    Trak: plane.Trak,
    Alt: plane.Alt,
    CNum: plane.CNum
  }))
  return {
    type: SET_AIR_TRAFFIC,
    airTraffic
  }
}
