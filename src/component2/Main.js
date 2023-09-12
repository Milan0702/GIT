//write a react program for which a navigation menu of subject names, on clicking any subject,respective file of component should get oppened in which unit names are displayed of subjects using map function.
import React from 'react'
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom'
import Coa from './Coa.js'
import Dm from "./Dm.js"
import Python from "./Python.js"
import Toc from "./Toc.js"
import Fsd from './Fsd.js'
import Nopage from './Notfound.js'
import Home from './Home.js'
const Main = () => {
  return (
    <div>
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/fsd">FSD</Link></li>
                    <li><Link to="/python">PYTHON</Link></li>
                    <li><Link to="/coa">COA</Link></li>
                    <li><Link to="/toc">TOC</Link></li>
                    <li><Link to="/dm">DM</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path='/' element={<Home />}/>
                
                <Route path='/fsd' element={<Fsd />}/>
                
                <Route path='/python' element={<Python />}/>
                
                <Route path='/coa' element={<Coa />}/>

                <Route path='/toc' element={<Toc />}/>
                
                <Route path='/dm' element={<Dm />}/>

                 <Route path='*' element={<Nopage />}/>

            </Routes>
        </Router>

    </div>
  )
}

export default Main