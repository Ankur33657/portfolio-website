import React from "react";
import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";

const contributions = [
  {
    title: "Enterprise Client Platform (Next.js)",
    image: "/clientapp.png",
    description:
      "Refactored a large production Next.js platform and developed core modules including Inspiration gallery, Warranty system, real-time Chat, and Labour reporting.",
    technologies: ["Next.js", "React", "TypeScript", "TanStack Query"],
    link: "https://github.com/Ankur33657",
  },
  {
    title: "AI Sales Agent",
    image: "/AiAgent.png",
    description:
      "Built an AI sales chatbot that automates lead conversations and qualification for the Leads365 platform.",
    technologies: ["Next.js", "OpenAI", "TypeScript", "React-chatbot-kit"],
    link: "https://github.com/Ankur33657",
  },
  {
    title: "Virtual Property Tour (VTour)",
    image: "/Vtour.png",
    description:
      "Integrated Panolens-based virtual tour system enabling immersive 360° property walkthrough experiences in the platform.",
    technologies: ["Next.js", "React", "TypeScript", "Panolens.js", "Three.js"],
    link: "https://github.com/Ankur33657",
  },
];

export const Contributions: React.FC = () => {
  return (
    <section id="contributions" className="py-24 ">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Contributions
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            Projects and platforms where I actively contributed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contributions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {item.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors w-full justify-center"
                  >
                    <Github size={16} />
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
