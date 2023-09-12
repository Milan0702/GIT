//write a program to perform the task as asked below.
//1. Add three buttons change text, change color and hide/show. Add heading LJUniversity in red color(initially)and also add "react js hooks" as text in h2 tag
//2.By clicking on change text button text should be changed to welcome students and vice versa.
//3.By clicking on change color button change color of text to blue and vice versa. this should be performed while doubleclinking the button
//4.initially the button text should be hidden. by clickin on it the button text should be changed to show and text react js hooks that should be hidden and vice versa.
import React,{useState} from 'react'

const Ex17 = () => {
    const [text,setText]=useState("L J UNIVERSITY");
    const changeText=()=>{
        if(text=="L J UNIVERSITY"){
            setText("Welcome Students!")
        }
        else{
            setText("L J UNIVERSITY")
        }
    }
    const [color,setColor]=useState("red");
    const changeColor=()=>{
        if(color=="red"){
             setColor("blue")
        }
         else{
            setColor("red")
         }
     }
     const [hooks,setHooks]=useState("React JS Hooks")
    const [hide,setShow]=useState("hide")
    const show=()=>{
        if(hide=="hide"){
            setShow('show')
            setHooks("")
        }
        else{
            setShow('hide')
           
            setHooks("React JS Hooks")
        }
    }
  return (
    <div>
        <h1 style={{color:color}}>{text}</h1>
        <h2>{hooks}</h2>
        <button onClick={changeText}>Change Text</button><br/>
        <button onClick={changeColor}>Change Color</button><br/>
        
        <button onClick={show}>{hide}</button> 
    </div>
  )
}

export default Ex17