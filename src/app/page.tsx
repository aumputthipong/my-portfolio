// app/page.tsx
'use client'

import AboutMe from '@/component/AboutMe'
import Hero from '@/component/Hero'
import Projects from '@/component/Projects'
import SeniorProject from '@/component/SeniorProject'


export default function Home() {
  return (
    <main >
      <Hero/>
      <AboutMe/>
      <SeniorProject />
      <Projects />
     
    </main>
  )
}