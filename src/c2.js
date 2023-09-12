import React, { useContext } from 'react'
import { lname } from './Ex23'
import { fname } from './Ex23'
const C2 = () => {
    const value1=useContext(fname)
    const value2=useContext(lname)
  return (
    <div>
      <h1>{value1}</h1>
      <h1>{value2}</h1>

    </div>
  )
}

export default C2