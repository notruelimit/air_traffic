import { GET_LOCATION, FETCH_AIR_TRAFFIC } from './actionTypes'

export const getLocation = location => ({
  type: GET_LOCATION,
  location
})

export const fetchAirTraffic = url => ({
  type: FETCH_AIR_TRAFFIC,
  url
})
