import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Nexcent",
	description: "Lessons and insights from 8 years",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<header className="z-50">
					<Navbar />
				</header>
				<main
          className="z-0"
        >{children}</main>
			</body>
      <Script src="https://kit.fontawesome.com/333a269518.js"></Script>
		</html>
	);
}