import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const light = localFont({
    src: "./interstate-light.woff",
    variable: "--font-interstate-light",
});

const regular = localFont({
    src: "./interstate-regular.woff",
    variable: "--font-interstate-regular",
});

export const metadata: Metadata = {
    title: "RWA Labs",
    description: "RWA Labs - Bridging the gap between traditional finance and DeFi",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${light.variable} ${regular.variable}`}>{children}</body>
        </html>
    )
}
