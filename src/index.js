import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './App'
import './style/main.scss'
import { Homepage } from './components/pages/Homepage/Homepage'

const routing = (
  <Router>
    <Route path='/' component={Homepage} exact />
    <Route path='/about' component={Homepage} />
    <Route path='/partners' component={Homepage} />
    <Route path='/services' component={Homepage} />
    <Route path='/projects' component={Homepage} />
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
