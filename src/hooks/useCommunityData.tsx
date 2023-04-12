import { Community, communityState } from "@/atoms/communitiesAtom";
import React from "react";
import { useRecoilState } from "recoil";

const useCommunityData = () => {
    const [communityStateValue, setCommunityStateValue] =
        useRecoilState(communityState);

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

        joinCommunity(communityData.id);
    };

    const joinCommunity = (communityData: string) => {};

    const leaveCommunity = (communityId: string) => {};

    return {
        // Data and functions
        communityStateValue,
        joinCommunity,
        leaveCommunity,
    };
};

export default useCommunityData;