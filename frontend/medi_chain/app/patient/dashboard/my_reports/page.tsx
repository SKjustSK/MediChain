"use client";

import { ContentLayout } from "@/components/doctor_dashboard/doctor-panel/content-layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDownIcon } from "lucide-react";

// This would typically come from a database based on the patient ID
const patientReports = [
  {
    id: 1,
    disease: "Influenza",
    startDate: "2023-01-15",
    endDate: "2023-01-30",
  },
  { id: 2, disease: "Hypertension", startDate: "2023-03-10", endDate: null },
  {
    id: 3,
    disease: "Allergic Rhinitis",
    startDate: "2023-05-01",
    endDate: "2023-05-15",
  },
];

// Helper function to format dates
const formatDate = (dateString: string | null) => {
  if (!dateString) return "Ongoing";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

export default function PatientMedicalReports({
  params,
}: {
  params: { id: string };
}) {
  return (
    <ContentLayout title="Patient Report">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          My Reports {params.id}
        </h1>
        <div className="space-y-4">
          {patientReports
            .sort(
              (a, b) =>
                new Date(b.startDate).getTime() -
                new Date(a.startDate).getTime()
            )
            .map((report) => (
              <Card key={report.id} className="w-full">
                <CardContent className="p-6 flex items-center">
                  {/* Date Timeline */}
                  <div className="flex flex-col items-center mr-6 w-24">
                    {/* Start Date */}
                    <div className="text-sm font-medium">
                      {formatDate(report.startDate)}
                    </div>
                    {/* Vertical Line */}
                    <div className="h-12 w-0.5 bg-gray-300 my-1 relative">
                      <ArrowDownIcon className="absolute -bottom-4 -left-1.5 w-4 h-2 text-gray-500" />
                    </div>
                    {/* End Date */}
                    <div className="text-sm font-medium">
                      {formatDate(report.endDate)}
                    </div>
                  </div>

                  {/* Report Details */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-2">
                      {report.disease}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Duration:{" "}
                      {report.endDate
                        ? `${Math.ceil(
                            (new Date(report.endDate).getTime() -
                              new Date(report.startDate).getTime()) /
                              (1000 * 60 * 60 * 24)
                          )} days`
                        : "Ongoing"}
                    </p>
                  </div>

                  {/* View Details Button */}
                  <div className="ml-auto">
                    <Link
                      href={`/doctor/dashboard/patient_list/${params.id}/condition/${report.id}`}
                    >
                      <Button className="bg-indigo-700">View Details</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </ContentLayout>
  );
}
