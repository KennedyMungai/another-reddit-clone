import { Community } from "@/atoms/communitiesAtom";
import React, { useEffect, useState } from "react";

type Props = {
    communityData: Community;
};

const Posts = ({ communityData }: Props) => {
    const [loading, setLoading] = useState<boolean>(false);

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
