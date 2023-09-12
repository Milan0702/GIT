//write a program having two input fields and display the entered value on the same page using hooks.
import React,{useState} from 'react'

const Ex14 = () => {
    const [Firstname,setFirstName]=useState("");
    const [Lastname,setLastName]=useState("");
    
    const handleFirst=(e)=>{
        setFirstName(e.target.value)
    }
    const handleLast=(e)=>{
        setLastName(e.target.value)
    }
  return (
    <div>
    <form>
      <label>Enter your Firstname:
        <input type="text" value={Firstname} onChange={handleFirst}/>
      </label>
      
      <label>Enter your Lastname:
        <input type="text" value={Lastname} onChange={handleLast}/>
      </label>
    </form>
    <h1>First name:{Firstname}</h1>
    <h1>Last name:{Lastname}</h1>
    </div>
  )
}

export default Ex14