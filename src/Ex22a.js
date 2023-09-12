import React, { useContext } from 'react'
import { fname } from './Ex22'
const Ex22a = () => {
  const value=useContext(fname)
  return (
    <div>
      <h1>{value}</h1>
    </div>
  )
}

export default Ex22a