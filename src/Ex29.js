//write a program which contains following fields.
//1. dropdown menu to select pizza.
//2. radio button to select size of pizza
//3. text area to add any additional comments for delivery.
//4. display all this data on submitting the form.
import React, { useState } from 'react'

const Ex29 = () => {
    // const [pizza,setPizza]=useState("")
    // const [size,setSize]=useState("")
    // const [name,setName]=useState("")
    let [formdata, setForm] = useState({
        pizza:"",size:"",name:""});

    const handleSubmit=(event)=>{
        event.preventDefault()
        alert(`Your order has been placed.\nYou selected ${formdata.pizza} of ${formdata.size}.\nAdditional delivery info was: ${formdata.name}`) 
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <select onChange={(e)=>{setForm({...formdata,pizza:e.target.value})}}>
                <option disabled selected>---select---</option>
                <option value={"Margherita"}>Margherita</option>
                <option value={"Farm House"}>Farm House</option>
                <option value={"7 cheesy"}>7 cheesy</option>
            </select>
            <br/><br/>
            <label><input type="radio" name={formdata.size} value="Regular" onClick={(e)=>{setForm({...formdata,size:e.target.value})}}/> Regular</label>

            <label><input type="radio" name={formdata.size} value="Medium" onClick={(e)=>{setForm({...formdata,size:e.target.value})}}/>Medium</label>

            <label><input type="radio" name={formdata.size} value="Large" onClick={(e)=>{setForm({...formdata,size:e.target.value})}}/>Large</label>
            <br/><br/>
            <label>Enter additional information for delivery: <textarea cols={15} rows={1}  onChange={(e)=>{setForm({...formdata,name:e.target.value})}}/>
            </label><br/><br/>
            <input type='submit'/>
        </form>
    </div>
  )
}

export default Ex29