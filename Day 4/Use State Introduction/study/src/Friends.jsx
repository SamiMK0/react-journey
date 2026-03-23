import { useState } from "react"

const Friends = () => {
    const [friends, setFriends] = useState(["Sami","Ahmad"]);
    const addFriend = () => {
        setFriends([...friends,"Makiye"]);
    }
    const deleteFriend = () => {
        setFriends(friends.filter(friend => friend != "Ahmad"))
    }
    return(
        <div>
            {
                friends.map(friend => (
                    <li key={Math.random}>{friend}</li>
                ))
            }
            <button onClick={addFriend}>Add new friend</button>
            <button onClick={deleteFriend}>Delete friend</button>
        </div>
    )
}

export default Friends