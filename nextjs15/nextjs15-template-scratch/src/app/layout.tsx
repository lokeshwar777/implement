import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Next.js 15 Template",
    description: "A template to build Next.js app from scratch.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={``}>
                {children}

                <p>Root Layout.tsx</p>
            </body>
        </html>
    );
}
