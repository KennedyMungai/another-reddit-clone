import { Community, communityState } from "@/atoms/communitiesAtom";
import { auth, firestore } from "@/firebase/clientApp";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";

const useCommunityData = () => {
    const [user] = useAuthState(auth);
    const [communityStateValue, setCommunityStateValue] =
        useRecoilState(communityState);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const onJoinOrLeaveCommunity = (
        communityData: Community,
        isJoined: boolean
    ) => {
        // Check if the user is signed in
        // If the user is not signed in, prompt the modal to make them sign in

        if (isJoined) {
            leaveCommunity(communityData.id);
            return;
        }

        joinCommunity(communityData);
    };

    const getMySnippets = async () => {
        setLoading(true);

        try {
            const snippetDocs = await getDocs(
                collection(firestore, `users/${user?.uid}/communitySnippets`)
            );

            const snippets = snippetDocs.docs.map((doc) => ({ ...doc.data() }));

            console.log("getMySnippets snippets", snippets);
        } catch (error) {
            console.log("getMySnippets error", error);
        }

        setLoading(false);
    };

    const joinCommunity = (communityData: Community) => {};

    const leaveCommunity = (communityId: string) => {};

    useEffect(() => {}, []);

    return {
        // Data and functions
        communityStateValue,
        onJoinOrLeaveCommunity,
    };
};

export default useCommunityData;
