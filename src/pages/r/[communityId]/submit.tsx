import PageContent from "@/components/Layout/PageContent";
import NewPostForm from "@/components/Posts/NewPostForm";
import { auth } from "@/firebase/clientApp";
import { Box, Text } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";

const SubmitPostPage = () => {
    const [user] = useAuthState(auth);

    return (
        <PageContent>
            <>
                <Box p="14px 0px" borderBottom="1px solid" borderColor="white">
                    <Text fontSize="11pt" fontWeight={600} color="gray.600">
                        Create a post
                    </Text>
                </Box>
                <NewPostForm user={user} />
            </>

            <>{/* <About /> */}</>
        </PageContent>
    );
};

export default SubmitPostPage;
