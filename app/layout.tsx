"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	const location = usePathname()

	return (
		<html lang="en">
			<body
				className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
			>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<header className="w-full border-b border-slate-300 dark:border-slate-700 rounded-lg shadow-lg p-4 bg-white dark:bg-slate-950">
						<div className="mx-auto py-4 px-4 max-w-4xl ">
							<nav className="flex justify-between text-sm font-medium">
								<h1 className="inline">
									<Link href="/">Doug is...</Link>
								</h1>
								<Link href="/">
									<span
										className={`px-2 py-1 rounded-lg ${
											location == "/" ? "bg-gray-200 dark:bg-slate-700" : ""
										}`}
									>
										living
									</span>
								</Link>
								<Link href="/advising">
									<span
										className={`px-2 py-1 rounded-lg ${
											location == "/advising"
												? "bg-gray-200 dark:bg-slate-700"
												: ""
										}`}
									>
										advising
									</span>
								</Link>

								<Link href="/writing">
									<span
										className={`px-2 py-1 rounded-lg ${
											location == "/writing"
												? "bg-gray-200 dark:bg-slate-700"
												: ""
										}`}
									>
										writing
									</span>
								</Link>

								<a
									href="https://github.com/afxjzs"
									target="_blank"
									className="flex items-center"
								>
									coding
									<FontAwesomeIcon icon={faGithub} className="ml-2" />
								</a>

								<a
									href="https://twitter.com/glowingrec"
									target="_blank"
									className="flex items-center"
								>
									tweeting
									<FontAwesomeIcon icon={faTwitter} className="ml-2" />
								</a>
							</nav>
						</div>
					</header>
					<div className="mx-auto py-10 px-4 max-w-4xl">
						<main>{children}</main>
						<div className="fixed bottom-4 right-4">
							<ModeToggle />
						</div>
					</div>
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	)
}
