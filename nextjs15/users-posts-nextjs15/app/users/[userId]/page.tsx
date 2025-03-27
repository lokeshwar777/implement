import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPost";
import UserPosts from "./components/UserPosts";
import { Suspense } from "react";
import type { Metadata } from "next";

type Params = {
    params: {
        userId: string;
    };
};

export async function generateMetadata({
    params: { userId },
}: Params): Promise<Metadata> {
    // const { userId } = params;
    const userData: Promise<User> = getUser(userId);
    const user: User = await userData;
    // console.log("user.name", user.name);

    return {
        title: user.name,
        description: `This page is about ${user.name}`,
    };
}

export default async function UserPage({ params: { userId } }: Params) {
    // console.log("params.userId", params.userId);
    const userData: Promise<User> = getUser(userId);
    const userPostsData: Promise<Post[]> = getUserPosts(userId);

    // const [user, userPosts] = await Promise.all([userData, userPostsData]);

    const user = await userData;

    return (
        <>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>
                {/* <UserPosts posts={userPosts} /> */}
                <UserPosts promise={userPostsData} />
            </Suspense>
        </>
    );
}
