import { motion } from 'motion/react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { portfolioData } from '@/data/portfolio';
import { Briefcase } from 'lucide-react';

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading title="Experience" subtitle="My professional journey and career milestones." />

        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 md:ml-0">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 ml-8 md:ml-12 relative"
            >
              <span className="absolute -left-10 md:-left-14 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-4 border-white dark:border-zinc-950 shadow">
                <Briefcase className="w-4 h-4" />
              </span>

              <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{exp.role}</h3>
                    <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400">{exp.company}</p>
                  </div>
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                    {exp.duration}
                  </span>
                </div>

                <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 mb-6">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-base leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
