import { authModalState } from "@/atoms/AuthModalAtom";
import { communityState } from "@/atoms/communitiesAtom";
import { Post, PostVote, postState } from "@/atoms/postsAtom";
import { auth, firestore, storage } from "@/firebase/clientApp";
import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    query,
    where,
    writeBatch,
} from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { useRouter } from "next/router";
import { MouseEvent, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const usePosts = () => {
    const [user] = useAuthState(auth);
    const [postStateValue, setPostStateValue] = useRecoilState(postState);
    const currentCommunity = useRecoilValue(communityState).currentCommunity;
    const setAuthModalState = useSetRecoilState(authModalState);
    const router = useRouter();

    const onVote = async (
        event: MouseEvent<SVGElement, MouseEvent>,
        post: Post,
        vote: number,
        communityId: string
    ) => {
        event.stopPropagation();

        if (!user?.uid) {
            setAuthModalState({ open: true, view: "login" });
        }

        try {
            const { voteStatus } = post;
            const existingVote = postStateValue.postVotes.find(
                (vote) => vote.postId === post.id
            );

            const batch = writeBatch(firestore);
            const updatePost = { ...post };
            const updatedPost = [...postStateValue.posts];
            let updatedPostVotes = [...postStateValue.postVotes];
            let voteChange = vote;

            // Execution block for a new vote
            if (!existingVote) {
                const postVoteRef = doc(
                    collection(firestore, "users", `${user?.uid}/postVotes/`)
                );

                const newVote: PostVote = {
                    id: postVoteRef.id,
                    postId: post.id!,
                    communityId,
                    voteValue: vote,
                };

                batch.set(postVoteRef, newVote);

                updatePost.voteStatus = voteStatus + vote;

                updatedPostVotes = [...updatedPostVotes, newVote];
            }
            // Existing block for an existing vote
            else {
                const postVoteRef = doc(
                    firestore,
                    "users",
                    `${user?.uid}/postVotes/${existingVote.id}`
                );

                if (existingVote.voteValue === vote) {
                    updatedPost[0].voteStatus = voteStatus - vote;

                    updatedPostVotes = updatedPostVotes.filter(
                        (vote) => vote.id !== existingVote.id
                    );

                    batch.delete(postVoteRef);

                    voteChange *= -1;
                } else {
                    updatedPost[0].voteStatus = voteStatus + 2 * vote;

                    const voteIdx = postStateValue.postVotes.findIndex(
                        (vote) => vote.id === existingVote.id
                    );

                    updatedPostVotes[voteIdx] = {
                        ...existingVote,
                        voteValue: vote,
                    };

                    batch.update(postVoteRef, { voteValue: vote });

                    const postIdx = postStateValue.posts.findIndex(
                        (item) => item.id === post.id
                    );

                    setPostStateValue((prev) => ({
                        ...prev,
                        posts: updatedPost,
                        postVotes: updatedPostVotes,
                    }));
                }

                if (postStateValue.selectedPost) {
                    setPostStateValue((prev) => ({
                        ...prev,
                        selectedPost: updatedPost,
                    }));
                }

                const postRef = doc(firestore, "posts", post.id!);
                batch.update(postRef, { voteStatus: voteStatus + voteChange });

                await batch.commit();
            }
        } catch (error: any) {
            console.log("onVote error", error);
        }
    };

    const onSelectPost = (post: Post) => {
        setPostStateValue((prev) => ({ ...prev, selectedPost: post }));

        router.push(`/r/${post.communityId}/comments/${post.id}`);
    };

    const onDeletePost = async (post: Post): Promise<boolean> => {
        try {
            if (post.imageURL) {
                const imageRef = ref(storage, `posts/${post.id}/image`);
                await deleteObject(imageRef);
            }

            const postDocRef = doc(firestore, "posts", post.id!);

            await deleteDoc(postDocRef);

            setPostStateValue((prev) => ({
                ...prev,
                posts: prev.posts.filter((item) => item.id !== post.id),
            }));

            return true;
        } catch (error: any) {
            return false;
        }
    };

    const getCommunityPostVotes = async (communityId: string) => {
        const postVotesQuery = query(
            collection(firestore, "users", `${user?.uid}/postVotes`),
            where("communityId", "==", communityId)
        );

        const postVoteDocs = await getDocs(postVotesQuery);
        const postVotes = postVoteDocs.docs.map((doc) => ({
            id: doc.id,
            ...doc.data,
        }));

        setPostStateValue((prev) => ({
            ...prev,
            postVotes: postVotes as PostVote[],
        }));
    };

    useEffect(() => {
        if (!user || !currentCommunity) return;
        getCommunityPostVotes(currentCommunity.id);
    }, [user, currentCommunity]);

    useEffect(() => {
        if (!user) {
            setPostStateValue((prev) => ({ ...prev, postVotes: [] }));
        }
    }, [user]);

    return {
        postStateValue,
        setPostStateValue,
        onVote,
        onSelectPost,
        onDeletePost,
    };
};

export default usePosts;
