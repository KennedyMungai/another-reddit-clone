import { Post } from '@/atoms/postsAtom'
import { User } from 'firebase/auth'
import React from 'react'

type Props = {
	userObject: User
	selectedPost: Post
	communityId: string
}

const Comments = (props: Props) => {
	return <div>Here are the comments</div>
}

export default Comments
