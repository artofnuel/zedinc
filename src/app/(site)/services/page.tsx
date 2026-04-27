"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { 
  Fingerprint, 
  Target, 
  Layers, 
  Monitor 
} from "lucide-react";

const services = [
  {
    title: "Brand Identity",
    icon: <Fingerprint className="w-12 h-12" />,
    desc: "Visual systems that speak your truth.",
    inclusions: ["Logo Design", "Typography Systems", "Color Palettes", "Brand Guidelines"]
  },
  {
    title: "Brand Strategy",
    icon: <Target className="w-12 h-12" />,
    desc: "Strategic positioning for market dominance.",
    inclusions: ["Market Research", "Brand Positioning", "Tone of Voice", "Competitive Analysis"]
  },
  {
    title: "Digital Brand Assets",
    icon: <Layers className="w-12 h-12" />,
    desc: "High-impact assets for social and web.",
    inclusions: ["Social Media Kits", "Ad Creatives", "Email Templates", "Presentation Decks"]
  },
  {
    title: "Web Design & Development",
    icon: <Monitor className="w-12 h-12" />,
    desc: "Premium websites built for conversion.",
    inclusions: ["UI/UX Design", "Next.js Development", "E-commerce", "Performance Optimization"]
  }
];

const process = [
  { step: "01", title: "Discovery", desc: "Understanding your vision and challenges." },
  { step: "02", title: "Strategy", desc: "Defining the blueprint for your brand." },
  { step: "03", title: "Design", desc: "Crafting the visual soul of your brand." },
  { step: "04", title: "Build", desc: "Turning designs into high-performance tools." },
  { step: "05", title: "Launch", desc: "Sending your brand into the world with impact." }
];

export default function ServicesPage() {
  return (
    <div className="snap-container no-scrollbar">
      {/* Header */}
      <Section id="header">
        <h1 className="text-6xl md:text-9xl mb-8 leading-none">What <br />We Do.</h1>
        <p className="text-light-grey text-xl max-w-2xl">
          We combine strategy with high-end design to build brands that don't just look good — they lead.
        </p>
      </Section>

      {/* Service Details */}
      {services.map((service, i) => (
        <Section key={i} id={`service-${i}`} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8 text-white/50">{service.icon}</div>
            <h2 className="text-4xl md:text-7xl mb-6">{service.title}</h2>
            <p className="text-light-grey text-xl mb-8">{service.desc}</p>
          </div>
          <div className="bg-dark-grey p-12 border border-white/5">
            <h3 className="text-xs uppercase tracking-[0.3em] mb-8 text-white/40">Included</h3>
            <ul className="space-y-4">
              {service.inclusions.map((item, j) => (
                <li key={j} className="text-lg flex items-center gap-4">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ))}

      {/* Process Timeline */}
      <Section id="process">
        <h2 className="text-3xl md:text-5xl mb-24 uppercase">Our Process</h2>
        <div className="relative">
          {/* Horizontal Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4">
            {process.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 text-center"
              >
                <div className="w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-white transition-colors">
                  <span className="text-xs font-bold">{item.step}</span>
                </div>
                <h3 className="text-lg mb-2 uppercase tracking-widest">{item.title}</h3>
                <p className="text-light-grey text-xs leading-relaxed px-4">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
