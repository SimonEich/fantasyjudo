import { SignIn, SignInButton, SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import { ClerkProvider, SignUp } from "@clerk/nextjs";



export function Welcome (){
    const user = useUser();
    console.log(user)

    return ( <div>
        <h1>home</h1>
    </div>)
}