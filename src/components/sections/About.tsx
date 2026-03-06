import { motion } from 'motion/react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { portfolioData } from '@/data/portfolio';
import { Code2, Cpu, Globe } from 'lucide-react';

export function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="About Me" subtitle="A brief introduction to who I am and what I do." />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400"
          >
            <p>{about.introduction}</p>
            <p>{about.passion}</p>
            <p>{about.goals}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="p-6 bg-zinc-50 dark:bg-zinc-950 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
              <Code2 className="w-10 h-10 text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Clean Code</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Writing maintainable, scalable, and efficient code.</p>
            </div>
            <div className="p-6 bg-zinc-50 dark:bg-zinc-950 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
              <Cpu className="w-10 h-10 text-violet-500 mb-4" />
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">System Design</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Architecting robust and scalable backend systems.</p>
            </div>
            <div className="p-6 bg-zinc-50 dark:bg-zinc-950 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow sm:col-span-2">
              <Globe className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Web Technologies</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Building modern, responsive, and accessible web applications.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
