import { useEffect, useState } from "react"


export default function ExampleTwo(){
    const [name,setName] = useState (()=>{
        const savedName = localStorage.getItem("name");
        return savedName? JSON.parse(savedName):"";
    })

    useEffect(()=>{
        localStorage.setItem('name',JSON.stringify(name))
    },[name])

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleClear = () => {
        setName("")
    }

    return(
        <div>
            <h1>Your name is: {name}</h1>
            <input 
            type="text"
            value={name}
            onChange={handleChange} 
            />
            <button onClick={handleClear}>Clear Name</button>
        </div>
    )
}