
export function UserProFile({user}){
    return (
        <div>
            {user ? (<div>
                <h1>User Profile</h1>
                <p>Name : {user.name}</p>
                {user.age > 18 && <p>Age : {user.age}</p>}
            </div>): <h1>User not found</h1>}
        </div>
    )

}