"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function Search() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch("");
        router.push(`/${search}/`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
            />
            <button>🚀</button>
        </form>
    );
}
