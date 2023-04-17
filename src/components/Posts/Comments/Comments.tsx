import { Post } from '@/atoms/postsAtom'
import { Box, Flex } from '@chakra-ui/react'
import { User } from 'firebase/auth'
import { useEffect } from 'react'

type Props = {
	userObject: User
	selectedPost: Post
	communityId: string
}

const Comments = ({ userObject, selectedPost, communityId }: Props) => {
	const onCreateComment = async (commentText: string) => {}

	const onDeleteComment = async (comment: any) => {}

	const getPostComments = async () => {}

	useEffect(() => {
		getPostComments()
	}, [])

	return (
		<Box bg='white' borderRadius={'0px 0px 4px 4px'} p={2}>
			<Flex>{/* <CommentInput /> */}</Flex>
		</Box>
	)
}

export default Comments
