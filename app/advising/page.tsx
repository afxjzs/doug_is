import React from "react"
import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
export const metadata = {
	title: "Doug is.. advising",
	description: "Advising by Douglas E. Rogers",
}
const AdvisingPage = () => {
	return (
		<div className="prose dark:prose-invert">
			<h1>Doug is... advising</h1>
			<p>I love helping startups.</p>
			...
		</div>
	)
}

export default AdvisingPage
