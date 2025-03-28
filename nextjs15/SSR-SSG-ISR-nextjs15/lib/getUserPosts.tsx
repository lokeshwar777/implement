export default async function getUserPosts(userId: string) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        // { cache: "force-cache" } // default
        // { cache: "no-store" }
        { next: { revalidate: 60 } } // Segment level Caching
    );
    if (!res.ok) throw new Error("Failed to fetch user data");
    return res.json();
}
