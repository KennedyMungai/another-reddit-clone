import { communityState } from "@/atoms/communitiesAtom";
import React from "react";
import { useRecoilState } from "recoil";

const useCommunityData = () => {
    const [communityStateValue, setCommunityStateValue] =
        useRecoilState(communityState);

    const onJoinOrLeaveCommunity = () => {};

    const joinCommunity = () => {};

    const leaveCommunity = () => {};

    return {
        // Data and functions
        communityStateValue,
        joinCommunity,
        leaveCommunity,
    };
};

export default useCommunityData;
