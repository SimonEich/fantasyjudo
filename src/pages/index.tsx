import Head from "next/head";
import { SignIn, SignInButton, SignOutButton, UserButton, useSession, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { api } from "~/utils/api";
import Image from "next/image";
import { ClerkProvider, SignUp } from "@clerk/nextjs";
import { Component } from "react";
import { log } from "console";
import { Header } from "~/components/Header";
import { Welcome } from "~/components/Welcome";
import { Login } from "~/components/Login";
import { $schema } from ".eslintrc.cjs";



const TABS = ["Home", "Leagues"]

export default function Home() {
const {data}= api.createLeague.getAll.useQuery();
//const {datas} = api.createUser.getAll.useQuery();

console.log(data)

  const user = useUser();
  const { isLoaded: userLoaded, isSignedIn} = useUser();
  const session = useSession();

  

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
        <h1>{data?.map((Leagues)=>(<div>{Leagues.name}</div>))}</h1>


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
