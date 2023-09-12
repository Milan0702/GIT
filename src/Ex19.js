//write a react program to increase value by 5 while clicking on button initialise vlue with 20.
//using usereducer
import React,{useReducer} from 'react'
const initialstate=20;
function reducer(state,action){
        return state+action;
    }
const Ex19 = () => {
    const [state, dispatch] = useReducer(reducer,20);
    return (
      <div>
          <button onClick={()=>{dispatch(5)}}>click Here</button>
          <h1>{state}</h1>
      </div>)
}

export default Ex19