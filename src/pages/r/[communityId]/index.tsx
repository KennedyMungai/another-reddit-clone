import { GetServerSidePropsContext } from "next";
import React from "react";

type CommunityPageProps = {};

const CommunityPage = (props: CommunityPageProps) => {
    return <div>Community Page</div>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    // Get community data and pass it onto the client

    try {
    } catch (error) {}
}

export default CommunityPage;
