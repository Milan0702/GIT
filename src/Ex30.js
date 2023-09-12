//write a program which contains following fields.
//1. dropdown menu to select pizza.
//2. radio button to select size of pizza
//3. text area to add any additional comments for delivery.
//4. display all this data on submitting the form.
import React, { useState } from 'react'

const Ex30 = () => {
    // const [pizza,setPizza]=useState("")
    // const [size,setSize]=useState("")
    // const [name,setName]=useState("")
    let [formdata, setForm] = useState({
        pizza:"",size:"",name:""
    });

    const handleSubmit=(event)=>{
        event.preventDefault()
        alert(`Your order has been placed.\nYou selected ${formdata.pizza=event.target.s.value} of ${formdata.size=event.target.r.value}.\nAddtional Delivery Instructions are: ${formdata.name=event.target.t.value} `)
        //alert(`Your order has been placed.\nYou selected ${formdata.pizza} of ${formdata.size}.\nAdditional delivery info was: ${formdata.name}`) 
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <select name={'s'}>
                <option disabled selected>---select---</option>
                <option >Margherita</option>
                <option >Farm House</option>
                <option >7 cheesy</option>
            </select>
            <br/><br/>
            <label><input type="radio" name={'r'} value="Regular" /> Regular</label>

            <label><input type="radio" name={"r"} value="Medium" />Medium</label>

            <label><input type="radio" name={"r"} value="Large" />Large</label>
            <br/><br/>
            <label>Enter additional information for delivery: <textarea cols={15} rows={1} name={"t"}/>
            </label><br/><br/>
            <input type='submit'/>
        </form>
    </div>
  )
}

export default Ex30