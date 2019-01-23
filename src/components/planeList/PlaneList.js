import React, { Component } from 'react'
import Plane from './Plane'
import { getLocation, fetchAirTraffic } from '../../store/planeList/actions'
import { connect } from 'react-redux'
import '../../style/planeList/PlaneList.scss'
import { Link } from 'react-router-dom'
import Loading from '../shared/Loading'

class PlaneList extends Component {
  state = {
    refreshTimer: 60
  }

  componentDidMount () {
    if (this.props.planeList.airTraffic.length < 1) {
      navigator.geolocation.getCurrentPosition(position => {
        this.props.getLocationAndSetAirTraffic({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
        this.refreshListCountdown()
      }, () => console.log('heyho'))
    }
  }

  componentWillUnmount () {
    clearInterval(this.state.interval)
  }

  refreshListCountdown = (refreshTimer = this.state.refreshTimer) => {
    let interval = setInterval(() => {
      if (refreshTimer < 1) {
        this.refreshList()
        clearInterval(interval)
      } else {
        --refreshTimer
      }
    }, 1000)
    this.setState(prevState => ({ ...prevState, interval }))
  }

  refreshList = () => {
    this.props.fetchAirTraffic({
      latitude: this.props.planeList.location.latitude,
      longitude: this.props.planeList.location.longitude
    })
    this.refreshListCountdown(this.state.refreshTimer)
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
    },
    fetchAirTraffic: location => {
      dispatch(fetchAirTraffic(location))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaneList)
