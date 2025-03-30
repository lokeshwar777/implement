"use client";
import { Button } from "@/components/ui/moving-border";
// import { SpotlightNew } from "@/components/ui/spotlight-new";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden flex-col">
            {/* <SpotlightNew />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Music Academy
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    A landing page for music academy.
                </p>
            </div> */}

            <div
                className={cn(
                    "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
                    "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
                )}
            />
            <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />
            <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
                <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
                    Music Academy
                </h1>
                <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
                    A landing page for music academy.
                </p>
            </div>

            <Link href={"/courses"}>
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:cursor-pointer"
                >
                    Explore Courses
                </Button>
            </Link>
        </div>
    );
}
