
import React from 'react'
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom'
import Ex33 from './Ex33'
import Home from './Home'

const Ex33_router = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/' element={<Ex33 />}/>
                <Route exact path="/Home" element={<Home />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default Ex33_router