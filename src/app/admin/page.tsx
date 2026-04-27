"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Users, 
  Briefcase, 
  Settings, 
  ExternalLink,
  MessageSquare
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-12 pt-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-12 uppercase tracking-tighter">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/admin/inquiries" className="group">
            <div className="p-8 border border-white/10 bg-off-black hover:border-white/40 transition-all h-full">
              <MessageSquare className="mb-6 text-white/50 group-hover:text-white transition-colors" />
              <h2 className="text-xl mb-2 font-bold">Inquiries</h2>
              <p className="text-light-grey text-sm">View and manage contact form submissions.</p>
            </div>
          </Link>

          <Link href="/admin/projects" className="group">
            <div className="p-8 border border-white/10 bg-off-black hover:border-white/40 transition-all h-full">
              <Briefcase className="mb-6 text-white/50 group-hover:text-white transition-colors" />
              <h2 className="text-xl mb-2 font-bold">Projects</h2>
              <p className="text-light-grey text-sm">Update your portfolio and featured work.</p>
            </div>
          </Link>

          <Link href="/admin/services" className="group">
            <div className="p-8 border border-white/10 bg-off-black hover:border-white/40 transition-all h-full">
              <Settings className="mb-6 text-white/50 group-hover:text-white transition-colors" />
              <h2 className="text-xl mb-2 font-bold">Services</h2>
              <p className="text-light-grey text-sm">Manage the services you offer.</p>
            </div>
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <h2 className="text-xs uppercase tracking-[0.4em] text-light-grey mb-8">System Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-4 bg-off-black border border-white/5">
              <span className="text-sm">Supabase Connection</span>
              <span className="px-2 py-1 bg-green-500/10 text-green-500 text-[10px] uppercase font-bold">Connected</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-off-black border border-white/5">
              <span className="text-sm">Resend API</span>
              <span className="px-2 py-1 bg-yellow-500/10 text-yellow-500 text-[10px] uppercase font-bold">Pending Setup</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
