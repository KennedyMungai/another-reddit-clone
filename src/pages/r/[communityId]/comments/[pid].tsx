import PageContent from '@/components/Layout/PageContent'
import PostItem from '@/components/Posts/PostItem'
import { auth } from '@/firebase/clientApp'
import usePosts from '@/hooks/usePosts'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

const PostPage = () => {
	const [user] = useAuthState(auth)
	const { postStateValue, setPostStateValue, onDeletePost, onVote } =
		usePosts()
	const router = useRouter()

	const fetchPosts = async (postId: string) => {
		try {
		} catch (error: any) {
			console.log('Fetch Posts error', error)
		}
	}

	useEffect(() => {
		const { pid } = router.query

		if (pid && !postStateValue.selectedPost) {
			fetchPosts(pid as string)
		}
	}, [router.query, postStateValue.selectedPost])

	return (
		<PageContent>
			<>
				{/* Selected Post */}
				{/* Comments */}
				{postStateValue.selectedPost && (
					<PostItem
						post={postStateValue.selectedPost}
						onVote={onVote}
						onDeletePost={onDeletePost}
						userVoteValue={
							postStateValue.postVotes.find(
								(item) =>
									item.postId ===
									postStateValue.selectedPost?.id
							)?.voteValue
						}
						userIsCreator={
							user?.uid === postStateValue.selectedPost?.creatorId
						}
					/>
				)}
			</>
			<>{/* About */}</>
		</PageContent>
	)
}

export default PostPage
