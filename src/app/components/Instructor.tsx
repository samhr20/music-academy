import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

export const Instructor = () => {
    const people = [
        {
            id: 1,
            name: "John Doe",
            designation: "Software Engineer",
            image: "/instructor-1.webp"
        },
        {
            id: 2,
            name: "Robert Johnson",
            designation: "Product Manager",
            image: "/instructor-2.webp"
        },
        {
            id: 3,
            name: "Jane Smith",
            designation: "Data Scientist",
            image: "/instructor-3.webp"
        },
        {
            id: 4,
            name: "Emily Davis",
            designation: "UX Designer",
            image: "/instructor-4.webp"
        },
        {
            id: 5,
            name: "Tyler Durden",
            designation: "Soap Developer",
            image: "/instructor-5.webp"
        },
        {
            id: 6,
            name: "Dora",
            designation: "The Explorer",
            image: "/instructor-6.webp"
        }
    ];
    return (
        <div className="relative flex flex-col justify-center items-center h-auto overflow-hidden">
            <WavyBackground className="max-w-3xl  pb-40">
                <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
                    Meet Our Instructors
                </p>
                <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
                    Discover the talented proffessionals who will guide your musical journey
                </p>
                <div className="flex flex-row items-center justify-center my-10 w-full">
                    <AnimatedTooltip items={people} />
                </div>
            </WavyBackground>
        </div>
    )
}
