

 {/*export function Greeting({isLoggedIn}) {
    if(isLoggedIn){
        return <h1>Welcome !!!</h1>
    }else{
        return <h1>Please retry to Enter</h1>
    }
}*/}


export function Greeting({isLoggedIn}){
    return (
        <div>
            {isLoggedIn ? "Welcome !!!" : "Please retry to Enter"}
        </div>
    )
}