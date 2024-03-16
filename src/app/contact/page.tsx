"use client";

import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-[45rem] w-full rounded-md bg-slate-900 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 mt-16">
        <h1 className="relative z-10 text-lg mb-8 md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We are here to help with any questions about our courses, programs, or
          events. Reach out and let us know how we can assist you in your
          musical journey.
        </p>
        <input
          type="email"
          placeholder="Email"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-4"
        />
        <textarea
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-4"
          placeholder="Your Message"
          rows={5}
        ></textarea>
        <Link href={"/"}>
          <button className="text-white bg-teal-500 rounded py-2 px-4 mt-8 font-bold">
            Send Message
          </button>
        </Link>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default page;
