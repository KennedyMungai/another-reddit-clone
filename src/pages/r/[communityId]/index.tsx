import { Community } from "@/atoms/communitiesAtom";
import { firestore } from "@/firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import React from "react";

type CommunityPageProps = {
    communityData: Community;
};

const CommunityPage = ({ communityData }: CommunityPageProps) => {
    return <div>Welcome to {communityData.id}</div>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    // Get community data and pass it onto the client

    try {
        const communityDocRef = doc(
            firestore,
            "communities",
            context.query.communityId as string
        );

        const communityDoc = await getDoc(communityDocRef);

        return {
            props: {
                communityData: communityDoc.data(),
            },
        };
    } catch (error) {
        // Could add error page
        console.log("getServerSideProps error: ", error);
    }
}

export default CommunityPage;
