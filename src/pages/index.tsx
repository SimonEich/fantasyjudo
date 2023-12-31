import Head from "next/head";
import { SignIn, SignInButton, SignOutButton, UserButton, useSession, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { api } from "~/utils/api";
import Image from "next/image";
import { ClerkProvider, SignUp } from "@clerk/nextjs";
import { Component, useState } from "react";
import { log } from "console";
import { Header } from "~/components/Header";
import { Welcome } from "~/components/Welcome";
import { Login } from "~/components/Login";
import { $schema } from ".eslintrc.cjs";
import { createTRPCRouter } from "~/server/api/trpc";
import Trpc from "./api/trpc/[trpc]";
import { appRouter } from "~/server/api/root";



const TABS = ["Home", "Leagues"]

export default function Home() {


const {data}= api.createLeague.getAll.useQuery();
const [input, setInput] = useState("");



  const user = useUser();
  const { isLoaded: userLoaded, isSignedIn} = useUser();
  const session = useSession();


  


  function mutate(arg0: { content: string; }) {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
        <h1>{data?.map((user)=>(<div>{user.name}</div>))}</h1>

        

        <input
        placeholder="Type some emojis!"
        className="grow bg-transparent outline-none"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            if (input !== "") {
              mutate({ content: input });
            }
          }
        }}
        disabled={isPosting}
      />
      

        <div className="place-content-center">
        {!isSignedIn && <Welcome/>}
        {!!isSignedIn && 
        <div>
          <Login/>
        </div>
        }
        </div>
        <div className="place-content-center">
          <h1 className="flex text-teal-500 ml-12">©copyright-Fantasy Judo - Make the sport personal</h1>
        </div>
    </>
  );
}
function refetchTopics() {
  throw new Error("Function not implemented.");
}

