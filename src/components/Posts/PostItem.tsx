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

const PostItem = (props: Props) => {
    return <div>PostItem</div>;
};

export default PostItem;
