import { Post } from '@/atoms/postsAtom'
import { Box, Flex } from '@chakra-ui/react'
import { User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import CommentInput from './CommentInput'

type Props = {
	user: User
	selectedPost: Post
	communityId: string
}

const Comments = ({ user, selectedPost, communityId }: Props) => {
	const [commentText, setCommentText] = useState<string>('')
	const [comments, setComments] = useState<string[]>([])
	const [fetchLoading, setFetchLoading] = useState<boolean>(false)
	const [createLoading, setCreateLoading] = useState<boolean>(false)

	const onCreateComment = async (commentText: string) => {}
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
