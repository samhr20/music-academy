"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export const GridCards = () => {
    const testimonials = [
        {
          quote:
            "Sam Codes completely transformed my approach to coding. The hands-on experience and guidance from experts have made me a more confident developer. I couldn't have asked for a better place to start my journey!",
          name: "Aarav Sharma",
          title: "Junior Web Developer",
        },
        {
          quote:
            "The supportive community and flexible learning paths at Sam Codes were exactly what I needed. I was able to refine my skills and grow as a developer at my own pace, with constant encouragement and support.",
          name: "Isha Patel",
          title: "Full-Stack Developer",
        },
        {
          quote:
            "I loved the focus on practical projects! I gained real-world experience that I could immediately apply to my work. The instructors are knowledgeable and approachable, and I felt empowered throughout the entire learning process.",
          name: "Rohan Kumar",
          title: "Freelance Developer",
        },
        {
          quote:
            "Sam Codes provided me with the mentorship and resources I needed to transition into a tech career. The personalized feedback and real-world projects were invaluable in helping me build a solid foundation in web development.",
          name: "Sanya Mehta",
          title: "Front-End Developer",
        },
        {
          quote:
            "From beginner to a confident coder – that's how I would describe my journey with Sam Codes. The program is structured, engaging, and tailored to meet the needs of every learner. Highly recommended!",
          name: "Vivaan Rao",
          title: "Software Engineer",
        },
      ];
      
    return (
        
        <div className="h-[40rem] rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <p className="text-xl md:text-5xl my-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Hear Our Harmony : Voices of success</p>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />

        </div>
    )
}
