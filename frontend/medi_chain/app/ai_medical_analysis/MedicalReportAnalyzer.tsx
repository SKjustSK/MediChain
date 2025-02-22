"use client";

import type React from "react";

import { useState } from "react";
import { Send, Upload } from "lucide-react";

export default function MedicalReportAnalyzer() {
  const [input, setInput] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [messages, setMessages] = useState<
    { type: "user" | "bot"; content: string }[]
  >([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input && !file) return;

    setMessages((prev) => [
      ...prev,
      { type: "user", content: input || "Uploaded a file" },
    ]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content:
            "A haemoglobin level of 20 g/dL is high. Normal levels are usually between 13.8–17.2 g/dL for men, 12.1–15.1 g/dL for women, and 11–16 g/dL for children. A high level could be due to dehydration, lung disease, or other conditions. It's best to consult a doctor for further evaluation.",
        },
      ]);
    }, 1000);

    setInput("");
    setFile(null);
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="mb-4 h-96 overflow-y-auto rounded-lg border border-gray-300 bg-white p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 rounded-lg p-2 ${
              message.type === "user"
                ? "bg-gray-100 text-right"
                : "bg-gray-900 text-white"
            }`}
          >
            {message.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter medical report text..."
          className="flex-grow rounded-l-lg border border-gray-300 p-2 focus:border-gray-500 focus:outline-none"
        />
        <label className="cursor-pointer rounded-none border border-gray-300 bg-white p-2 hover:bg-gray-100">
          <Upload size={20} />
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="hidden"
          />
        </label>
        <button
          type="submit"
          className="rounded-r-lg bg-gray-900 p-2 text-white hover:bg-gray-700 focus:outline-none"
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
}
