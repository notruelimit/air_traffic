import axios from 'axios'

export const API = {
  fetchAirTraffic (url) {
    return axios.get(url)
  }
}
