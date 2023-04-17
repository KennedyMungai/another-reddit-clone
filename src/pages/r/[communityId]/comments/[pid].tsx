import { Post } from '@/atoms/postsAtom'
import About from '@/components/Community/About'
import PageContent from '@/components/Layout/PageContent'
import PostItem from '@/components/Posts/PostItem'
import { auth, firestore } from '@/firebase/clientApp'
import usePosts from '@/hooks/usePosts'
import { doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

const PostPage = () => {
	const [user] = useAuthState(auth)
	const { postStateValue, setPostStateValue, onDeletePost, onVote } =
		usePosts()
	const router = useRouter()
	const { communityStateValue } = useCommunityData()

	const fetchPosts = async (postId: string) => {
		try {
			const postDocRef = doc(firestore, 'posts', postId)
			const postDoc = await getDoc(postDocRef)

			setPostStateValue((prev) => ({
				...prev,
				selectedPost: { id: postDoc.id, ...postDoc.data() } as Post
			}))
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
			<>
				<About communityData={communityStateValue.currentCommunity} />
			</>
		</PageContent>
	)
}

export default PostPage
