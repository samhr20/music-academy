'use client'
import React from 'react'
import { StickyScroll } from "@/app/components/ui/sticky-scroll-reveal";
import Image from "next/image";


export const Whychooseus = () => {
  const content = [
    {
      title: "Hands-on Coding Experience",
      description:
        "Build real-world projects and enhance your skills by working on practical assignments. At Sam Codes, we focus on experiential learning, allowing you to develop and implement your coding abilities from day one.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <Image
            src="/hands-on-coding-experience.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Hands-on Coding Experience"
          />
        </div>
      ),
    },
    {
      title: "Guidance from Industry Experts",
      description:
        "Learn directly from experienced developers and professionals who will guide you through every step of your coding journey. Get personalized feedback, tips, and insights to fast-track your development skills.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/guidance-from-experts.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Guidance from Industry Experts"
          />
        </div>
      ),
    },
    {
      title: "Tailored Learning Paths",
      description:
        "Select a path that aligns with your interests and schedule. Whether you’re starting from scratch or enhancing specific skills, we provide flexible options to help you achieve your goals.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <Image
            src="/tailored-learning-paths.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Tailored Learning Paths"
          />
        </div>
      ),
    },
    {
      title: "Supportive Coding Community",
      description:
        "Become part of a thriving community of coders. Collaborate on projects, exchange knowledge, and grow alongside peers who are as passionate about coding as you are.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <Image
            src="/supportive-coding-community.jpeg"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
            alt="Supportive Coding Community"
          />
        </div>
      ),
    },
  ];
  
  
  return (
    <div >
      <StickyScroll content={content} />
    </div>
  )
}
