import { Post, postState } from "@/atoms/postsAtom";
import { useRecoilState } from "recoil";

const usePosts = () => {
    const [postStateValue, setPostStateValue] = useRecoilState(postState);

    const onVote = async () => {};

    const onSelectPost = () => {};

    const onDeletePost = async (post: Post): Promise<boolean> => {
        try {
        } catch (error: any) {}

        return true;
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
