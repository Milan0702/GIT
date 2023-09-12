//Write a program to perform the following task.
//1. create one main file named comp.js and three other component files comp1.js comp2.js comp3.js
//2. pass no. 1 ,2,3 from comp,comp1 and comp2 to comp3 file calculate multiplication of the numbers and display the result from comp3 file.
import React,{createContext, useContext} from 'react'
import Comp3 from "./comp3"
const number3=createContext()
const Comp2 = () => {
    
  return (
    <div>
        <number3.Provider value={3}>
            <Comp3 />
        </number3.Provider>
    </div>
  )
}
export {number3}
export default Comp2