"use client";

import type React from "react";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ContentLayout } from "@/components/doctor_dashboard/doctor-panel/content-layout";
import { FileText, Pencil, Trash2, Upload } from "lucide-react";

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
    { id: 1, name: "Initial Test Results", type: "pdf", url: "/sample.pdf" },
    { id: 2, name: "Prescription", type: "pdf", url: "/sample.pdf" },
    { id: 3, name: "Follow-up Notes", type: "docx", url: "/sample.docx" },
  ],
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

interface TimelineItemProps {
  date: string;
  event: string;
  onEdit: () => void;
  onDelete: () => void;
}

function TimelineItem({ date, event, onEdit, onDelete }: TimelineItemProps) {
  return (
    <div className="mb-6 flex items-start group">
      <div className="flex-shrink-0 w-24 text-sm text-gray-600 font-medium">
        {formatDate(date)}
      </div>
      <div className="relative flex items-center">
        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
        <div className="w-px bg-gray-300 h-12 mx-4"></div>
      </div>
      <div className="flex-grow text-gray-800">{event}</div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity ml-4 flex gap-2">
        <Button variant="ghost" size="icon" onClick={onEdit}>
          <Pencil className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={onDelete}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function Timeline({ children }: { children: React.ReactNode }) {
  return <div className="relative pl-6">{children}</div>;
}

export default function MedicalConditionPage() {
  const [activeTab, setActiveTab] = useState("details");
  const [editingDetails, setEditingDetails] = useState(false);
  const [editingTimeline, setEditingTimeline] = useState<number | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);
  const [documents, setDocuments] = useState(conditionDetails.documents);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Create a URL for the uploaded file
      const fileUrl = URL.createObjectURL(file);
      // Add the new document to the documents list
      const newDocument = {
        id: documents.length + 1,
        name: file.name,
        type: file.name.split(".").pop() || "",
        url: fileUrl,
      };
      setDocuments([...documents, newDocument]);
    }
  };

  return (
    <ContentLayout title="Condition Details">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">{conditionDetails.disease}</h1>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="details">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Condition Details</CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setEditingDetails(true)}
                  >
                    <Pencil className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </div>
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

            <Dialog open={editingDetails} onOpenChange={setEditingDetails}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Condition Details</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label>Disease</Label>
                    <Input
                      defaultValue={conditionDetails.disease}
                      placeholder="Enter disease name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Start Date</Label>
                    <Input
                      type="date"
                      defaultValue={conditionDetails.startDate}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>End Date</Label>
                    <Input
                      type="date"
                      defaultValue={conditionDetails.endDate}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea
                      defaultValue={conditionDetails.description}
                      placeholder="Enter condition description"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => setEditingDetails(false)}
                  >
                    Cancel
                  </Button>
                  <Button onClick={() => setEditingDetails(false)}>Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </TabsContent>

          <TabsContent value="timeline">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Treatment Timeline</CardTitle>
                <Button>
                  <Pencil className="h-4 w-4 mr-2" />
                  Add Event
                </Button>
              </CardHeader>
              <CardContent>
                <Timeline>
                  {conditionDetails.timeline.map((item, index) => (
                    <TimelineItem
                      key={index}
                      date={item.date}
                      event={item.event}
                      onEdit={() => setEditingTimeline(index)}
                      onDelete={() => setShowDeleteDialog(true)}
                    />
                  ))}
                </Timeline>
              </CardContent>
            </Card>

            <Dialog
              open={editingTimeline !== null}
              onOpenChange={() => setEditingTimeline(null)}
            >
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Timeline Event</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Input
                      type="date"
                      defaultValue={
                        editingTimeline !== null
                          ? conditionDetails.timeline[editingTimeline].date
                          : ""
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Event</Label>
                    <Input
                      defaultValue={
                        editingTimeline !== null
                          ? conditionDetails.timeline[editingTimeline].event
                          : ""
                      }
                      placeholder="Enter event description"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => setEditingTimeline(null)}
                  >
                    Cancel
                  </Button>
                  <Button onClick={() => setEditingTimeline(null)}>Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </TabsContent>

          <TabsContent value="documents">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Related Documents</CardTitle>
                <div className="flex items-center gap-4">
                  <Label htmlFor="file-upload" className="cursor-pointer">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Upload className="h-4 w-4" />
                      Upload Document
                    </div>
                    <Input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      onChange={handleFileUpload}
                      accept=".pdf,.docx,.doc"
                    />
                  </Label>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {documents.map((doc) => (
                    <li
                      key={doc.id}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-accent group"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium">{doc.name}</span>
                        <span className="text-sm text-muted-foreground">
                          ({doc.type})
                        </span>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setSelectedDocument(doc.url)}
                        >
                          <FileText className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setShowDeleteDialog(true)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this item? This action cannot be
                undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setShowDeleteDialog(false)}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={() => setShowDeleteDialog(false)}
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog
          open={!!selectedDocument}
          onOpenChange={() => setSelectedDocument(null)}
        >
          <DialogContent className="max-w-4xl h-[80vh]">
            <DialogHeader>
              <DialogTitle>Document Preview</DialogTitle>
            </DialogHeader>
            {selectedDocument && (
              <iframe
                src={selectedDocument}
                className="w-full h-full"
                title="Document Preview"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </ContentLayout>
  );
}
