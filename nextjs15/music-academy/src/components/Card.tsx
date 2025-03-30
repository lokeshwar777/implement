"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import Link from "next/link";

export function Card({ course }) {
    const { title, slug, price, description, image } = course;
    return (
        <BackgroundGradient className="rounded-[22px] max-w-sm p-2 bg-white dark:bg-zinc-900 h-full text-center">
            <Image
                src={image}
                alt={title}
                height="400"
                width="400"
                className="object-contain rounded-t-xl"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {title}
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {description}
            </p>
            <Link href={`/${slug}`}>
                <button className="px-3 rounded-full text-white  bg-black  text-md font-bold dark:bg-zinc-800 hover:cursor-pointer my-5">
                    {/* <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                        ${price}
                    </span> */}
                    Learn More
                </button>
            </Link>
        </BackgroundGradient>
    );
}
