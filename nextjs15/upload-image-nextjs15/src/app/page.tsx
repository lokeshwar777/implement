import Link from "next/link";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className="flex justify-evently w-full">
                    <Link className="mr-40" href={"/upload-button"}>
                        Upload Button
                    </Link>
                    <Link href={"/upload-dnd"}>Upload Drag and Drop</Link>
                </div>
            </main>
        </div>
    );
}
