import { useState } from "react";
import PopupContent from "./PopupContent";


export default function CopyInput(){
    const [inputValue,setInputValue] = useState("");
    const [copied,setCopied] = useState(false);

    function handleCopy(){
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopied(true)
            setTimeout(()=>setCopied(false),2000);  
        })
        setInputValue('');
    }
    return(
        <div>
            <input type="text" value={inputValue} 
                onChange={e=>setInputValue(e.target.value)}
             />
             <button onClick={handleCopy}>Copy</button>
             <PopupContent copied = {copied}/>
        </div>
        
    )
}