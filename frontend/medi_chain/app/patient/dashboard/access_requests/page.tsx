import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentLayout } from "@/components/doctor_dashboard/doctor-panel/content-layout";

// This would typically come from a database
const patients = [
  {
    id: 1,
    name: "Dr. Sanidhya Madeshia ",
    age: 45,
    gender: "Male",
    lastVisit: "2023-05-15",
  },
  {
    id: 2,
    name: "Dr. Baba Kumar",
    age: 32,
    gender: "Female",
    lastVisit: "2023-06-02",
  },
  {
    id: 3,
    name: "Dr. Daksh jain",
    age: 58,
    gender: "Male",
    lastVisit: "2023-05-28",
  },
];

// Helper function to format dates (e.g., "16 Jan 2025")
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export default function MyPatientsPage() {
  return (
    <ContentLayout title="View Doctor">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Medical Examiner</h1>
        <div className="flex flex-col gap-4">
          {patients.map((patient) => (
            <Card key={patient.id} className="p-2">
              <CardHeader className="pb-2">
                <CardTitle>{patient.name}</CardTitle>
                <p className="text-sm text-gray-600">
                  Age: {patient.age} | Gender: {patient.gender}
                </p>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <p className="text-gray-700">
                  Last Visit: {formatDate(patient.lastVisit)}
                </p>
                <Link href={`/doctor/dashboard/patient_list/${patient.id}`}>
                  <Button className="bg-indigo-700">Give Access</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </ContentLayout>
  );
}
