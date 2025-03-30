"use client";
import coursesData from "@/data/music_courses.json";
import Link from "next/link";
import { Card } from "./Card";

export default function FeaturedCourses() {
    const courses = coursesData.courses;
    // console.log(courses);
    return (
        <main className="min-h-screen flex flex-col items-center bg-slate-900 ">
            <p className="text-sky-500 mt-10 mx-2 font-bold">
                FEATURED COURSES
            </p>
            <h2 className="text-4xl mt-3 font-extrabold">
                Learn With the Best
            </h2>
            <section className="grid grid-cols-3 gap-15 p-10">
                {courses?.length &&
                    courses.map(
                        (course) =>
                            course.isFeatured && (
                                <Card key={course.id} course={course} />
                            )
                    )}
            </section>
            <Link href="/courses" className="p-[3px] relative mb-10">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    View All Courses
                </div>
            </Link>
        </main>
    );
}
