import React,{useReducer} from 'react'

const initialstate=0;
function reducer(state,action){
    if(action.type=="increment"){
        return state+1;
    }
}
const Ex18 = () => {
    const [state, dispatch] = useReducer(reducer,initialstate);
  return (
    <div>
        <button onClick={()=>{dispatch({type:'increment'})}}>click Here</button>
        <h1>{state}</h1>
    </div>
  )
}

export default Ex18