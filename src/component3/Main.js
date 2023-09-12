// write a react program for which a navigation menu of subject names , on clicking any subject , respective file or component should get open in which unit names are displayed using map .
import React from 'react'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import Nopage from './Notfound'
const Main = () => {
    const sub=[{name:'HOME',route:"/",unit:[]},{name:'FSD',route:"/fsd",unit:["NodeJs","ExpressJs","ReactJs","MongoDB"]},{name:'PYTHON',route:"/python",unit:["Machine Learning","Data Analysis","Webscrapping","API"]},{name:'COA',route:"/coa",unit:["abc","xyz","pqr","mno"]},{name:'DM',route:"/dm",unit:["Probability","Statistics","Calculus","ALgebra"]},{name:'TOC',route:"/toc",unit:["NFA","DFA"]}]
  return (
    <BrowserRouter>
    <div>
        <h1>Subjects and units</h1>
        <ul>
        {
            sub.map((value)=>
        {
            return (<li><Link to={value.route}>{value.name}</Link></li>)
        })
        }
        </ul>
        <Routes>
            {
            sub.map((value)=>{
                return (<Route path={value.route} element={Units(value.unit)}></Route>)
            })
            }
            <Route  path="*" element={<Nopage/>}/>
        </Routes>
    </div></BrowserRouter>
  )
}

export default Main

function Units(a){
    return(
        <div>
            {
            a.map((value)=>{
                return (<h1>{value}</h1>)
            })
    }
        </div>
    )
}