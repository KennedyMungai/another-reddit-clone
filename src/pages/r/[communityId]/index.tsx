import { GetServerSidePropsContext } from "next";
import React from "react";

type CommunityPageProps = {};

const CommunityPage = (props: CommunityPageProps) => {
    return <div>Community Page</div>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {}

export default CommunityPage;
