import { FC } from 'react'
import { Metadata } from 'next'
import { PostItem } from '@/types'

type Props = {
	params: {
		id: string
	}
}
const getPostItem = async (id: string) => {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
			next: {
				revalidate: 60
			}
		})
		return response.json()
	} catch (e) {
		console.log(e)
	}
}

export const generateMetadata = async ({ params: { id } }: Props): Promise<Metadata> => {
	const post: PostItem = await getPostItem(id)
	return {
		title: post.title
	}
}
const Post: FC<Props> = async ({ params: { id } }) => {
	const post: PostItem = await getPostItem(id)
	return (
		<div>
			<h1>{post.title}</h1>
			<p>
				{post.body}
			</p>
		</div>
	)
}

export default Post