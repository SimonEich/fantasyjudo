import { SignIn, SignUp, useUser } from "@clerk/nextjs";
import { SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";




export function Login (){
    const user = useUser();
    const { isLoaded: userLoaded, isSignedIn} = useUser();
    const name = user.user?.username?.toUpperCase()

    console.log(name)

    return ( <div className="m-10">

        <div className="flex place-content-center rounded-full my-6 mx-2">
            <h1>Hello {name}</h1>
        </div>

        <div className="flex place-content-center rounded-full p-4 bg-blue-600 hover:bg-sky-700 my-6 mx-2">
           <h1>Fantasy Judo Rules</h1>
        </div>

        <div className="flex place-content-center rounded-full p-5 bg-blue-500 hover:bg-sky-500 m-2">
           <h1>My Team</h1>
        </div>

        <div className="flex place-content-center rounded-full p-5 bg-blue-500 hover:bg-sky-500 m-2">
           <h1>Create or Join a League</h1>
        </div>

        <div className="flex place-content-center rounded-full p-5 bg-blue-500 hover:bg-sky-500 m-2">
           <h1>View Leaderboard</h1>
        </div>
            
    </div>)
}