import React, { useState } from 'react'

const E3 = () => {
    const [formdata,setForm]=useState({pizza:"",size:"",info:""})
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert(`You have selected ${formdata.size=e.target.a.value} sized ${formdata.pizza=e.target.s.value}\nAdditional info:${formdata.info=e.target.i.value}!`)
    }
  return (
    <div>  
        <form onSubmit={handleSubmit}>
            Select Your Pizza: <select name={'s'}>
                <option selected disabled>------select------</option>
                <option value={'margherita'}>Margherita</option>
                <option value={'peppy paneer'}>peppy paneer</option>
                <option value={'7 cheesy'}>7 cheesy</option>
            </select><br/>
            Select size:
            <label><input name="a" type="radio" value={"small"}/>small</label><label><input name="a" type="radio" value={"medium"} onClick={(e)=>{setForm({...formdata,size:e.target.value})}}/>medium</label><label><input name="a" type="radio" value={"large"} onClick={(e)=>{setForm({...formdata,size:e.target.value})}}/>large</label>
            <br/>
            Enter additional delivery info:<textarea name={'i'} cols={10} rows={2} />
            <br/>
            <input type='submit'/>
        </form>
    </div>
  )
}

export default E3