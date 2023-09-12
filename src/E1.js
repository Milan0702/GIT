import React, { useState } from 'react'

const E1 = () => {    
    const [color,setColor]=useState("red")
    const [hooks,setHooks]=useState("ReactJS hooks")
    const [text,setText]=useState("LJ University")
    function changeText(){
        if(text==="LJ University"){
        setText("welcome students")
        }
        else{
            setText("LJ University")
        }
    }
    function changeColor(){
        if(color==="red"){
             setColor("blue")
        }
        else{
            setColor("red")
        }
    }
    const [hide,setShow]=useState("hide")
    function show(){
        if(hide=="hide"){
            setHooks("")
            setShow('show')}
        else{
            setHooks("ReactJS hooks")
            setShow('hide')
        }
    }
  return (
    <div>
        <h1 style={{color:color}}>{text}</h1>
        <h2>{hooks}</h2>
        <button onClick={changeText}>Change Text</button><br/>
        <button onDoubleClick={changeColor}>Change Color</button><br/>
        <button onClick={show}>{hide}</button> 
    </div>
  )
}

export default E1