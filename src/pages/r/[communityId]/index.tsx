import { Community } from "@/atoms/communitiesAtom";
import CreatePostLink from "@/components/Community/CreatePostLink";
import Header from "@/components/Community/Header";
import NotFound from "@/components/Community/NotFound";
import PageContent from "@/components/Layout/PageContent";
import { firestore } from "@/firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import safeJsonStringify from "safe-json-stringify";

type CommunityPageProps = {
    communityData: Community;
};

const CommunityPage = ({ communityData }: CommunityPageProps) => {
    if (!communityData) {
        return <NotFound />;
    }

    return (
        <>
            <Header communityData={communityData} />
            <PageContent>
                <>
                    <CreatePostLink />
                </>
                <>
                    <div>RHS</div>
                </>
            </PageContent>
        </>
    );
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
                communityData: communityDoc.exists()
                    ? JSON.parse(
                          safeJsonStringify({
                              id: communityDoc.id,
                              ...communityDoc.data,
                          })
                      )
                    : "",
            },
        };
    } catch (error) {
        // Could add error page
        console.log("getServerSideProps error: ", error);
    }
}

export default CommunityPage;
