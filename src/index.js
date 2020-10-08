import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './App'
import './style/main.scss'
import { Homepage } from './components/pages/Homepage/Homepage'
import { Introduction } from './components/pages/Introduction/Introduction'

const routing = (
  <Router>
    <Route path='/' component={Homepage} />
    <Route path='/about' component={Homepage} />
    <Route path='/partners' component={Homepage} />
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
