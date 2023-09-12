import React, { useEffect, useState } from 'react'

const Ex25 = () => {
    const [count,setCount]=useState(0)
    const [calculation,setCal]=useState(0)
    useEffect(()=>{alert("clicked")},[]);  
    const changeCount=()=>{setCount(count+1)}
    const changeCal=()=>{setCal(calculation+1)}
  return (
    <div>
        <button onClick={changeCount}>Button A {count}</button>
        <br></br>
        <button onClick={changeCal}>Button B {calculation}</button>
    </div>
  )
}

export default Ex25