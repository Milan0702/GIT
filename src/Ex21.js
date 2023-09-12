//write a program having array of object having id,name,and category as data.
//Add an input field to enter category name and filter out the data below using hooks.W
import React,{useState} from 'react'
const arr=[{id:1,name:"apple",category:"fruit"},{id:2,name:"potato",category:"vegetable"},{id:3,name:"tomato",category:"vegetable"},{id:4,name:"mango",category:"fruit"}]

const Ex21 = () => {
  const [data,setdata]=useState("")
  const arr1=arr.filter((a)=>{
    if(a.category===data || a.name===data || a.id===data ){
      return true
    }
    else{
      return false
    }
  })
  const f1 = (e) => {
    setdata(e.target.value);
  };
  return (
    <div>
      <input type="text" placeholder="Enter category name to filter" value={data} onChange={f1}/>
      <ul>
        {arr1.map((i) => (
          <li key={i.id}>
            {i.id}-{i.name}-{i.category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ex21