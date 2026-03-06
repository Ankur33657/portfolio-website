import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Copy } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const { personal } = portfolioData;

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // small visual affordance: use native alert as a fallback (keep it tiny)
      // in a real app replace with a non-blocking toast/snackbar
      alert("Copied to clipboard");
    } catch (e) {
      console.error("copy failed", e);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-24 bg-zinc-50 dark:bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* left: heading + intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45 }}
            className="space-y-6"
          >
            <SectionHeading
              title="Get In Touch"
              subtitle="Have a project in mind or just want to say hi?"
            />

            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              Let&apos;s talk about your project
            </h3>

            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
              I&apos;m currently available for freelance work and open to new
              opportunities. Feel free to reach out — I typically reply within a
              few business days.
            </p>

            {/* Optional: small CTA row on mobile */}
            <div className="flex gap-3 items-center">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-full text-sm font-medium hover:opacity-90 transition"
                aria-label={`Email ${personal.email}`}
              >
                <Mail className="w-4 h-4" />
                Email me
              </a>

              <button
                type="button"
                onClick={() => handleCopy(personal.email)}
                className="inline-flex items-center gap-2 px-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-full text-sm text-zinc-700 dark:text-zinc-300 hover:shadow-sm transition"
                aria-label="Copy email to clipboard"
              >
                <Copy className="w-4 h-4" />
                <span className="hidden sm:inline">Copy</span>
              </button>
            </div>
          </motion.div>

          {/* right: contact cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-shadow">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    Email
                  </p>
                  <div className="mt-1 flex items-center gap-3">
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all"
                    >
                      {personal.email}
                    </a>
                    <button
                      onClick={() => handleCopy(personal.email)}
                      className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
                      aria-label="Copy email"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-shadow">
                <div className="p-3 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    Location
                  </p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    {personal.location}
                  </p>
                </div>
              </div>
            </div>

            {/* full-width card (desktop) */}
            <div className="p-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-shadow">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Prefer a message?
              </p>
              <p className="mt-2 text-sm md:text-base text-zinc-700 dark:text-zinc-300">
                If you have a brief project overview (timeline, budget, goals),
                paste it in an email and I&apos;ll get back with availability
                and next steps.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
