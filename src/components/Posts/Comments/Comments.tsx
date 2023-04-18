import { Post, postState } from '@/atoms/postsAtom'
import { firestore } from '@/firebase/clientApp'
import { Box, Flex, Stack } from '@chakra-ui/react'
import { User } from 'firebase/auth'
import
	{
		Timestamp,
		collection,
		doc,
		increment,
		serverTimestamp,
		writeBatch
	} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import CommentInput from './CommentInput'
import CommentItem, { Comment } from './CommentItem'

type Props = {
	user: User
	selectedPost: Post | null
	communityId: string
}

const Comments = ({ user, selectedPost, communityId }: Props) =>
{
	const [commentText, setCommentText] = useState<string>('')
	const [comments, setComments] = useState<Comment[]>([])
	const [fetchLoading, setFetchLoading] = useState<boolean>(false)
	const [createLoading, setCreateLoading] = useState<boolean>(false)
	const setPostState = useSetRecoilState(postState)

	const onCreateComment = async () =>
	{
		setCreateLoading(true)

		try
		{
			const batch = writeBatch(firestore)

			const commentDocRef = doc(collection(firestore, 'comments'))

			const newComment: Comment = {
				id: commentDocRef.id,
				creatorId: user.uid,
				creatorDisplayText: user.email!.split('@')[0],
				communityId,
				postId: selectedPost?.id! as string,
				postTitle: selectedPost?.title! as string,
				text: commentText,
				createdAt: serverTimestamp() as Timestamp
			}

			batch.set(commentDocRef, newComment)

			newComment.createdAt = { seconds: Date.now / 1000 } as Timestamp

			const postDocRef = doc(
				firestore,
				'posts',
				selectedPost?.id as string
			)

			batch.update(postDocRef, {
				numberOfComments: increment(1)
			})

			await batch.commit()

			setCommentText('')
			setComments((prev) => [newComment, ...prev])

			setPostState((prev) => ({
				...prev,
				selectedPost: {
					...prev.selectedPost,
					numberOfComments: prev.selectedPost?.numberOfComments! + 1
				} as Post
			}))
		} catch (error: any)
		{
			console.log('OnCreateComment', error)
		}

		setCreateLoading(false)
	}

	const onDeleteComment = async (comment: any) => { }

	const getPostComments = async () => { }

	useEffect(() =>
	{
		getPostComments()
	}, [])

	return (
		<Box bg='white' borderRadius={'0px 0px 4px 4px'} p={2}>
			<Flex
				direction={'column'}
				pl={10}
				pr={4}
				mb={6}
				fontSize='10pt'
				width='100%'
			>
				<CommentInput
					commentText={commentText}
					createLoading={createLoading}
					setCommentText={setCommentText}
					user={user}
					onCreateComment={onCreateComment}
				/>
			</Flex>
			<Stack spacing={6}>
				{comments.map((item) => ({
					<CommentItem key={item} comment={item} onDelete={onDeleteComment} loadingDelete={false} userId={user.uid} />
				}))}
			</Stack>
		</Box>
	)
}

export default Comments
