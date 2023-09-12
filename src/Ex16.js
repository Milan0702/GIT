//write a program which changes images by clicking it.
import React,{useState} from 'react'
import cat1 from './cat1.jpg'
import cat2 from './cat2.jpg'

const Ex16 = () => {
    const[pic1,setImage1]=useState(cat1);
    const i1=()=>{
        if(pic1==cat1){
            setImage1(cat2)
        }
        else{
            setImage1(cat1)
        }
        
    }
  return (
    <div>
        <img src={pic1} width="500" height="500"/>
        <button onClick={i1}>Change Image</button>
    </div>
  )
}

export default Ex16