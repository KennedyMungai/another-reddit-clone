import { Community } from "@/atoms/communitiesAtom";
import { Post } from "@/atoms/postsAtom";
import { firestore } from "@/firebase/clientApp";
import usePosts from "@/hooks/usePosts";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";

type Props = {
    communityData: Community;
};

const Posts = ({ communityData }: Props) => {
    const [loading, setLoading] = useState<boolean>(false);

    const {
        postStateValue,
        setPostStateValue,
        onDeletePost,
        onSelectPost,
        onVote,
    } = usePosts();

    const getPosts = async () => {
        try {
            const postsQuery = query(
                collection(firestore, "posts"),
                where("communityId", "==", communityData.id),
                orderBy("createdAt", "desc")
            );

            const postDocs = await getDocs(postsQuery);

            const posts = postDocs.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setPostStateValue((prev) => ({
                ...prev,
                posts: posts as Post[],
            }));
        } catch (error: any) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            {postStateValue.posts.map((item) => (
                <PostItem
                    post={item}
                    onVote={onVote}
                    onDeletePost={onDeletePost}
                    onSelectPost={onSelectPost}
                />
            ))}
        </>
    );
};

export default Posts;
