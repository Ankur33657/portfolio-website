/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Education } from '@/components/sections/Education';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { CodingProfiles } from '@/components/sections/CodingProfiles';
import { Certifications } from '@/components/sections/Certifications';
import { Activities } from '@/components/sections/Activities';
import { GithubActivity } from '@/components/sections/GithubActivity';
import { Contact } from '@/components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans selection:bg-indigo-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <CodingProfiles />
        <Education />
        <Certifications />
        <Activities />
        <GithubActivity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
