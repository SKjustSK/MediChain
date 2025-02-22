"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentLayout } from "@/components/doctor_dashboard/doctor-panel/content-layout";

// This would typically come from a database based on the patient ID and condition ID
const conditionDetails = {
  disease: "Influenza",
  startDate: "2023-01-15",
  endDate: "2023-01-30",
  description:
    "Patient presented with high fever, body aches, and fatigue. Diagnosed with Influenza A.",
  timeline: [
    { date: "2023-01-15", event: "Initial diagnosis" },
    { date: "2023-01-18", event: "Prescribed antiviral medication" },
    { date: "2023-01-25", event: "Follow-up appointment, symptoms improving" },
    { date: "2023-01-30", event: "Recovery confirmed, treatment ended" },
  ],
  documents: [
    { id: 1, name: "Initial Test Results", type: "pdf" },
    { id: 2, name: "Prescription", type: "pdf" },
    { id: 3, name: "Follow-up Notes", type: "docx" },
  ],
};

// Helper function to format dates
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

export interface TimelineItemProps {
  date: string;
  event: string;
}

function TimelineItem({ date, event }: TimelineItemProps) {
  return (
    <div className="mb-6 flex items-start">
      <div className="flex-shrink-0 w-24 text-sm text-gray-600 font-medium">
        {formatDate(date)}
      </div>
      <div className="relative flex items-center">
        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
        <div className="w-px bg-gray-300 h-12 mx-4"></div>
      </div>
      <div className="flex-grow text-gray-800">{event}</div>
    </div>
  );
}

function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative pl-6 border-l border-gray-300">{children}</div>
  );
}

export default function MedicalConditionPage() {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <ContentLayout title="Condition Details">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">
          Patient Name - {conditionDetails.disease}
        </h1>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="details">
            <Card>
              <CardHeader>
                <CardTitle>Condition Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p>
                  <strong>Start Date:</strong>{" "}
                  {formatDate(conditionDetails.startDate)}
                </p>
                <p>
                  <strong>End Date:</strong>{" "}
                  {formatDate(conditionDetails.endDate)}
                </p>
                <p>
                  <strong>Description:</strong> {conditionDetails.description}
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline">
            <Card>
              <CardHeader>
                <CardTitle>Treatment Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <Timeline>
                  {conditionDetails.timeline.map((item, index) => (
                    <TimelineItem
                      key={index}
                      date={item.date}
                      event={item.event}
                    />
                  ))}
                </Timeline>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Related Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {conditionDetails.documents.map((doc) => (
                    <li key={doc.id}>
                      <a href="#" className="text-blue-600 hover:underline">
                        {doc.name}
                      </a>{" "}
                      ({doc.type})
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ContentLayout>
  );
}
