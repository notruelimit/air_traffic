import React, { Component } from 'react'
import ListItem from './ListItem'
import { getLocation } from '../../store/list/actions'
import { connect } from 'react-redux'

class List extends Component {
  componentDidMount () {
    navigator.geolocation.getCurrentPosition(position => {
      this.props.getLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude })
    })
    // https://adsbexchange.com/api/aircraft/json/lat/37.16611/lon/-119.44944/dist/10/
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
    getLocation: position => {
      dispatch(getLocation(position))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
