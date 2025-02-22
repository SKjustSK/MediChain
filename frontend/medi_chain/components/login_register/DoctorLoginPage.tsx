"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function DoctorLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Doctor login attempted with:", { username, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-6 bg-white p-6 rounded-lg shadow-md"
    >
      <div>
        <Label htmlFor="username" className="text-gray-700 font-medium">
          Doctor ID
        </Label>
        <Input
          id="username"
          name="username"
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300"
        />
      </div>
      <div>
        <Label htmlFor="password" className="text-gray-700 font-medium">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300"
        />
      </div>
      <div>
        <Link href="/doctor/dashboard/">
          <Button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition-all"
          >
            Sign in as Doctor
          </Button>
        </Link>
      </div>
      <p className="mt-4 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <a href="/doctor/register" className="text-indigo-600 hover:underline">
          Sign up here
        </a>
      </p>
    </form>
  );
}

export default function DoctorLoginPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex w-full flex-col justify-center px-4 sm:w-1/2 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Doctor Login
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please enter your credentials to access the doctor portal.
          </p>
          <DoctorLoginForm />
        </div>
      </div>
      <div className="hidden sm:block sm:w-1/2">
        <Image
          src="/login.jpg"
          alt="Doctor login visual"
          width={1920}
          height={1080}
          className="h-full w-full object-cover rounded-l-lg"
        />
      </div>
    </div>
  );
}
