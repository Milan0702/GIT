//write a program to create an array of strings and convert it in uppercase using map method.
import React from 'react'

const Ex8 = () => {
    const arr=["red","yellow","black"];
  return (
    <div>
        <h1>Program to create an array of strings and convert it in uppercase using map method.</h1>
        {arr.map((item)=>{
            return <h2>Array Element={item.toUpperCase()}</h2>
        }
        )}
    </div>
  )
}

export default Ex8