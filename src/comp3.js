import React , { useContext } from 'react'
import { number1 } from './Ex24'
import { number2 } from './comp1'
import { number3 } from './comp2'
const Comp3 = () => {
    const n1=useContext(number1)
    const n2=useContext(number2)
    const n3=useContext(number3)
  return (
    <div>{n1}x{n2}x{n3}={n1*n2*n3}</div>
  )
}

export default Comp3