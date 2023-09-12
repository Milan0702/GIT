//CREATE A FORM THAT CONTAINS FOLLOWING FIELDS.
//1. FIRSTNAME 2. LASTNAME 3. EMAIL 4.PASSWORD 5.CONFIRM PASSWORD 6. MESSAGE 7. GENDER(RADIO) 8.CITY (DROPDOWN)
//DISPLAY THE SUBMITTED VALUES IN ALERT BOX ,OR ON THE SAME PAGE AND MESSAGE ON THE NEXT PAGE.
import React, { useState } from 'react'

const Ex33 = () => {
    const [formdata,setFormdata]=useState({})
    function handleChange(e){
        e.preventDefault()
        const name=e.target.name;
        const value=e.target.value
        setFormdata({...formdata,[name]:value})
    }
    function handleSubmit(e){
        e.preventDefault()
        const email_pattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}/
        const pass_pattern=/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]){8,}/
        if(!email_pattern.test(formdata.em)){
            alert("Please Enter valid email")
        }
        else if(!pass_pattern.test(formdata.p1)){
            alert("Enter valid pass")
        }
        else if(formdata.Password!==formdata.ConfirmPassword){
            alert('Both password should be same')
        }
        else{
            alert(`First name: ${formdata.fn}\nLastname: ${formdata.ln}\nEmail:${formdata.em}\nPassword: ${formdata.p1}\nMessage: ${formdata.msg}\nGender:${formdata.g}\nCity: ${formdata.c}`)
            localStorage.setItem("msg",formdata.msg);
            window.location.pathname="/Home";
        }

}
  return (
    <div>
        <form onSubmit={handleSubmit}>
            Enter Firstname: <input type='text' name={'fn'} onChange={handleChange}/><br/><br/>
            Enter Lastname: <input type='text' name={'ln'} onChange={handleChange}/><br/><br/>
            Enter Email: <input type='email' name={'em'} onChange={handleChange}/><br/><br/>
            Enter Password: <input type="password" name={'p1'} onChange={handleChange}/><br/><br/>
            Confirm Password: <input type="password" name={'p2'} onChange={handleChange}/><br/><br/>
            Message: <textarea cols={10} rows={2} name={'msg'} onChange={handleChange}/><br/><br/>
            Gender: <label><input type="radio" name={'g'} value="Male" onChange={handleChange}/> Male</label>
            <label><input type="radio" name={"g"} value="Female" onChange={handleChange}/>Female</label>
            <label><input type="radio" name={"g"} value="Other" onChange={handleChange}/>Other</label><br/><br/>
            CITY: <select name={'c'} onChange={handleChange}>
                <option disabled selected>---select---</option>
                <option >Ahmedabad</option>
                <option >Mumbai</option>
                <option >Banglore</option>
            </select>
            <br/><br/>
            <input type='submit'/>     
            
        </form>
        <div>
            <h1>Firstname:{formdata.fn}</h1>
        
        <h1>Lastname:{formdata.ln}</h1>
        
        <h1>Email:{formdata.em}</h1>
        
        <h1>Password:{formdata.p1}</h1>
        
        <h1>Message:{formdata.msg}</h1>
        
        <h1>Gender:{formdata.g}</h1>
        
        <h1>City:{formdata.c}</h1>   
        </div>

    </div>
  )
}

export default Ex33