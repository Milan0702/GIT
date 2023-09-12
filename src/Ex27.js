  import React, { useState } from 'react'

  const Ex27 = () => {
      const [name,setName]=useState("")
      const handleSubmit=(event)=>{
          event.preventDefault()
          alert(`Hello, ${name}`) 
      }
    return (
      <div>
          <form onSubmit={handleSubmit}>
              <label>Enter your name: <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
              </label><br/><br/>
              <input type='submit'/>
          </form>
      </div>
    )
  }
  export default Ex27