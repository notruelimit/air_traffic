import React, { Component } from 'react'
import { fetchSinglePlaneInfo, fetchSinglePlaneLogo } from '../../store/planeInfo/actions'
import { connect } from 'react-redux'
import '../../style/planeInfo/PlaneInfo.scss'
import Loading from '../shared/Loading'
import { Link } from 'react-router-dom'

class PlaneInfo extends Component {
  componentDidMount () {
    if (this.props.planeInfo.plane) {
      this.props.fetchSinglePlaneInfo(this.props.match.params.id)
        .then(() => {
          this.props.fetchSinglePlaneLogo(this.props.planeInfo.plane.Op)
        })
    }
    document.addEventListener('keydown', this.returnToList)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.returnToList)
  }

  returnToList = event => {
    if (event.key === 'Escape' || event.key === 'Backspace') {
      this.props.history.push('/')
    }
  }

  render () {
    let plane = this.props.planeInfo.plane
    
    return (
      <div className="PlaneInfo">
      {
        !this.props.planeInfo.fetching && !this.props.planeInfo.fetchingLogo ?
        <div>
          <div className="PlaneInfo__breadcrumbs">
            <p><Link to="/">Plane List</Link> &gt; {plane.Op || 'Unknown'}</p>
          </div>
          <div className="PlaneInfo__info">
            <div>
              {
                this.props.planeInfo.logo ?
                <img src={this.props.planeInfo.logo} alt="Not Found"/>
                :
                <img
                  src="http://www.inimco.com/wp-content/themes/consultix/images/no-image-found-360x260.png"
                  alt="Not Found"
                />
              }
            </div>
            <div>
              <p>Manufacturer: {plane.Man || 'Unknown'}</p>
              <p>Model: {plane.Mdl || 'Unknown'}</p>
              <p>From: {plane.From || 'Unknown'} </p>
              <p>To: {plane.To || 'Unknown'}</p>
            </div>
          </div>
        </div>
        :
        <Loading />
      }
      </div>
    )
  }
}

const mapStateToProps = ({ planeInfo }) => ({ planeInfo })

const mapDispatchToProps = dispatch => ({
  fetchSinglePlaneInfo: id => dispatch(fetchSinglePlaneInfo(id)),
  fetchSinglePlaneLogo: companyName => dispatch(fetchSinglePlaneLogo(companyName))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaneInfo)
