import { GET_LOCATION, FETCH_AIR_TRAFFIC, SET_AIR_TRAFFIC } from './actionTypes'
import { API } from '../../api/list'

export const getLocation = location => dispatch => {
  dispatch(fetchAirTraffic(
    location,
    'https://cors-anywhere.herokuapp.com/https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json'
  ))
  dispatch({ type: GET_LOCATION, location })
}

const fetchAirTraffic = (location, url) => dispatch => {
  dispatch({ type: FETCH_AIR_TRAFFIC })
  API.fetchAirTraffic(url)
    .then(res => {
      dispatch(setAirTraffic(location, res.data.acList))
    })
}
  
const setAirTraffic = ({ latitude, longitude }, airTraffic) => {
  airTraffic = airTraffic.filter(plane => (
    plane.Lat >= latitude - 1 && plane.Lat <= latitude + 1 &&
    plane.Long >= longitude - 1 && plane.Long <= longitude + 1
  ))
  return {
    type: SET_AIR_TRAFFIC,
    airTraffic
  }
}
