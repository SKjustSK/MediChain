"use client";

import type React from "react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function DoctorRegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    registrationNumber: "",
    dateOfBirth: "",
    specialization: "",
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Doctor registration attempted with:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 bg-white p-6 rounded-lg shadow-md"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName" className="text-gray-700 font-medium">
            Full Name
          </Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300"
          />
        </div>
        <div>
          <Label
            htmlFor="registrationNumber"
            className="text-gray-700 font-medium"
          >
            Registration Number
          </Label>
          <Input
            id="registrationNumber"
            name="registrationNumber"
            type="text"
            required
            value={formData.registrationNumber}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300"
          />
        </div>
        <div>
          <Label htmlFor="dateOfBirth" className="text-gray-700 font-medium">
            Date of Birth
          </Label>
          <Input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            required
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300"
          />
        </div>
        <div>
          <Label htmlFor="specialization" className="text-gray-700 font-medium">
            Specialization
          </Label>
          <Input
            id="specialization"
            name="specialization"
            type="text"
            required
            value={formData.specialization}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300"
          />
        </div>
      </div>

      {/* Email and Phone Number fields stacked vertically */}
      <div className="mt-4">
        <Label htmlFor="email" className="text-gray-700 font-medium">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300"
        />
      </div>
      <div className="mt-4">
        <Label htmlFor="phoneNumber" className="text-gray-700 font-medium">
          Phone Number
        </Label>
        <Input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          required
          value={formData.phoneNumber}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="col-span-2">
          <Label htmlFor="username" className="text-gray-700 font-medium">
            Username
          </Label>
          <Input
            id="username"
            name="username"
            type="text"
            required
            value={formData.username}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300"
          />
        </div>
        <div>
          <Label
            htmlFor="confirmPassword"
            className="text-gray-700 font-medium"
          >
            Confirm Password
          </Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300"
          />
        </div>
      </div>

      <div className="mt-4">
        <Button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition-all"
        >
          Register as Doctor
        </Button>
      </div>
    </form>
  );
}

export default function DoctorRegisterPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex w-full flex-col justify-center px-4 sm:w-2/3 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-xl">
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Doctor Registration Portal
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please enter your details to register as a doctor
          </p>
          <DoctorRegisterForm />
        </div>
      </div>
      <div className="hidden sm:block sm:w-2/3">
        <Image
          src="/login.jpg"
          alt="Doctor registration visual"
          width={1920}
          height={1080}
          className="h-full w-full object-cover rounded-l-lg"
        />
      </div>
    </div>
  );
}
