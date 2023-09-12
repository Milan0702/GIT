//Write a program having buttons to increment and decrement the number by clicking the respective button. Also increment of the number should be performed only if number is <10.And decrement only if >=0

import React,{useState} from 'react'

const Ex13 = () => {
    const [count,SetCount]=useState(0);
    const increment=()=>{
        if(count<10){
            SetCount(count+1)
        }
    }
    const decrement=()=>{
        if(count>0){
            SetCount(count-1)
        }
        
    }
  return (
    <div> <p>{count}</p>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Ex13