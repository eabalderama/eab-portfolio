'use client';

import Image from 'next/image';
import Experience from './components/Experience';
import Profile from './components/Profile';
import Skills from './components/Skills';

import TopProjects from './components/TopProjects';

export default function Home() {
  return (
    <main className="pb-28 px-2">
      <Profile />
      <Skills />
      <Experience />
      <TopProjects />
    </main>
  );
}
