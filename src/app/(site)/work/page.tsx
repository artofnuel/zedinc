"use client";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

const featuredProjects = [
  {
    title: "Raum Africa",
    category: "Real Estate • Brand Identity",
    desc: "Modern luxury branding for a premium real estate developer.",
    image: "/project-raum.jpg", // Placeholder
    tags: ["Branding", "Identity", "Digital"]
  },
  {
    title: "Etieka Farms",
    category: "Agriculture • Web Design",
    desc: "A digital-first approach to traditional agriculture.",
    image: "/project-etieka.jpg", // Placeholder
    tags: ["Web", "UI/UX", "Development"]
  },
  {
    title: "Aquatec",
    category: "Technology • Brand Strategy",
    desc: "Strategic positioning for a sustainable tech company.",
    image: "/project-aquatec.jpg", // Placeholder
    tags: ["Strategy", "Design", "Product"]
  }
];

const designWork = [
  { title: "Voxolis", category: "Logo", image: "/work-voxolis.jpg" },
  { title: "Ar'Omo", category: "Poster", image: "/work-aromo.jpg" },
  { title: "Misty Echoes", category: "Flyer", image: "/work-misty.jpg" },
  { title: "Homecoming", category: "Identity", image: "/work-homecoming.jpg" }
];

export default function WorkPage() {
  return (
    <div className="snap-container no-scrollbar">
      {/* Header */}
      <Section id="header">
        <h1 className="text-6xl md:text-9xl mb-8 leading-none uppercase">Selected <br />Work.</h1>
        <p className="text-light-grey text-xl max-w-2xl">
          A showcase of our most intentional projects. We don't just build websites; we build brand legacies.
        </p>
      </Section>

      {/* Featured Projects */}
      {featuredProjects.map((project, i) => (
        <Section key={i} id={`project-${i}`} className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            <div className="flex flex-col justify-center p-12 lg:p-24 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.4em] text-light-grey block mb-4">{project.category}</span>
                <h2 className="text-5xl md:text-8xl mb-6 uppercase leading-none">{project.title}</h2>
                <p className="text-light-grey text-lg max-w-md">{project.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <span key={j} className="px-3 py-1 border border-white/10 text-[10px] uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
              <Button variant="outline" className="w-fit">View Project</Button>
            </div>
            <div className="relative bg-dark-grey overflow-hidden group">
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="w-full h-full flex items-center justify-center text-white/10 text-9xl font-display uppercase italic">
                {project.title}
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* Design Work Grid */}
      <Section id="design-grid">
        <h2 className="text-3xl md:text-5xl mb-16 uppercase">Creative Explorations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[60vh]">
          {designWork.map((work, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 0.98 }}
              className="relative bg-dark-grey flex items-center justify-center group overflow-hidden border border-white/5"
            >
              <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity z-20">
                {work.title} / {work.category}
              </span>
              <div className="text-white/5 text-4xl font-display uppercase">{work.title}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section id="cta" className="text-center items-center">
        <h2 className="text-4xl md:text-7xl mb-12 uppercase tracking-tighter italic">Ready to be next?</h2>
        <Button href="/contact">Let's Build Your Legacy</Button>
      </Section>
    </div>
  );
}
