"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ContentLayout } from "@/components/doctor_dashboard/doctor-panel/content-layout";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Patient {
  id: string;
  name: string;
  adharNumber: string;
  dob: string;
}

interface PatientCardProps {
  patient: {
    name: string;
    adharNumber: string;
    dob: string;
  };
}

function PatientCard({ patient }: PatientCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{patient.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          <strong>Adhar Number:</strong> {patient.adharNumber}
        </p>
        <p>
          <strong>Date of Birth:</strong> {patient.dob}
        </p>
      </CardContent>
      <CardFooter>
        <Button
          className="bg-indigo-700"
          onClick={() => alert("Requesting report access...")}
        >
          Request Report Access
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function SearchPatientPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [patients, setPatients] = useState<Patient[]>([]);

  const handleSearch = async () => {
    const patients = [
      {
        id: "1",
        name: "John Doe",
        adharNumber: "1234 5678 9012",
        dob: "1990-01-01",
      },
      {
        id: "2",
        name: "Jane Smith",
        adharNumber: "2345 6789 0123",
        dob: "1985-05-15",
      },
      {
        id: "3",
        name: "Alice Johnson",
        adharNumber: "3456 7890 1234",
        dob: "1992-09-30",
      },
      {
        id: "4",
        name: "Bob Williams",
        adharNumber: "4567 8901 2345",
        dob: "1988-03-22",
      },
      {
        id: "5",
        name: "Eva Brown",
        adharNumber: "5678 9012 3456",
        dob: "1995-11-10",
      },
    ];
    const filteredPatients = patients.filter(
      (patient: Patient) =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.adharNumber.includes(searchTerm)
    );
    setPatients(filteredPatients);
  };

  return (
    <ContentLayout title="Search Patients">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Search Patients</h1>
        <div className="flex space-x-2 mb-4">
          <Input
            type="text"
            placeholder="Search by name or Adhar number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Button className="bg-indigo-700" onClick={handleSearch}>
            Search
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {patients.map((patient) => (
            <PatientCard key={patient.id} patient={patient} />
          ))}
        </div>
      </div>
    </ContentLayout>
  );
}
