import React from 'react'

const Fsd = () => {
    const arr=["Machine Learning","Data Analysis","Webscrapping","API"]
  return (
    <div><h1>Python</h1>
    {[...arr].map((item)=>{
        return <h2>{item}</h2>
    })
        }</div>
  )
}

export default Fsd