"use client"
import React from 'react';
import Link from 'next/link';
import { Button } from './ui/moving-border';
import courseData from '../../data/music_courses.json'
import { BackgroundGradient } from './ui/background-gradient';


interface Course {
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
}

export const FeaturedCourses = () => {

  const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)
  return (
    <div className='py-12 pt-24'>
      <div>
        <div className='text-center text-white'>
          <h2 className='text-xl text-teal-600 font-semibold tracking-wide'>Featured Courses</h2>
          <p className='mt-3 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn With The Best</p>
        </div>
      </div>
      <div className="mt-20 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center ">
              <BackgroundGradient className="rounded-[22px] h-full max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 ">
                <div className="p-2 sm:p-6 flex flex-col items-center text-center flex-grow gap-4">
                  <p className="text-base sm:text-3xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-base text-neutral-600 dark:text-neutral-400">
                    {course.description}
                  </p>

                  <Link href={`/courses/${course.slug}`} className='mt-9 text-blue-500 font-bold hover:text-blue-800 text-lg'>
                      Learn More
                  </Link>
                </div>
              </BackgroundGradient>

            </div>
          ))}
        </div>
      </div>
      <div className='mt-20 text-center'>
        <Link href="/courses">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            View All Courses
          </Button>
        </Link>
      </div>
    </div>
  );
};


