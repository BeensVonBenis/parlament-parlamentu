"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {Button, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {signIn} from "next-auth/react";

export default function RegisterPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  return (
    <div><Form onSubmit={async (event) => {
      event.preventDefault();
      const formDataPre=new FormData(event.target);
      const formData=Object.fromEntries(formDataPre.entries());
      setError("");

      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/login");
      } else {
        const data = await response.json();
        setError(data.error || "Registration failed");
      }
    }}>
      <FormLabel>
        <h2>Utwórz konto na stronie</h2>
      </FormLabel>
      <FormGroup>
        <FormLabel>Login</FormLabel>
        <FormControl type={"text"} name={"login"}></FormControl>
      </FormGroup>
      <FormGroup>
        <FormLabel>Imię</FormLabel>
        <FormControl type={"text"} name={"name"}></FormControl>
      </FormGroup>
      <FormGroup>
        <FormLabel>Nazwisko</FormLabel>
        <FormControl type={"text"} name={"surname"}></FormControl>
      </FormGroup>
      <FormGroup>
        <FormLabel>Hasło</FormLabel>
        <FormControl type={"password"} name={"password"}></FormControl>
      </FormGroup>
      <br></br>
      <Button type={"submit"}>Wyślij</Button>
    </Form>
      <Link href={"/login"}>Masz już konto? Zaloguj się.</Link>
    </div>
  );
}