import PageContent from "@/components/Layout/PageContent";
import PostItem from "@/components/Posts/PostItem";
import { auth } from "@/firebase/clientApp";
import usePosts from "@/hooks/usePosts";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const PostPage = () => {
    const [user] = useAuthState(auth);
    const { postStateValue, setPostStateValue, onDeletePost, onVote } =
        usePosts();

    const fetchPosts = async (postId: string) => {};

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <PageContent>
            <>
                {/* Selected Post */}
                {/* Comments */}
                {postStateValue.selectedPost && (
                    <PostItem
                        post={postStateValue.selectedPost}
                        onVote={onVote}
                        onDeletePost={onDeletePost}
                        userVoteValue={
                            postStateValue.postVotes.find(
                                (item) =>
                                    item.postId ===
                                    postStateValue.selectedPost?.id
                            )?.voteValue
                        }
                        userIsCreator={
                            user?.uid === postStateValue.selectedPost?.creatorId
                        }
                    />
                )}
            </>
            <>{/* About */}</>
        </PageContent>
    );
};

export default PostPage;
