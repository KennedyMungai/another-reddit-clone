import { Post } from "@/atoms/postsAtom";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChat, BsDot } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import {
    IoArrowDownCircleOutline,
    IoArrowDownCircleSharp,
    IoArrowRedoCircleOutline,
    IoArrowUpCircleOutline,
    IoArrowUpCircleSharp,
    IoBookmarkOutline,
} from "react-icons/io5";

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
