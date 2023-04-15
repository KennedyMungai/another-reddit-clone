import { Post, postState } from "@/atoms/postsAtom";
import { firestore, storage } from "@/firebase/clientApp";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { useRecoilState } from "recoil";

const usePosts = () => {
    const [postStateValue, setPostStateValue] = useRecoilState(postState);

    const onVote = async (post: Post, vote: number, communityId: string) => {
        try {
            // Execution block for a new vote
            if (newVote) {
            }
            // Existing block for an existing vote
            else {
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
