import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

export const Instructor = () => {
    const people = [
        {
            id: 1,
            name: "Shubham saini",
            designation: "Web developer",
            image: "/instructor.jpg"
        },

    ];
    return (
        <div className="relative flex flex-col justify-center items-center h-auto overflow-hidden">
            <WavyBackground className="max-w-3xl  pb-40">
                <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
                    Meet Your Mentor
                </p>
                <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
                    Discover the talented proffessionals who will guide your development journey
                </p>
                <div className="flex flex-row items-center justify-center my-10 w-full">
                    <AnimatedTooltip items={people} />
                </div>
            </WavyBackground>
        </div>
    )
}
