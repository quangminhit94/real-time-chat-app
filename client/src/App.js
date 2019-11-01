import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Join from './components/Join'
import Chat from './components/Chat'

const App = () => {
  return ( 
    <Router>
      <div>
        <Route path="/" exact component={Join} />   
        <Route path="/chat" component={Chat} />   
      </div>
    </Router>
  )
}
export default App