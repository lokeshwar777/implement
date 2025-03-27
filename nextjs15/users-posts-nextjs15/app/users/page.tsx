import type { Metadata } from "next";
import Link from "next/link";

import getAllUsers from "@/lib/getAllUsers";

export const metatdata: Metadata = {
    title: "Users",
};

export default async function UsersPage() {
    const usersData: Promise<User[]> = getAllUsers();

    const users = await usersData;

    const content = (
        <section>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
            <br />
            {users.map((user) => (
                <p key={user.id}>
                    <Link href={`/users/${user.id}`}>{user.name}</Link>
                </p>
            ))}
        </section>
    );

    return content;
}
