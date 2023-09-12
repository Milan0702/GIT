import React from 'react'

const Fsd = () => {
    const arr=["abc","xyz","pqr","mno"]
  return (
    <div><h1>COA</h1>
    {[...arr].map((item)=>{
        return <h2>{item}</h2>
    })
        }</div>
  )
}

export default Fsd