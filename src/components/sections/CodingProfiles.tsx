import { motion } from 'motion/react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { portfolioData } from '@/data/portfolio';
import { ExternalLink, Trophy } from 'lucide-react';

export function CodingProfiles() {
  const { codingProfiles } = portfolioData;

  return (
    <section id="coding-profiles" className="py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Coding Profiles" subtitle="My achievements in competitive programming." />

        <div className="grid md:grid-cols-3 gap-8">
          {codingProfiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-zinc-50 dark:bg-zinc-950 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">{profile.platform}</h3>
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-zinc-900 text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full shadow transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <div className="mb-6">
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">Problems Solved</p>
                <p className="text-4xl font-black text-indigo-600 dark:text-indigo-400 tracking-tight">
                  {profile.solved}
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">Badges & Achievements</p>
                <div className="flex flex-wrap gap-2">
                  {profile.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-full border border-amber-200 dark:border-amber-800/50"
                    >
                      <Trophy className="w-3 h-3" />
                      {badge}
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
