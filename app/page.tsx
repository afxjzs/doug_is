import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

import Image from "next/image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faLinkedin,
	faGithub,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"
export const metadata = {
	title: "Douglas E. Rogers",
	description: "This is the personal website of Douglas E. Rogers",
}

export default function Home() {
	const latestPost = allPosts[0]
	return (
		<div className="grid grid-cols-4 gap-4 text-lg text-gray-800 dark:text-gray-200">
			<div className="col-span-1">
				<Image
					src="/doug.png"
					alt="Doug"
					width={500}
					height={500}
					className="rounded-lg m-0"
				/>
				<ul className="divide-y divide-gray-200">
					<li className="py-2 flex items-center">
						<FontAwesomeIcon icon={faLinkedin} className="mr-2" fixedWidth />
						<a
							href="http://linkedin.com/in/douglasrogers/"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>
					</li>
					<li className="py-2 flex items-center">
						<FontAwesomeIcon icon={faGithub} className="mr-2" fixedWidth />
						<a
							href="https://github.com/afxjzs"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
					</li>
					<li className="py-2 flex items-center">
						<FontAwesomeIcon icon={faTwitter} className="mr-2" fixedWidth />
						<a
							href="https://twitter.com/glowingrec"
							target="_blank"
							rel="noopener noreferrer"
						>
							Twitter
						</a>
					</li>
					<li className="py-2 flex items-center">
						<FontAwesomeIcon icon={faFileAlt} className="mr-2" fixedWidth />
						<a
							href="/douglas-e-rogers-resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							Resume
						</a>
					</li>
				</ul>
				<button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Contact Me
				</button>
			</div>
			<div className="col-span-3">
				<h2 className="text-2xl font-bold mb-2">About Me</h2>
				<p className="mb-4">
					My name is Douglas E. Rogers. I am a software engineer based in San
					Francisco. I enjoy writing about technology, leadership, and personal
					growth. You can check out my latest articles or contact me if you have
					any other questions!
				</p>
				<h2 className="text-sm underline font-bold mt-6 mb-0">Latest Post</h2>
				<article key={latestPost._id} className="mb-4">
					<Link href={latestPost.slug}>
						<h3 className="text-2xl font-semibold mt-0 mb-2">
							{latestPost.title}
						</h3>
					</Link>
					{latestPost.description && (
						<p className="mb-4">{latestPost.description}</p>
					)}
				</article>
			</div>
		</div>
	)
}
