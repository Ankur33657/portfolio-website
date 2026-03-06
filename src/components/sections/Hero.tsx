import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, FileText, ChevronDown } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const useTypingEffect = (words: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 1500) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[loopNum % words.length];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

export function Hero() {
  const { personal } = portfolioData;
  const typedText = useTypingEffect(personal.roles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-zinc-50 dark:bg-zinc-950"
    >
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-xl">
            <img
              src={personal.photoUrl}
              alt={personal.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="absolute bottom-2 right-2 bg-emerald-500 w-6 h-6 rounded-full border-4 border-white dark:border-zinc-800"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4"
        >
          Hi, I'm {personal.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-3xl font-medium text-zinc-600 dark:text-zinc-400 mb-6 h-10 flex items-center justify-center"
        >
          <span>I am a </span>
          <span className="ml-2 text-indigo-600 dark:text-indigo-400 font-semibold border-r-2 border-indigo-600 dark:border-indigo-400 pr-1 animate-[blink_1s_infinite]">
            {typedText}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 mb-10"
        >
          {personal.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={personal.resumeUrl}
            download="Ankur_Singh_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-full font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-lg hover:shadow-xl"
          >
            <FileText className="w-5 h-5" />
            Download Resume
          </a>
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 rounded-full shadow-md hover:shadow-lg transition-all border border-zinc-200 dark:border-zinc-800"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 rounded-full shadow-md hover:shadow-lg transition-all border border-zinc-200 dark:border-zinc-800"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-3 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 rounded-full shadow-md hover:shadow-lg transition-all border border-zinc-200 dark:border-zinc-800"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <a
            href="#about"
            className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
