import { Box, Flex, Icon, Stack, Text } from '@chakra-ui/react'
import { Timestamp } from 'firebase/firestore'
import moment from 'moment'
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
			<Stack spacing={1}>
				<Stack direction={'row'} align={'center'} fontSize={'8pt'}>
					<Text>{comment.creatorDisplayText}</Text>
					<Text>
						{moment(
							new Date(comment.createdAt?.seconds * 1000)
						).fromNow()}
					</Text>
				</Stack>
			</Stack>
		</Flex>
	)
}

export default CommentItem
