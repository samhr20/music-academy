'use client'
import React from 'react'
import { StickyScroll } from "@/app/components/ui/sticky-scroll-reveal";
import Image from "next/image";


export const Whychooseus = () => {
  const content = [
    {
      title: "Collaborative Songwriting",
      description:
        "Create music together in real time with your bandmates, producers, and collaborators. Share ideas, refine lyrics, and compose melodies efficiently. With our platform, you can streamline your creative process and produce high-quality music faster.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
             <Image
            src="/images.jpeg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Collaborative Songwriting"
          />
        </div>
      ),
    },
    {
      title: "Real-time Jam Sessions",
      description:
        "See musical changes as they happen. With our platform, you can track every note and beat in real time. No more confusion about the latest version of your track. Say goodbye to the chaos of multiple audio files and embrace the simplicity of real-time musical updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/RealtimeJamSessions.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Real-time Jam Session"
          />
        </div>
      ),
    },
    {
      title: "Version Control for Tracks",
      description:
        "Experience real-time updates and never stress about track version control again. Our platform ensures that you're always working on the most recent version of your song, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your music production without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <Image
            src="/VersionControlforTracks.jpeg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Version Control for Tracks"
          />
        </div>
      ),
    },
    {
      title: "Unlimited Creative Content",
      description:
        "Never run out of musical inspiration. Our platform provides you with endless resources and tools to keep your creativity flowing. From sample libraries to lyric generators, stay inspired and keep producing music without hitting a creative block.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         <Image
            src="/sstk-music-announce.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt=" Unlimited Creative Content"
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
