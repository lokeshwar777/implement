"use client";
import coursesData from "@/data/music_courses.json";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

export default function FeaturedWebinars() {
    const courses = coursesData.courses.filter((course) => course.isFeatured);
    // console.log(courses);
    return (
        <main className="min-h-screen flex flex-col items-center bg-gray-900 ">
            <p className="text-sky-500 mt-10 mx-2 font-bold">
                FEATURED WEBINARS
            </p>
            <h2 className="text-4xl mt-3 font-extrabold">
                Enhance Your Musical Journey
            </h2>
            <HoverEffect items={courses} />
            <Link href="/courses" className="p-[3px] relative mb-10">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    View All Webinars
                </div>
            </Link>
        </main>
    );
}
