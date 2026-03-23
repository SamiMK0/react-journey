


function UserStatus({LoggedIn, isAdmin}){


    return(
        <div>
            {LoggedIn && isAdmin && <h2>Welcome Admin</h2>}
            {LoggedIn && !isAdmin &&<h2>Welcome User</h2>}
        </div>
    )
}

export default UserStatus;