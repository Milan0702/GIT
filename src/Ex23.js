//write a program to perform the task as below.
//1. create one main file(parent file) named pc.js
// import two files (c1.js and c2.js).
//2. pass firstname and last name from pc.js file to c1.js and then to c2.js and display both the values from c2.js
import React,{createContext, useContext} from 'react'
import C1 from './c1'
const fname=createContext()
const lname=createContext()
const Ex23 = () => {
  return (
    <div>
        <fname.Provider value="Milan">
        <lname.Provider value="Bhimani">
            <C1 />
        </lname.Provider>
        </fname.Provider>
    </div>
  )
}
export {fname}
export {lname}
export default Ex23
