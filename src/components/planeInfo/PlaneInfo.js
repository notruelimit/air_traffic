import React, { Component } from 'react'
import { fetchSinglePlaneInfo, fetchSinglePlaneLogo } from '../../store/planeInfo/actions'
import { connect } from 'react-redux'
import '../../style/planeInfo/PlaneInfo.scss'
import Loading from '../shared/Loading'
import { Link } from 'react-router-dom'

class PlaneInfo extends Component {
  componentDidMount () {
    this.props.fetchSinglePlaneInfo(this.props.match.params.id)
      .then(res => {
        this.props.fetchSinglePlaneLogo(res.data.acList[0].Op)
      })
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
            <div className="PlaneInfo__info__text">
              <p><strong>Manufacturer:</strong> {plane.Man || 'Unknown'}</p>
              <p><strong>Model:</strong> {plane.Mdl || 'Unknown'}</p>
              <p><strong>From:</strong> {plane.From || 'Unknown'} </p>
              <p><strong>To:</strong> {plane.To || 'Unknown'}</p>
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
