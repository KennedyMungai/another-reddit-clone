import { Timestamp } from 'firebase/firestore'

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
	return <div>CommentItem</div>
}

export default CommentItem
