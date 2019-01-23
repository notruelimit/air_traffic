import React, { Component } from 'react'
import PlaneList from './components/planeList/PlaneList'
import PlaneInfo from './components/planeInfo/PlaneInfo'
import './App.css'
import { Route, BrowserRouter } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlane } from '@fortawesome/free-solid-svg-icons'

library.add(faPlane)

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/:id" component={PlaneInfo} />
          <Route exact path="/" component={PlaneList} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
