import { authModalState } from '@/atoms/AuthModalAtom'
import {
	Community,
	CommunitySnippet,
	communityState
} from '@/atoms/communitiesAtom'
import { auth, firestore } from '@/firebase/clientApp'
import {
	collection,
	doc,
	getDocs,
	increment,
	writeBatch
} from 'firebase/firestore'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRecoilState, useSetRecoilState } from 'recoil'

const useCommunityData = () => {
	const [user] = useAuthState(auth)
	const [communityStateValue, setCommunityStateValue] =
		useRecoilState(communityState)
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<string>('')
	const setAuthModalState = useSetRecoilState(authModalState)
	const router = useRouter()

	const onJoinOrLeaveCommunity = (
		communityData: Community,
		isJoined: boolean
	) => {
		// Check if the user is signed in
		// If the user is not signed in, prompt the modal to make them sign in

		if (!user) {
			setAuthModalState({ open: true, view: 'login' })
			return
		}

		if (isJoined) {
			leaveCommunity(communityData.id)
			return
		}

		joinCommunity(communityData)
	}

	const getMySnippets = async () => {
		setLoading(true)

		try {
			const snippetDocs = await getDocs(
				collection(firestore, `users/${user?.uid}/communitySnippets`)
			)

			const snippets = snippetDocs.docs.map((doc) => ({ ...doc.data() }))

			setCommunityStateValue((prev) => ({
				...prev,
				mySnippets: snippets as CommunitySnippet[]
			}))

			console.log('getMySnippets snippets', snippets)
		} catch (error: any) {
			console.log('getMySnippets error', error)
		}

		setLoading(false)
	}

	const joinCommunity = async (communityData: Community) => {
		try {
			const batch = writeBatch(firestore)

			const newSnippet: CommunitySnippet = {
				communityId: communityData.id,
				imageURL: communityData.imageURL || ''
			}

			batch.set(
				doc(
					firestore,
					`users/${user?.uid}/communitySnippets`,
					communityData.id
				),
				newSnippet
			)

			batch.update(doc(firestore, 'communities', communityData.id), {
				numberOfMembers: increment(1)
			})

			await batch.commit()

			setCommunityStateValue((prev) => ({
				...prev,
				mySnippets: [...prev.mySnippets, newSnippet]
			}))
		} catch (error: any) {
			console.log('Join community error', error)
			setError(error.message)
		}

		setLoading(false)
	}

	const leaveCommunity = async (communityId: string) => {
		try {
			const batch = writeBatch(firestore)

			batch.delete(
				doc(
					firestore,
					`users/${user?.uid}/communitySnippets`,
					communityId
				)
			)

			batch.update(doc(firestore, 'communities', communityId), {
				numberOfMembers: increment(-1)
			})

			await batch.commit()

			setCommunityStateValue((prev) => ({
				...prev,
				mySnippets: prev.mySnippets.filter(
					(item) => item.communityId !== communityId
				)
			}))
		} catch (error: any) {
			console.log('Leave Community error', error.message)
			setError(error.message)
		}

		setLoading(false)
	}

	const getCommunityData = async () => {}

	useEffect(() => {
		if (!user) {
			setCommunityStateValue((prev) => ({ ...prev, mySnippets: [] }))
			return
		}

		getMySnippets()
	}, [user])

	useEffect(() => {
		const { communityId } = router.query

		if (communityId && !communityStateValue.currentCommunity) {
			getCommunityData(communityId)
		}
	}, [])

	return {
		// Data and functions
		communityStateValue,
		onJoinOrLeaveCommunity,
		loading
	}
}

export default useCommunityData
