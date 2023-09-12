import React, { useState } from 'react'

const E2 = () => {
    const [formdata,setForm]=useState({pizza:"",size:"",info:""})
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert(`You have selected ${formdata.size} sized ${formdata.pizza}\nAdditional info:${formdata.info}!`)
    }
  return (
    <div>  
        <form onSubmit={handleSubmit}>
            Select Your Pizza: <select onChange={(e)=>{setForm({...formdata,pizza:e.target.value})}}>
                <option selected disabled>------select------</option>
                <option value={'margherita'}>Margherita</option>
                <option value={'peppy paneer'}>peppy paneer</option>
                <option value={'7 cheesy'}>7 cheesy</option>
            </select><br/>
            Select size:
            <label><input name="a" type="radio" value={"small"} onClick={(e)=>{setForm({...formdata,size:e.target.value})}}/>small</label><label><input name="a" type="radio" value={"medium"} onClick={(e)=>{setForm({...formdata,size:e.target.value})}}/>medium</label><label><input name="a" type="radio" value={"large"} onClick={(e)=>{setForm({...formdata,size:e.target.value})}}/>large</label>
            <br/>
            Enter additional delivery info:<textarea cols={10} rows={2} onChange={(e)=>{setForm({...formdata,info:e.target.value})}}/>
            <br/>
            <input type='submit'/>
        </form>
    </div>
  )
}

export default E2