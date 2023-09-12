//write a program having two input number fields and displayed the entered value on the same page, now add a addition button to calculate the addition of the above two numebers and display the addition in h2 tag using hooks.
import React,{useState} from 'react'

const Ex15 = () => {
    
    const [num1,setFirstNo]=useState(0);
    const [num2,setSecondNo]=useState(0);
    const [add,setAddition]=useState(0);
    const fn=(e)=>{
        setFirstNo(e.target.value)
    }
    const sn=(e)=>{
        setSecondNo(e.target.value)   
    }
    const addition=()=>{
        setAddition(parseInt(num1)+parseInt(num2))
            
    }
  return (
    <div>
    <form>
      <label>Enter your First Number:
        <input type="number" value={num1} onChange={fn}/>
      </label>
      
      <label>Enter your Second Number:
        <input type="number" value={num2} onChange={sn}/>
      </label>
    </form>
    <h1>First no.:{num1}</h1>
    <h1>Second no.:{num2}</h1>
    <button onClick={addition}>addition</button>
    <h1>Addtion is {add}</h1>

    </div>
  )
}

export default Ex15