import { Metadata } from 'next'
import { PostItem } from '@/types'
import Link from 'next/link'

const getPostsData = async () => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
			next: {
				revalidate: 60
			}
		})
		return response.json()
	} catch (e) {
		throw new Error('Error fetching')
	}
}
export const metadata: Metadata = {
	title: 'Blog',
}

const Blog = async () => {
	const posts: PostItem[] = await getPostsData()
	return (
		<div>
			<h1>Blog Page</h1>
			<ul>
				{posts?.map((post) => (
					<li key={post.id}>
						<Link href={`/blog/${String(post.id)}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Blog