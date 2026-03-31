import { useContext, useState } from "react"
import { UserContext } from "./UserContext"


export default function UpdateUser(){
    const {updateUser} = useContext(UserContext)
    const [newName,setNewName] = useState('')
    function handleSubmit(){
        if(newName.trim()){
            updateUser(newName);
            setNewName("")
        }
    }
    return (
        <div>
            <h2>Update User Name</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newName} onChange={e=>setNewName(e.target.value)}
                placeholder="Enter new name"/>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}