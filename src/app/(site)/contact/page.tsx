"use client";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Send, Phone, Mail } from "lucide-react";
import { InstagramIcon, TwitterIcon } from "@/components/icons/SocialIcons";

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: "",
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Mocking submission for now
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form Data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="snap-container no-scrollbar">
      {/* Header */}
      <Section id="header">
        <h1 className="text-6xl md:text-9xl mb-8 leading-none uppercase">Let's <br />Build.</h1>
        <p className="text-light-grey text-xl max-w-2xl italic">
          Something remarkable is about to begin. Tell us about your vision.
        </p>
      </Section>

      {/* Contact Form */}
      <Section id="form" className="grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <h2 className="text-2xl mb-12 uppercase tracking-widest">Send an Inquiry</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-2">
              <input
                {...register("name")}
                placeholder="YOUR NAME *"
                className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors text-sm uppercase tracking-widest"
              />
              {errors.name && <p className="text-red-500 text-[10px] uppercase">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <input
                {...register("email")}
                placeholder="YOUR EMAIL *"
                className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors text-sm uppercase tracking-widest"
              />
              {errors.email && <p className="text-red-500 text-[10px] uppercase">{errors.email.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <input
                  {...register("company")}
                  placeholder="COMPANY NAME"
                  className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors text-sm uppercase tracking-widest"
                />
              </div>
              <div className="space-y-2">
                <select
                  {...register("service")}
                  className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors text-sm uppercase tracking-widest appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-black">SELECT SERVICE *</option>
                  <option value="branding" className="bg-black">BRAND IDENTITY</option>
                  <option value="strategy" className="bg-black">BRAND STRATEGY</option>
                  <option value="digital" className="bg-black">DIGITAL ASSETS</option>
                  <option value="web" className="bg-black">WEB DESIGN & DEV</option>
                </select>
                {errors.service && <p className="text-red-500 text-[10px] uppercase">{errors.service.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <textarea
                {...register("message")}
                placeholder="TELL US ABOUT YOUR PROJECT *"
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors text-sm uppercase tracking-widest resize-none"
              />
              {errors.message && <p className="text-red-500 text-[10px] uppercase">{errors.message.message}</p>}
            </div>

            <Button 
              className="w-full" 
              variant="outline"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Sending..." : isSuccess ? "Sent Successfully" : "Send Inquiry"}
            </Button>
          </form>
        </div>

        <div className="flex flex-col justify-center space-y-16">
          <div>
            <h3 className="text-xs uppercase tracking-[0.4em] text-light-grey mb-8">Direct Contact</h3>
            <div className="space-y-4">
              <a href="mailto:hello@zedinc.studio" className="flex items-center gap-4 text-xl hover:text-light-grey transition-colors">
                <Mail size={20} /> hello@zedinc.studio
              </a>
              <a href="tel:+234000000000" className="flex items-center gap-4 text-xl hover:text-light-grey transition-colors">
                <Phone size={20} /> +234 812 345 6789
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.4em] text-light-grey mb-8">Social</h3>
            <div className="flex gap-8">
              <a href="#" className="hover:text-light-grey transition-colors"><InstagramIcon size={24} /></a>
              <a href="#" className="hover:text-light-grey transition-colors"><TwitterIcon size={24} /></a>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <h3 className="text-xs uppercase tracking-[0.4em] text-light-grey mb-4">Location</h3>
            <p className="text-lg">Lagos, Nigeria • Remote Globally</p>
          </div>
        </div>
      </Section>

      {/* Optional Map Placeholder Section */}
      <Section id="map" className="p-0">
        <div className="w-full h-full bg-dark-grey flex items-center justify-center relative">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale" />
          <h2 className="text-2xl uppercase tracking-[0.5em] text-white/20">Zedinc HQ / Lagos</h2>
        </div>
      </Section>
    </div>
  );
}
