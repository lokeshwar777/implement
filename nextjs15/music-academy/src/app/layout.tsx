import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Music Academy",
    description: "A landing page for music academy.",
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
                <Navbar />
                
            </body>
        </html>
    );
}
