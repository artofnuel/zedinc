"use client";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

const services = [
  { title: "Brand Identity", desc: "Crafting visual languages that resonate." },
  { title: "Brand Strategy", desc: "Defining the 'why' behind the 'what'." },
  { title: "Digital Brand Assets", desc: "High-impact assets for the digital era." },
  { title: "Web Design & Dev", desc: "Premium digital experiences that convert." },
];

export default function HomePage() {
  return (
    <div className="snap-container no-scrollbar">
      {/* Hero Section */}
      <Section id="hero" className="justify-center items-center text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-8xl mb-8 overflow-hidden flex flex-wrap justify-center gap-x-4">
            {"Your brand is speaking.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.1, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-light-grey text-lg md:text-2xl mb-12 font-light italic"
          >
            Is it saying the right thing?
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Button href="/work">See Our Work</Button>
            <Button href="/contact" variant="outline">Start a Project</Button>
          </motion.div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section id="problem" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl mb-6">The Noise is Loud.</h2>
          <p className="text-light-grey text-xl md:max-w-md">
            Most brands are shouting into the void without a clear voice. We help you cut through.
          </p>
        </div>
        <div className="space-y-8">
          {[
            { title: "Weak Branding", desc: "Losing trust before you even speak." },
            { title: "Inconsistent Identity", desc: "Confusing your audience at every touchpoint." },
            { title: "Non-converting Sites", desc: "Beautiful designs that fail to drive action." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="border-l border-white/20 pl-6"
            >
              <h3 className="text-xl mb-2">{item.title}</h3>
              <p className="text-light-grey text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Services Preview Section */}
      <Section id="services" className="justify-start pt-32">
        <h2 className="text-3xl md:text-5xl mb-16 uppercase tracking-tighter">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-8 border border-white/10 bg-off-black group hover:border-white/50 transition-all cursor-default"
            >
              <h3 className="text-lg mb-4 group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-light-grey text-sm leading-relaxed group-hover:text-off-white transition-colors">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section id="philosophy" className="text-center items-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl md:text-7xl leading-tight">
            Design is not decoration. <br />
            <span className="italic text-light-grey">Design is communication.</span>
          </h2>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section id="cta" className="text-center items-center bg-white text-black">
        <h2 className="text-5xl md:text-9xl mb-12 text-black uppercase tracking-tighter">Let's Build.</h2>
        <Button href="/contact" className="bg-black text-white border-black hover:bg-transparent hover:text-black">
          Start Your Journey
        </Button>
      </Section>
    </div>
  );
}
