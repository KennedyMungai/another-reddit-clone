import { communityState } from "@/atoms/communitiesAtom";
import React from "react";
import { useRecoilState } from "recoil";

const useCommunityData = () => {
    const [communityStateValue, setCommunityStateValue] =
        useRecoilState(communityState);

    const joinCommunity = () => {};

    return {
        // Data and functions
    };
};

export default useCommunityData;
