import { Community } from "@/atoms/communitiesAtom";
import { firestore } from "@/firebase/clientApp";
import { collection, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";

type Props = {
    communityData: Community;
};

const Posts = ({ communityData }: Props) => {
    const [loading, setLoading] = useState<boolean>(false);

    const getPosts = async () => {
        try {
            const postsQuery = query(
                collection(firestore, "posts"),
                where("communityId", "==")
            );
        } catch (error: any) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return <div>Posts</div>;
};

export default Posts;
