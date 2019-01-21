import React, { Component } from 'react'
import Plane from './Plane'
import { getLocation } from '../../store/planeList/actions'
import { connect } from 'react-redux'
import '../../style/planeList/PlaneList.scss'

class PlaneList extends Component {
  componentDidMount () {
    navigator.geolocation.getCurrentPosition(position => {
      this.props.getLocationAndSetAirTraffic({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    })
  }

  render () {
    const planes = !this.props.planeList.fetching ?
      this.props.planeList.airTraffic.map((plane, i) => {
        let { Alt, CNum, Trak } = plane
        let bound = 'Unknown'
        if (Trak > 0 && Trak < 180) {
          bound = 'east'
        } else if (Trak > 180 && Trak < 360) {
          bound = 'west'
        }

        return (
          <Plane
            key={i}
            altitude={Alt}
            code={CNum}
            bound={bound}
          />
        )
      }) :
      (<div className="PlaneList__loading">
        <div className="PlaneList__loading__loader"></div>
      </div>)

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
