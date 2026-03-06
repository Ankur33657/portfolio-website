import { motion } from 'motion/react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { portfolioData } from '@/data/portfolio';
import { Award, ExternalLink } from 'lucide-react';

export function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Certifications" subtitle="Professional credentials and continuous learning." />

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-zinc-50 dark:bg-zinc-950 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="p-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-indigo-500" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-medium mb-1">{cert.issuer}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">{cert.year}</p>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-zinc-900 text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full shadow-sm border border-zinc-100 dark:border-zinc-800 transition-colors self-start sm:self-center"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
