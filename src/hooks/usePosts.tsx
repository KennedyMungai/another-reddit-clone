import { postState } from "@/atoms/postsAtom";
import React from "react";
import { useRecoilState } from "recoil";

const usePosts = () => {
    const [postStateValue, setPostStateValue] = useRecoilState(postState);

    const onVote = async () => {};

    return {
        postStateValue,
        setPostStateValue,
    };
};

export default usePosts;
