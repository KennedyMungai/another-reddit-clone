import { Box, Flex, Icon } from '@chakra-ui/react'
import { Timestamp } from 'firebase/firestore'
import { FaReddit } from 'react-icons/fa'
import {
	IoArrowDownCircleOutline,
	IoArrowUpCircleOutline
} from 'react-icons/io5'

type Props = {
	comment: Comment
	onDelete: (comment: Comment) => void
	loadingDelete: boolean
	userId: string
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

const CommentItem = ({ comment, onDelete, loadingDelete, userId }: Props) => {
	return (
		<Flex>
			<Box>
				<Icon as={FaReddit} />
			</Box>
		</Flex>
	)
}

export default CommentItem
