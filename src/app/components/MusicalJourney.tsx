import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";


export const MusicalJourney = () => {
    const musicalJourney = [
        {
            title: "Music Theory Online Courses",
            description:
                "Unlock the secrets of music theory with comprehensive online courses. Learn about chords, scales, melody, rhythm, and more to deepen your understanding of music.",
            link: "/courses",
        },
        {
            title: "Instrument Lessons",
            description:
                "Master your instrument of choice with expert lessons from experienced musicians. Whether you're a beginner or advanced player, there's something for everyone.",
            link: "/courses",
        },
        {
            title: "Music Production Software",
            description:
                "Explore professional music production software to unleash your creativity. From recording and editing to mixing and mastering, take your music to the next level.",
            link: "/courses",
        },
        {
            title: "Live Music Events",
            description:
                "Immerse yourself in the magic of live music events. Discover concerts, festivals, and performances featuring your favorite artists and genres.",
            link: "/courses",
        },
        {
            title: "Music Community Forums",
            description:
                "Connect with fellow music enthusiasts in online forums. Share your passion, seek advice, and discover new music recommendations from a vibrant community.",
            link: "/courses",
        },
        {
            title: "Music Gear and Equipment",
            description:
                "Browse a wide selection of music gear and equipment for musicians of all levels. Find instruments, accessories, and studio essentials to enhance your musical journey.",
            link: "/courses",
        },
    ];
    return (
        <div className="max-w-8xl  mx-auto p-8">
            <p className="text-xl text-center md:text-5xl my-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Enhance Your Musical Journey</p>
            <HoverEffect items={musicalJourney} />
        </div>
    )
}


