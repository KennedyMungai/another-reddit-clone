import { Community } from "@/atoms/communitiesAtom";
import { Post } from "@/atoms/postsAtom";
import { auth, firestore } from "@/firebase/clientApp";
import usePosts from "@/hooks/usePosts";
import { Stack } from "@chakra-ui/react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import PostItem from "./PostItem";
import PostLoader from "./PostLoader";

type Props = {
    communityData: Community;
};

const Posts = ({ communityData }: Props) => {
    const [user] = useAuthState(auth);

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
            {loading ? (
                <PostLoader />
            ) : (
                <Stack>
                    {postStateValue.posts.map((item) => (
                        <PostItem
                            key={item.id}
                            post={item}
                            onVote={onVote}
                            onDeletePost={onDeletePost}
                            onSelectPost={onSelectPost}
                            userIsCreator={user?.uid === item.creatorId}
                            userVoteValue={undefined}
                        />
                    ))}
                </Stack>
            )}
        </>
    );
};

export default Posts;
