//create a formm for selecting any of pizza size using radio button on submitting the form.
import React, { useState } from 'react'

const Ex28 = () => { 
    const [size,setName]=useState("")
  return (
    <div>
        <form onSubmit={(e) => {
            e.preventDefault()
            alert(`You Selected ${size}`)
        }}>
            <label><input type="radio" name={size} value="Regular" onClick={(e)=>{setName(e.target.value)}}/> Regular</label>

            <label><input type="radio" name={size} value="Medium" onClick={(e)=>{setName(e.target.value)}}/>Medium</label>

            <label><input type="radio" name={size} value="Large" onClick={(e)=>{setName(e.target.value)}}/>Large</label>
            <br/><br/>
            <input type='submit'/> 

        </form>
    </div>
  )
}

export default Ex28