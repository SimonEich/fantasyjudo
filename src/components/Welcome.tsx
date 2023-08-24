import { useUser } from "@clerk/nextjs";



export function Welcome (){
    const user = useUser();
    const { isLoaded: userLoaded, isSignedIn} = useUser();

    console.log(user)

    return ( <div>
        {(!isSignedIn && <h1>Pick Your Team and Play Now!</h1>)}
    </div>)
}