import { Community } from "@/atoms/communitiesAtom";
import React, { useEffect } from "react";

type Props = {
    communityData: Community;
};

const Posts = ({ communityData }: Props) => {
    const getPosts = async () => {
        try {
        } catch (error) {}
    };

    useEffect(() => {
        getPosts();
    }, []);

    return <div>Posts</div>;
};

export default Posts;
