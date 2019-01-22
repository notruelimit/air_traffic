import API from '../../api/planeInfo'
import { FETCH_SINGLE_PLANE_INFO, SET_SINGLE_PLANE_INFO, FETCH_SINGLE_PLANE_LOGO, SET_SINGLE_PLANE_LOGO } from './actionTypes'

export const fetchSinglePlaneInfo = id => dispatch => {
  dispatch({ type: FETCH_SINGLE_PLANE_INFO })
  return API.fetchSinglePlaneInfo(id)
    .then(res => {
      dispatch(setSinglePlaneInfo(res.data.acList[0]))
      return res
    })
}

const setSinglePlaneInfo = plane => ({
  type: SET_SINGLE_PLANE_INFO,
  plane
})

export const fetchSinglePlaneLogo = companyName => dispatch => {
  dispatch({ type: FETCH_SINGLE_PLANE_LOGO })
  API.fetchSinglePlaneLogo(companyName)
    .then(res => {
      dispatch(setSinglePlaneLogo(res.data.logo))
    })
    .catch(() => {
      dispatch(setSinglePlaneLogo(null))
    })
}

const setSinglePlaneLogo = logo => ({
  type: SET_SINGLE_PLANE_LOGO,
  logo
})
