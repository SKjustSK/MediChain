import AdminPanelLayout from "@/components/doctor_dashboard/doctor-panel/admin-panel-layout";

export default async function DoctorDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminPanelLayout>{children}</AdminPanelLayout>;
}
