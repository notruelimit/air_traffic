import API from '../../api/planeInfo'
import { FETCH_SINGLE_PLANE_INFO, SET_SINGLE_PLANE_INFO, FETCH_SINGLE_PLANE_LOGO, SET_SINGLE_PLANE_LOGO } from './actionTypes'

export const fetchSinglePlaneInfo = id => dispatch => {
  dispatch({ type: FETCH_SINGLE_PLANE_INFO })
  return API.fetchSinglePlaneInfo(id)
    .then(res => {
      if (res.data.acList[0]) {
        dispatch(setSinglePlaneInfo(res.data.acList[0]))
      } else {
        dispatch(setSinglePlaneInfo('Unknown'))
      }
      return res
    })
}

const setSinglePlaneInfo = plane => ({
  type: SET_SINGLE_PLANE_INFO,
  plane
})

export const fetchSinglePlaneLogo = (companyName) => dispatch => {
  dispatch({ type: FETCH_SINGLE_PLANE_LOGO })
  API.fetchSinglePlaneLogo(companyName)
    .then(res => {
      if (companyName) {
        dispatch(setSinglePlaneLogo(res.data.logo))
      } else {
        dispatch(setSinglePlaneLogo(null))
      }
    })
    .catch(() => {
      dispatch(setSinglePlaneLogo(null))
    })
}

const setSinglePlaneLogo = logo => ({
  type: SET_SINGLE_PLANE_LOGO,
  logo
})
