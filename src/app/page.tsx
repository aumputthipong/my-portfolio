// app/page.tsx
'use client'

import AboutMe from '@/component/AboutMe'
import Hero from '@/component/Hero'
import Projects from '@/component/Projects'
import SeniorProject from '@/component/SeniorProject'
import { Box, Container, Typography, Button } from '@mui/material'
import { Sen } from 'next/font/google'

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-black">
      <Hero/>
      <AboutMe/>
      <SeniorProject />
      <Projects />
     
    </main>
  )
}