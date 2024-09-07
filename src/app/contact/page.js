"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/app/components/ui/aurora-background";
import { useForm, ValidationError } from '@formspree/react';
import Link from "next/link"; 

const ContactPage = () => {
  const [state, handleSubmit] = useForm("mqazjwko");

  if (state.succeeded) {
    return (
      <AuroraBackground>
        <div className= "min-h-screen py-20 pt-36">
          <div className="mt-9 p-4 relative flex flex-col justify-center items-center gap-5 z-10 w-full text-center">
            <p className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Submitted</p>
        
            <Link href="/">
              <button className="bg-emerald-500 p-2 px-4 rounded-xl hover:bg-emerald-400 text-lg font-semibold text-white">
                Home
              </button>
            </Link>
          </div>
        </div>
      </AuroraBackground>
    );
  }

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="min-h-screen py-20 pt-36">
          <div className="mt-9 p-4 relative z-10 w-full text-center">
            <p className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Contact Us</p>
            <p className="mt-4 font-normal text-sm md:text-sm text-gray-400 max-w-xl mx-auto">We are here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your coding journey.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              id="email"
              type="email"
              placeholder="Your Email Address"
              name="email"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full mt-4 bg-neutral-950 placeholder:text-neutral-700 px-4 py-3 text-white"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              className="custom-scrollbar rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full mt-4 bg-neutral-950 placeholder:text-neutral-700 px-4 py-3 text-white"
              rows={8}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <div className="flex justify-center items-center mt-4">
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-emerald-500 p-2 px-4 rounded-xl hover:bg-emerald-400 text-lg font-semibold text-white"
              >
                {state.submitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default ContactPage;
