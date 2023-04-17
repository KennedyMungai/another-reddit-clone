import { User } from 'firebase/auth'
import React from 'react'

type Props = {
	commentText: string
	setCommentText: (value: string) => void
	user: User
	createLoading: boolean
	onCreateComment: (commentText: string) => void
}

const CommentInput = ({
	commentText,
	setCommentText,
	user,
	createLoading,
	onCreateComment
}: Props) => {
	return <div>CommentInput</div>
}

export default CommentInput
