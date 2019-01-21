import axios from 'axios'

export const API = {
  fetchAirTraffic (lat, lng, dst) {
    return axios.get(
      `https://cors-anywhere.herokuapp.com/https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=${lat}&lng=${lng}&fDstL=0&fDstU=${dst}`
    )
  }
}
