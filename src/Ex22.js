import React,{createContext} from 'react'
import Ex22a from './Ex22a'
const fname=createContext()
const Ex22 = () => {

  return (<>
    <fname.Provider value="ABC">
        <Ex22a />
    </fname.Provider>
    </>
  )
}
export default Ex22

export {fname}