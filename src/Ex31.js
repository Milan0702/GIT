//write a form with following field 
//name,lastname,email,password,confirm password,confirm pass, 
//values of password and confirm pass must be same if not then display error msg in alert as pass and conf pass must be same other wise display submitted values in alert box.
import React, { useState } from 'react'

const Ex31 = () => {
    const [formdata,setForm]=useState({Firstname:"",Lastname:"",Email:"",Password:"",ConfirmPassword:""})
    const handleSubmit=(event)=>{
        event.preventDefault()
        if(event.target.p1.value!==event.target.p2.value){
            alert("Password and confirm password must be same!!")
        }
        else{
            alert(`First name: ${formdata.Firstname=event.target.fn.value}\nLastname: ${formdata.Lastname=event.target.ln.value}\nEmail:${formdata.Email=event.target.e.value}\nPassword: ${formdata.Password=event.target.p1.value} `)
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            Enter Firstname: <input type='text' name={'fn'}/><br/><br/>
            Enter Lastname: <input type='text' name={'ln'}/><br/><br/>
            Enter Email: <input type='email' name={'e'}/><br/><br/>
            Enter Password: <input type="password" name={'p1'}/><br/><br/>
            Confirm Password: <input type="password" name={'p2'}/><br/><br/>
            <input type='submit'/>        
        </form>
    </div>
  )
}

export default Ex31