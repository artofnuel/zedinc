"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Ebenezer Wamuo",
    role: "Visual & Brand Designer, Co-founder",
    quote: "Crafting visual identities that leave a lasting mark.",
    image: "/team-ebenezer.jpg" // Placeholder
  },
  {
    name: "Emmanuel Inua",
    role: "Web Dev & Digital Artist, Co-founder",
    quote: "Blending code and art into seamless digital experiences.",
    image: "/team-emmanuel.jpg" // Placeholder
  }
];

export default function AboutPage() {
  return (
    <div className="snap-container no-scrollbar">
      {/* Intro */}
      <Section id="intro">
        <h1 className="text-6xl md:text-9xl mb-8 leading-none">We are <br />Zedinc.</h1>
        <p className="text-light-grey text-xl md:text-3xl max-w-2xl font-light leading-relaxed">
          A creative brand studio specializing in Branding, Design, and Digital experiences. 
          Sharp. Intentional. Remarkable.
        </p>
      </Section>

      {/* Mission */}
      <Section id="mission" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl mb-6 uppercase tracking-widest">Our Mission</h2>
          <p className="text-light-grey leading-relaxed">
            We believe branding is more than just a logo. It's the soul of your business. 
            Our mission is to help founders and visionaries build brands that are not only 
            beautiful but functional and recognizable in any medium.
          </p>
        </div>
        <div className="text-[15vw] font-display font-extrabold opacity-5 leading-none select-none pointer-events-none uppercase">
          Craft <br /> Craft <br /> Craft
        </div>
      </Section>

      {/* Team */}
      <Section id="team">
        <h2 className="text-3xl md:text-5xl mb-16 uppercase">The Visionaries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {team.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[4/5] bg-dark-grey overflow-hidden group"
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10" />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-2xl font-bold uppercase">{member.name}</h3>
                <p className="text-light-grey text-sm mb-4 uppercase tracking-widest">{member.role}</p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="text-white italic text-sm border-t border-white/20 pt-4"
                >
                  "{member.quote}"
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Philosophy Deep-Dive */}
      <Section id="principles" className="text-center items-center">
        <h2 className="text-3xl md:text-5xl mb-16 uppercase">Our Principles</h2>
        <div className="space-y-24 max-w-4xl">
          {[
            { title: "Create Trust Instantly", desc: "First impressions are non-negotiable." },
            { title: "Be Recognizable Immediately", desc: "Distinctive design that cuts through the noise." },
            { title: "Work Across Every Platform", desc: "Scalability from business cards to billboards." }
          ].map((principle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl md:text-6xl mb-4 italic">0{i + 1}. {principle.title}</h3>
              <p className="text-light-grey text-lg">{principle.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
