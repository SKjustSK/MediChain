"use client";

import type React from "react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function PatientRegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    bloodGroup: "",
    phoneNumber: "",
    adharCard: "",
    patientId: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Patient registration attempted with:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 bg-white p-6 rounded-lg shadow-md"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name" className="text-gray-700 font-medium">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300"
          />
        </div>
        <div>
          <Label htmlFor="gender" className="text-gray-700 font-medium">
            Gender
          </Label>
          <Input
            id="gender"
            name="gender"
            type="text"
            required
            value={formData.gender}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300"
          />
        </div>
        <div>
          <Label htmlFor="bloodGroup" className="text-gray-700 font-medium">
            Blood Group
          </Label>
          <Input
            id="bloodGroup"
            name="bloodGroup"
            type="text"
            required
            value={formData.bloodGroup}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300"
          />
        </div>
        <div>
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
      </div>

      <div className="mt-4">
        <Label htmlFor="adharCard" className="text-gray-700 font-medium">
          Adhar Card
        </Label>
        <Input
          id="adharCard"
          name="adharCard"
          type="text"
          required
          value={formData.adharCard}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300"
        />
      </div>
      <div className="mt-4">
        <Label htmlFor="patientId" className="text-gray-700 font-medium">
          Patient ID
        </Label>
        <Input
          id="patientId"
          name="patientId"
          type="text"
          required
          value={formData.patientId}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300"
        />
      </div>
      <div className="mt-4">
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
      <div className="mt-4">
        <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
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

      <div className="mt-4">
        <Button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition-all"
        >
          Register as Patient
        </Button>
      </div>
    </form>
  );
}

export default function PatientRegisterPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex w-full flex-col justify-center px-4 sm:w-2/3 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-xl">
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Patient Registration Portal
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please enter your details to register as a Patient
          </p>
          <PatientRegisterForm />
        </div>
      </div>
      <div className="hidden sm:block sm:w-2/3">
        <Image
          src="/login.jpg"
          alt="Patient registration visual"
          width={1920}
          height={1080}
          className="h-full w-full object-cover rounded-l-lg"
        />
      </div>
    </div>
  );
}
