import React, { Component } from 'react'
import ListItem from './ListItem'
import { getLocation } from '../../store/list/actions'
import { connect } from 'react-redux'

class List extends Component {
  componentDidMount () {
    navigator.geolocation.getCurrentPosition(position => {
      this.props.getLocationAndSetAirTraffic({ latitude: position.coords.latitude, longitude: position.coords.longitude })
    })
  }

  render () {
    return (
      <div>
        <ListItem />
      </div>
    )
  }
}

const mapStateToProps = ({ list }) => {
  return {
    list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getLocationAndSetAirTraffic: position => {
      dispatch(getLocation(position))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
