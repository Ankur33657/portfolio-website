import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { portfolioData } from '@/data/portfolio';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  const { personal } = portfolioData;


  return (
    <section id="contact" className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hi?"
        />

        <div className="grid mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
              Let's talk about your project
            </h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              I'm currently available for freelance work and open to new
              opportunities. Feel free to reach out to me!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-shadow">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    Email Me
                  </p>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-shadow">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    Location
                  </p>
                  <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {personal.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
