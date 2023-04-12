import { communityState } from "@/atoms/communitiesAtom";
import React from "react";
import { useRecoilState } from "recoil";

const useCommunityData = () => {
    const [communityStateValue, setCommunityStateValue] =
        useRecoilState(communityState);

    return <div>useCommunityData</div>;
};

export default useCommunityData;
