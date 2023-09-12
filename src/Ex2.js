import React from 'react'

const Ex2 = (props) => {
  return (
    <div>
        <ul style={{backgroundColor:"black",color:"yellow"}}>
            <li>Rollno:  {props.rollno}</li>
            <li>Name: {props.name}</li>
            <li>Total: {props.marks}</li>
        </ul>
    </div>
  )
}

export default Ex2