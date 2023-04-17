import { Post } from '@/atoms/postsAtom'
import { User } from 'firebase/auth'
import React from 'react'

type Props = {
	userObject: User
	selectedPost: Post
	communityId: string
}

const Comments = ({ userObject, selectedPost, communityId }: Props) => {
	const onCreateComment = async (commentText: string) => {}

	const onDeleteComment = async (comment: any) => {}

	return <div>Here are the comments</div>
}

export default Comments
