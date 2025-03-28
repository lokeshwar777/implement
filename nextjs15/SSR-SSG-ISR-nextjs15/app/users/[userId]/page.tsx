import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import UserPosts from "./components/UserPosts";
import { Suspense } from "react";
import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";

import { notFound } from "next/navigation";

type Params = Promise<{ userId: string }>;

export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const { userId } = await params;
    const userData: Promise<User> = getUser(userId);
    const user: User = await userData;
    // console.log("user.name", user.name);

    if (!user || !user.name) {
        return {
            title: "User Not Found",
        };
    }

    return {
        title: user.name,
        description: `This page is about ${user.name}`,
    };
}

export default async function UserPage({ params }: { params: Params }) {
    // console.log("params.userId", params.userId);
    const { userId } = await params;
    const userData: Promise<User> = getUser(userId);
    const userPostsData: Promise<Post[]> = getUserPosts(userId);

    // const [user, userPosts] = await Promise.all([userData, userPostsData]);

    const user = await userData;

    if (!user || !user.name) return notFound();
}

export async function generateStaticParams() {
    const userData: Promise<User[]> = getAllUsers();
    const users = await userData;
    return users.map((user) => ({
        userId: user.id.toString(),
    }));
}
