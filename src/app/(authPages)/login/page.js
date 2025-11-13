"use client";

import "./page.scss";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {Button, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";

export default function LoginPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  return (
    <div><Form onSubmit={async (event) => {
      event.preventDefault();
      const formData=new FormData(event.target);
      const {login, password}=Object.fromEntries(formData.entries());
        setError("");

        const result = await signIn("credentials", {
          login,
          password,
          redirect: false,
        });

        if (result?.error) {
          setError("Invalid credentials");
        } else {
          router.push("/");
          router.refresh();
        }
    }}>
      <FormLabel>
        <h2>Zaloguj się na stronę</h2>
      </FormLabel>
      <FormGroup>
        <FormLabel>Login</FormLabel>
        <FormControl type={"text"} name={"login"}></FormControl>
      </FormGroup>
      <FormGroup>
        <FormLabel>Hasło</FormLabel>
        <FormControl type={"password"} name={"password"}></FormControl>
      </FormGroup>
      <br></br>
      <Button type={"submit"}>Wyślij</Button>
    </Form></div>
  );
}