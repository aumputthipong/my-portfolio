// app/page.tsx
'use client'

import AboutMe from '@/component/AboutMe'
import ContactSection from '@/component/ContactSection'
import Hero from '@/component/Hero'
import Projects from '@/component/Projects'



export default function Home() {
  return (
    <main >
      <div className="bg-white text-black dark:bg-zinc-900 dark:text-white">
  <h1 className="text-3xl font-bold">Hello Dark Mode</h1>
</div>
      <Hero/>
      <AboutMe/>
      <Projects />
      <ContactSection/>
     
    </main>
  )
}