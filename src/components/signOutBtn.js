"use client"
import {Button} from "react-bootstrap";
import {signOut} from "next-auth/react";
import {PiSignOut} from "react-icons/pi";

export function SignOutBtn() {
  return <Button variant={"none"} onClick={()=>signOut()}><PiSignOut></PiSignOut></Button>
}