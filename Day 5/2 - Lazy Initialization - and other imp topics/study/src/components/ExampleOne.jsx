import { useState } from "react"

/*
Lazy Initialization allow the program to call the function only in the first render
*/
export default function ExampleOne(){
    const [count,setCount] = useState(()=>{
        const initialCount = 10;
        return initialCount;
    });
    function Increment(){
        setCount(prevCount=>prevCount+1);
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={Increment}>Increment</button>
        </div>
    )
}