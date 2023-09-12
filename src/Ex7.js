import React from 'react'

const Ex7 = () => {
    const arr=[1,2,3,4,5];
  return (
    <div>
        <h1>Example of mapping</h1>
        {[...arr].map((item)=>{
            return <h2>Array Element={item}</h2>
        })
            }
    </div>
  )
}

export default Ex7