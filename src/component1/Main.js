import React from 'react'
import Contact from './Contact'
import Shop from './Shop'
import Home from './Home'
import Nopage from './Nopage'
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom'
const Main = () => {
  return (
    <div>
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path='/' element={<Home />}/>
                
                <Route path='/contact' element={<Contact />}/>
                
                <Route path='/shop' element={<Shop />}/>

                 <Route path='*' element={<Nopage />}/>

            </Routes>
        </Router>

    </div>
  )
}

export default Main