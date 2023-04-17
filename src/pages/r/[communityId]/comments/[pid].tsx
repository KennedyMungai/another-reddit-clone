import PageContent from "@/components/Layout/PageContent";
import PostItem from "@/components/Posts/PostItem";
import usePosts from "@/hooks/usePosts";
import React from "react";

const PostPage = () => {
    const { 
        postStateValue, 
        setPostStateValue, 
        onDeletePost, 
        onVote 
    } = usePosts();

    return (
        <PageContent>
            <>
                {/* Selected Post */}
                {/* Comments */}
                <PostItem />
            </>
            <>{/* About */}</>
        </PageContent>
    );
};

export default PostPage;
