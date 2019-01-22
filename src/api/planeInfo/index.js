import axios from 'axios'

export default {
  fetchSinglePlaneInfo (id) {
    return axios.get(
      `https://cors-anywhere.herokuapp.com/https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?fIcoQ=${id}`
    )
  },

  fetchSinglePlaneLogo (name) {
      return axios.get(`https://cors-anywhere.herokuapp.com/https://company.clearbit.com/v1/domains/find?name=${name}`, {
        headers: {
          'Authorization': 'Bearer sk_2cd8855a77c249032c48116df687cd2f'
        }
      })
  }
}
