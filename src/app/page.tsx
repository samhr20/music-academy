import React from 'react'
import HeroSection from './components/HeroSection'
import { FeaturedCourses } from './components/FeautredCourses'

const page = () => {
  return (

    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
      <HeroSection />
      <FeaturedCourses />
    </main>

  )
}

export default page

