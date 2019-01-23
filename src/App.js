import React, { Component } from 'react'
import PlaneList from './components/planeList/PlaneList'
import PlaneInfo from './components/planeInfo/PlaneInfo'
import Footer from './components/footer/Footer'
import './App.css'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlane } from '@fortawesome/free-solid-svg-icons'

library.add(faPlane)

class App extends Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/:id" component={PlaneInfo} />
            <Route path="/" component={PlaneList} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}

export default App
