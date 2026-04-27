"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Plus, Edit2, Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AdminProjects() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Raum Africa", category: "Real Estate", featured: true },
    { id: 2, title: "Etieka Farms", category: "Agriculture", featured: true },
    { id: 3, title: "Aquatec", category: "Technology", featured: false },
  ]);

  return (
    <div className="min-h-screen bg-black text-white p-12 pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ArrowLeft size={20} />
            </Link>
            <h1 className="text-4xl font-display font-bold uppercase tracking-tighter">Projects</h1>
          </div>
          <Button variant="outline" className="h-10 px-4">
            <Plus size={16} className="mr-2" /> Add Project
          </Button>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="p-6 border border-white/10 bg-off-black flex justify-between items-center hover:border-white/20 transition-all"
            >
              <div>
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-light-grey text-xs uppercase tracking-widest">{project.category}</p>
                {project.featured && (
                  <span className="mt-2 inline-block px-2 py-0.5 bg-white/10 text-[8px] uppercase tracking-tighter">Featured</span>
                )}
              </div>
              <div className="flex gap-4">
                <button className="p-2 hover:text-white text-light-grey transition-colors">
                  <Edit2 size={18} />
                </button>
                <button className="p-2 hover:text-red-500 text-light-grey transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
