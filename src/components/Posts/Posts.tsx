import { Community } from "@/atoms/communitiesAtom";
import React, { useEffect } from "react";

type Props = {
    communityData: Community;
};

const Posts = ({ communityData }: Props) => {
    const getPosts = async () => {};

    useEffect(() => {}, []);

    return <div>Posts</div>;
};

export default Posts;
