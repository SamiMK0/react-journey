import { useReducer, useState } from "react"
import { CounterReducer,initialState } from "./CounterReducer"


export default function Counter(){
    const [state,dispatch] = useReducer(CounterReducer,initialState);
    const [input,setInput] = useState(0)

    const handleIncrementByAmount = () => {
        dispatch({type:"incrementByAmount",payload:Number(input)});
        setInput(0)
    }
    const handleDecrementByAmount = () => {
        dispatch({type:"decrementByAmount",payload:Number(input)});
        setInput(0)
    }
    return(
        <div>
            <h2>{state.count}</h2>
            <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
            <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
            <br /><br /><br />
            <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}/>
            <button onClick={handleIncrementByAmount}>Add</button>
            <button onClick={handleDecrementByAmount}>Subtract</button>
        </div>
    )
}