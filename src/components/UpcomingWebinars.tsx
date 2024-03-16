'use client'
import React from "react";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";


const UpcomingWebinars = () => {
    const featuredWebinars = [
        {
          title: "Understanding Music Theory",
          description:
            "Dive deep into the fundamentals of music theory and enhance your musical skills.",
          slug: "understanding-music-theory",
          isFeatured: true,
        },
        {
          title: "The Art of Songwriting",
          description:
            "Learn the craft of songwriting from experienced musicians and songwriters.",
          slug: "the-art-of-songwriting",
          isFeatured: true,
        },
        {
          title: "Mastering Your Instrument",
          description:
            "Advanced techniques to master your musical instrument of choice.",
          slug: "mastering-your-instrument",
          isFeatured: true,
        },
        {
          title: "Music Production Essentials",
          description:
            "Get started with music production with this comprehensive overview.",
          slug: "music-production-essentials",
          isFeatured: true,
        },
        // Added two more webinars
        {
          title: "Live Performance Techniques",
          description:
            "Enhance your live performance skills with expert tips and strategies.",
          slug: "live-performance-techniques",
          isFeatured: true,
        },
        {
          title: "Digital Music Marketing",
          description:
            "Learn how to promote your music effectively in the digital age.",
          slug: "digital-music-marketing",
          isFeatured: true,
        },
      ];
  return (
    <div className="p-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          upcoming webinars
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Enhance your musical journey
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-8 mt-10">
        <HoverEffect items={featuredWebinars.map((webinar)=>{
            return (
                {
                    title:webinar.title,
                    description:webinar.description,
                    link:"/",
                }
            )
        })} />
      </div>

      <div className="mt-10 text-center">
        <Link
          href={"/"}
          className="text-sm font-semibold text-neutral-600 ☐dark:text-neutral-400 bg-white p-2.5 mt-5 rounded-[22px]"
        >
          View All Webinars{" "}
        </Link>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
