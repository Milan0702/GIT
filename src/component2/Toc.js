import React from 'react'

const Fsd = () => {
    const arr=["NFA","DFA"]
  return (
    <div><h1>TOC</h1>
    {[...arr].map((item)=>{
        return <h2>{item}</h2>
    })
        }</div>
  )
}

export default Fsd