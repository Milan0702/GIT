//write a program to create a digital clock with hours mins and seconds continuously using use effect
import React,{useEffect, useState} from 'react'

const Ex26 = () => {
    const [date,setDate]=useState(new Date());
    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date())
        },1000)
    },[])
  return (
    <div>
        <h1>{date.toLocaleTimeString()}</h1>
    </div>
  )
}

export default Ex26