import React from 'react'

const Fsd = () => {
    const arr=["NodeJs","ExpressJs","ReactJs","MongoDB"]
  return (
    <div><h1>FSD-2</h1>
    {[...arr].map((item)=>{
        return <h2>{item}</h2>
    })
        }</div>
  )
}

export default Fsd