import { useState } from "react";


const Counter = () => {
    const [count,setCount] = useState(()=>{
        const initialValue = 0;
        return initialValue;
    });

    function Incremant(){
        setCount(prevCount => prevCount+1)
    }
    return(
        <div>
            <p>{count}</p>
            <button onClick={Incremant}>Incremant</button>
        </div>
    )

}
export default Counter;