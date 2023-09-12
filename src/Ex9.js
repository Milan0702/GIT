//write a program htat having a array of numbers which will be multiply by each of this number by 5 write a code to display this multiplied numbers using map method
import React from 'react'

const Ex9 = () => {
    const arr=[1,2,3,4,5];
  return (
    <div>
        <h1>Multiplying Array elements by 5.</h1>
        {arr.map((mult)=>{
            return <h2>5*{mult}={mult*5}</h2>
        })}
    </div>
  )
}

export default Ex9