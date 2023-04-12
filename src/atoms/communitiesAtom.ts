import { Timestamp } from "firebase/firestore";

export interface Community 
{
    id: string
    creatorId: string
    numberOfMembers: number
    privacyType: 'public' | 'restricted' | 'private'
    createdAt?: Timestamp
    imageURL?: string
}

interface CommunitySnippet
{
    communityId: string
    isModerator?: boolean
    imageURL?: string
}

export interface CommunityState
{
    mySnippets: CommunitySnippet[]
}