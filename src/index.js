import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './style/main.scss'
import 'semantic-ui-css/semantic.min.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Homepage } from './components/pages/Homepage/Homepage'
import { Hytera } from './components/pages/Hytera/Hytera'
import { Motorola } from './components/pages/Motorola/Motorola'

const routing = (
  <Router>
    <Route path='/' component={Homepage} exact />
    <Route path='/about' component={Homepage} />
    <Route path='/partners' component={Homepage} />
    <Route path='/services' component={Homepage} />
    <Route path='/projects' component={Homepage} />
    <Route path='/contact' component={Homepage} />
    <Route path='/hytera' component={Hytera} />
    <Route path='/motorola' component={Motorola} />
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
