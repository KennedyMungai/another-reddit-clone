import { firestore } from "@/firebase/clientApp";
import { doc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import React from "react";

type CommunityPageProps = {};

const CommunityPage = (props: CommunityPageProps) => {
    return <div>Community Page</div>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    // Get community data and pass it onto the client

    try {
        const communityDocRef = doc(
            firestore,
            "communities",
            context.query.communityId as string
        );
    } catch (error) {}
}

export default CommunityPage;
