import React, { useReducer } from 'react'
const reducer=(state,action)=>{
    switch (action.type){
        case "increment":
            return {count:state.count+1, showText:state.showText}
        case "ToggleText":
            return {count:state.count, showText:!state.showText}
    }
}
function UseReducer() {
    const [state,dispach]= useReducer(reducer,{count:0, showText:true})
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>{
        dispach({type:"increment"}),
        dispach({type:"ToggleText"})
      }}>click here</button>
     {state.showText &&  <p>showText</p> }
    </div>
  )
}

export default UseReducer
