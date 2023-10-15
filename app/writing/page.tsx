import React from "react"
import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
export const metadata = {
	title: "Doug is.. writing",
	description: "Articles by Douglas E. Rogers",
}
const WritingPage = () => {
	return (
		<div className="prose dark:prose-invert">
			<h1>Doug is... writing</h1>
			<p>Articles and blog posts that I've written.</p>
			{allPosts.map((post) => (
				<article key={post._id}>
					<Link href={post.slug}>
						<h2>{post.title}</h2>
					</Link>
					{post.description && <p>{post.description}</p>}
				</article>
			))}
		</div>
	)
}

export default WritingPage
