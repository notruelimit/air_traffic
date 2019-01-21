import axios from 'axios'

export const API = {
  fetchAirTraffic () {
    return axios.get('https://cors-anywhere.herokuapp.com/https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json')
  }
}
