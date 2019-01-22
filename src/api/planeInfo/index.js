import axios from 'axios'

export default {
  fetchSingleInfo (id) {
    return axios.get(
      `https://cors-anywhere.herokuapp.com/https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?fIcoQ=${id}`
    )
  }
}
