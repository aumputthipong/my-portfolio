// app/page.tsx
'use client'

import AboutMe from '@/component/AboutMe'
import ContactSection from '@/component/ContactSection'
import Footer from '@/component/Footer'
import Hero from '@/component/Hero'
import Navbar from '@/component/Navbar'
import Projects from '@/component/Projects'



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <ContactSection />
    </>
  );
}