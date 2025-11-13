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
        <h2>Zaloguj się na stronę</h2>
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
    </Form></div>
  );
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 p-8">
        <h2 className="text-center text-3xl font-bold">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="rounded bg-red-100 p-3 text-red-700">{error}</div>
          )}
          <div>
            <label htmlFor="login" className="block text-sm font-medium">
              Login
            </label>
            <input
              id="login"
              name="login"
              type="text"
              value={formData.login}
              onChange={handleChange}
              className="mt-1 block w-full rounded border p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded border p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="surname" className="block text-sm font-medium">
              Surname
            </label>
            <input
              id="surname"
              name="surname"
              type="text"
              value={formData.surname}
              onChange={handleChange}
              className="mt-1 block w-full rounded border p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded border p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}