import React, { Component } from 'react'
import PlaneList from './components/planeList/PlaneList'
import './App.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlane } from '@fortawesome/free-solid-svg-icons'

library.add(faPlane)

class App extends Component {
  render () {
    return (
      <div className="App">
        <PlaneList />
      </div>
    )
  }
}

export default App
