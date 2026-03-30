import { useEffect } from "react";


const BasicEffect = () => {
    
    useEffect (() => {
        console.log("this message will be printed only in the first render")
    },[])
    return(
        <div>

        </div>
    )
}
export default BasicEffect;