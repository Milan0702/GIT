import React from 'react'

const Fsd = () => {
    const arr=["Probability","Statistics","Calculus","ALgebra"]
  return (
    <div><h1>DM</h1>
    {[...arr].map((item)=>{
        return <h2>{item}</h2>
    })
        }</div>
  )
}

export default Fsd