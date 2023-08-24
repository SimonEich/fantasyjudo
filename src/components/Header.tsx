import { SignIn, SignInButton, SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import { ClerkProvider, SignUp } from "@clerk/nextjs";



export function Header (){
    const user = useUser();
    console.log(user)

    return ( <div>
        <div className="flex  container items-center">
            <a href="#" className="text-sm  text-white-600 dark:text-white-500 hover:underline">
              <div className="white">{!user.isSignedIn && <SignInButton />}</div>
              <div>{!!user.isSignedIn && <div></div>}</div>
              {<UserButton/>}
              <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
              </a>
        </div>
    </div>)
}