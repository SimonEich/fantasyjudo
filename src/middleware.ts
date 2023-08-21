import { withClerkMiddleware } from "@clerk/nextjs";
import { WithClerkMiddleware } from "@clerk/nextjs/dist/types/server";
import { log } from "console";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default withClerkMiddleware((req: NextRequest) => { 
    console.log("middleware running")
    return NextResponse.next();
});


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};