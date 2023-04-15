import { Post, PostVote, postState } from "@/atoms/postsAtom";
import { auth, firestore, storage } from "@/firebase/clientApp";
import { collection, deleteDoc, doc, writeBatch } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";

const usePosts = () => {
    const [user] = useAuthState(auth);

    const [postStateValue, setPostStateValue] = useRecoilState(postState);

    const onVote = async (post: Post, vote: number, communityId: string) => {
        try {
            const { voteStatus } = post;
            const existingVote = postStateValue.postVotes.find(
                (vote) => vote.postId === post.id
            );

            const batch = writeBatch(firestore);
            const updatePost = { ...post };
            const updatedPost = [...postStateValue.posts];
            const updatedPostVotes = [...postStateValue.postVotes];

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
            }
            // Existing block for an existing vote
            else {
                if (removingPost) {
                } else {
                }
            }
        } catch (error: any) {
            console.log("onVote error", error);
        }
    };

    const onSelectPost = () => {};

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

    return {
        postStateValue,
        setPostStateValue,
        onVote,
        onSelectPost,
        onDeletePost,
    };
};

export default usePosts;
