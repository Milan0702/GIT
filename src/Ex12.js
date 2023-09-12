import React,{useState} from 'react'

const Ex12 = () => {
    const [count,SetCount]=useState(0);
    const handleCount=()=>{
        SetCount(count+1)
    }
  return (
  <div>
    <p>You Clicked {count} times</p>
    <button onClick={handleCount}>click here</button></div>
  )
}

export default Ex12