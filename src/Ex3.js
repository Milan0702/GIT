// write a react code ex3.js to print cars brand name and model name which are parse as as props using JSON
import React from 'react'

const Ex3 = (props) => {
  return (
    <div>
        <h1>Brand: {props.json.brand}</h1>
        <h2>Model: {props.json.model}</h2>
        
    </div>
  )
}

export default Ex3