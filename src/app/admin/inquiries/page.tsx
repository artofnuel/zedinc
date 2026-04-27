"use client";

import { useState } from "react";
import { ArrowLeft, CheckCircle, Clock, Mail } from "lucide-react";
import Link from "next/link";

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", service: "Web Design", status: "new", date: "2024-03-20" },
    { id: 2, name: "Jane Smith", email: "jane@company.com", service: "Branding", status: "replied", date: "2024-03-18" },
  ]);

  return (
    <div className="min-h-screen bg-black text-white p-12 pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <Link href="/admin" className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-4xl font-display font-bold uppercase tracking-tighter">Inquiries</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[10px] uppercase tracking-[0.2em] text-light-grey">
                <th className="pb-4 font-normal">Name</th>
                <th className="pb-4 font-normal">Service</th>
                <th className="pb-4 font-normal">Status</th>
                <th className="pb-4 font-normal">Date</th>
                <th className="pb-4 font-normal">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {inquiries.map((inquiry) => (
                <tr key={inquiry.id} className="group hover:bg-white/5 transition-colors">
                  <td className="py-6">
                    <div className="font-bold">{inquiry.name}</div>
                    <div className="text-xs text-light-grey">{inquiry.email}</div>
                  </td>
                  <td className="py-6 text-sm">{inquiry.service}</td>
                  <td className="py-6">
                    {inquiry.status === "new" ? (
                      <span className="flex items-center gap-2 text-yellow-500 text-[10px] uppercase font-bold">
                        <Clock size={12} /> New
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 text-green-500 text-[10px] uppercase font-bold">
                        <CheckCircle size={12} /> Replied
                      </span>
                    )}
                  </td>
                  <td className="py-6 text-xs text-light-grey">{inquiry.date}</td>
                  <td className="py-6">
                    <button className="p-2 hover:text-white text-light-grey transition-colors">
                      <Mail size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
