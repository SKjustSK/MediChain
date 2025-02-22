import AdminPanelLayout from "@/components/patient_dashboard/patient-panel/admin-panel-layout";

export default async function PatientDoctorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminPanelLayout>{children}</AdminPanelLayout>;
}
