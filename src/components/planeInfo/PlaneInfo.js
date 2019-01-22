import React, { Component } from 'react'
import { fetchSingleInfo } from '../../store/planeInfo/actions'
import { connect } from 'react-redux'

class PlaneInfo extends Component {
  componentDidMount () {
    this.props.fetchSingleInfo(this.props.match.params.id)
  }

  render () {
    return (
      <div>
        <h1>{this.props.match.params.id}</h1>
        <h1>{JSON.stringify(this.props.planeInfo)}</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ planeInfo }) => ({ planeInfo })

const mapDispatchToProps = dispatch => ({
  fetchSingleInfo: id => dispatch(fetchSingleInfo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaneInfo)
