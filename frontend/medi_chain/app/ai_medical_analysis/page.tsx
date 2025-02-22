import MedicalReportAnalyzer from ".//MedicalReportAnalyzer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">
        Medical Report Analyzer
      </h1>
      <MedicalReportAnalyzer />
    </main>
  );
}
