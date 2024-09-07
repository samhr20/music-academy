import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";

export const DevelopmentJourney = () => {
    const developmentJourney = [
        {
            title: "Frontend Web Development",
            description:
                "Dive into the world of frontend web development. Learn HTML, CSS, and JavaScript to build stunning, interactive websites and user interfaces.",
            link: "/courses",
        },
        {
            title: "Backend Development Essentials",
            description:
                "Understand the core principles of backend development. Explore Node.js, Express.js, and MongoDB to build robust server-side applications.",
            link: "/courses",
        },
        {
            title: "Full-Stack Development Bootcamp",
            description:
                "Master both frontend and backend technologies with our comprehensive bootcamp. Gain skills in HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB.",
            link: "/courses",
        },
        {
            title: "React and Modern JavaScript",
            description:
                "Learn React and modern JavaScript techniques to build dynamic and efficient web applications. Enhance your skills with state management and component-based architecture.",
            link: "/courses",
        },
        {
            title: "Data Structures and Algorithms",
            description:
                "Deepen your understanding of data structures and algorithms. Develop problem-solving skills and learn techniques essential for coding interviews and efficient programming.",
            link: "/courses",
        },
        {
            title: "API Development and Integration",
            description:
                "Explore API development and integration techniques. Learn how to build RESTful APIs, connect with third-party services, and handle data exchange effectively.",
            link: "/courses",
        },
    ];

    return (
        <div className="max-w-8xl mx-auto p-8">
            <p className="text-xl text-center md:text-5xl my-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Enhance Your Development Journey
            </p>
            <HoverEffect items={developmentJourney} />
        </div>
    )
}
