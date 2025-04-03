"use client";

import { UploadButton } from "@/utils/uploadthing";
import Link from "next/link";
import { useState } from "react";

export default function UploadButtonPage() {
    const [images, setImages] = useState<{ ufsUrl: string; name: string }[]>(
        []
    );

    const title = images.length ? (
        <>
            <p>Upload Complete</p>
            <p>{images.length} files</p>
        </>
    ) : null;

    const imageList = (
        <>
            {title}
            <ul>
                {images.map((image) => (
                    <li className="mt-2" key={image.ufsUrl}>
                        <Link href={image.ufsUrl} target="_blank">
                            {image.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    if (res) {
                        setImages(res);
                        const json = JSON.stringify(res);
                        // Do something with the response
                        console.log("Files: ", json);
                    }
                    // alert("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                }}
            />
            {imageList}
        </main>
    );
}
