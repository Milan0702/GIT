//Write a react js script to display values on console while changing it in text box.
import React from 'react'

const Ex6 = () => {
    function handleChange(e){
        
        console.log(e.target.value);
      }
  return (
    <div>
        <form onClick={handleChange}>
            <input type='text' name='Firstname' onChange={handleChange}/>
        </form>
    </div>
  )
}

export default Ex6