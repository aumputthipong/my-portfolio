// app/page.tsx
'use client'

import AboutMe from '@/component/AboutMe'
import Hero from '@/component/Hero'
import Projects from '@/component/Projects'



export default function Home() {
  return (
    <main >
      <Hero/>
      <AboutMe/>
      <Projects />
     
    </main>
  )
}