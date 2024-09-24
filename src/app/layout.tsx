import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components";

export const metadata: Metadata = {
    title: "Victor H Padula",
    description: "Personal Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <main>
                    <div className="min-h-screen">
                        <NavBar />
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
