import { Post } from '@/atoms/postsAtom'
import { firestore } from '@/firebase/clientApp'
import { Box, Flex } from '@chakra-ui/react'
import { User } from 'firebase/auth'
import { Timestamp, collection, doc, writeBatch } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import CommentInput from './CommentInput'

type Props = {
	user: User
	selectedPost: Post | null
	communityId: string
}

export type Comment = {
	id: string
	creatorId: string
	creatorDisplayText: string
	communityId: string
	postId: string
	postTitle: string
	text: string
	createdAt: Timestamp
}

const Comments = ({ user, selectedPost, communityId }: Props) => {
	const [commentText, setCommentText] = useState<string>('')
	const [comments, setComments] = useState<string[]>([])
	const [fetchLoading, setFetchLoading] = useState<boolean>(false)
	const [createLoading, setCreateLoading] = useState<boolean>(false)

	const onCreateComment = async () => {
		try {
			const batch = writeBatch(firestore)

			const commentDocRef = doc(collection(firestore, 'comments'))

			const newComment: Comment = {
				id: commentDocRef.id,
				creatorId: user.uid,
				creatorDisplayText: user.email!.split('@')[0],
				communityId,
				postId: selectedPost?.id! as string,
				postTitle: selectedPost?.title! as string,
				text: commentText
			}
		} catch (error: any) {
			console.log('OnCreateComment', error)
		}
	}

	const onDeleteComment = async (comment: any) => {}

	const getPostComments = async () => {}

	useEffect(() => {
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
		</Box>
	)
}

export default Comments
