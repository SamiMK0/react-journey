

const UserList = () => {

    const users = [
        {id:1, name:"sami", age: 22 },
        {id:2, name:"ahmad", age: 23},
        {id:3, name:"makiye", age: 24}
    ];

    return (
        <div>
                {
                    users.map((user) => (
                        <div key={user.id}>
                            <h1>Name: {user.name}</h1>
                            <h3>Age: {user.age}</h3>
                        </div>
                    ))
                }
        </div>
    );
};

export default UserList;