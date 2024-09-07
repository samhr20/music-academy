import React from 'react'
import HeroSection from '@/app/components/HeroSection'
import { FeaturedCourses } from '@/app/components/FeautredCourses'
import { Whychooseus } from '@/app/components/Whychooseus'
import { GridCards } from '@/app/components/GridCards'
import { DevelopmentJourney } from '@/app/components/DevelopmentJourney'
import { Instructor } from '@/app/components/Instructor'

const page = () => {
  return (

    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.03]  '>
      <HeroSection />
      <FeaturedCourses />
      <Whychooseus/>
      <GridCards/>
      <DevelopmentJourney/>
      <Instructor/>
          </main>

  )
}

export default page

