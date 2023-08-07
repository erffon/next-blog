import Sidebar from "@/components/layout/sidebar/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Familjen_Grotesk } from "next/font/google";
import Head from "next/head";

const gfont = Familjen_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechCrunch",
  description: "Nextjs fullstack blog project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex ${gfont.className}`}>
        <Sidebar className="w-52 px-4 pt-8 bg-red-600" />
        <div className="w-full pt-8 bg-green-500">{children}</div>
      </body>
    </html>
  );
}
