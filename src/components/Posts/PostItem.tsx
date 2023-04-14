import { Post } from "@/atoms/postsAtom";
import React from "react";

type Props = {
    post: Post;
    userIsCreator: boolean;
    userVoteValue?: number;
    onVote: () => {};
    onDeletePost: () => {};
    onSelectPost: () => {};
};

const PostItem = ({
    post,
    userIsCreator,
    userVoteValue,
    onVote,
    onDeletePost,
    onSelectPost,
}: Props) => {
    return <div>PostItem</div>;
};

export default PostItem;
