import React, { Component } from 'react'
import Plane from './Plane'
import { getLocation } from '../../store/planeList/actions'
import { connect } from 'react-redux'
import '../../style/planeList/PlaneList.scss'
import { Link } from 'react-router-dom'
import Loading from '../shared/Loading'

class PlaneList extends Component {
  componentDidMount () {
    navigator.geolocation.getCurrentPosition(position => {
      this.props.getLocationAndSetAirTraffic({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    }, () => console.log('heyho'))
  }

  componentWillUnmount () {
    
  }

  render () {
    let planes = !this.props.planeList.fetching ?
      this.props.planeList.airTraffic.map((plane, i) => {
        let { Alt, CNum, Trak, Id } = plane
        let bound = 'Unknown'
        if (Trak > 0 && Trak < 180) {
          bound = 'east'
        } else if (Trak > 180 && Trak < 360) {
          bound = 'west'
        }

        return (
          <div
            key={i}
            onClick={this.loadPlaneInfo}
          >
            <Link
              to={`/${Id}`}
              style={{textDecoration: 'none', color: 'black'}}
            >
              <Plane
                altitude={Alt}
                code={CNum}
                bound={bound}
              />
            </Link>
          </div>
        )
      }) :
      <Loading />

    return (
      <div className="PlaneList">
        {planes}
      </div>
    )
  }
}

const mapStateToProps = ({ planeList }) => {
  return {
    planeList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getLocationAndSetAirTraffic: position => {
      dispatch(getLocation(position))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaneList)
