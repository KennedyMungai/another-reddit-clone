import PageContent from "@/components/Layout/PageContent";
import NewPostForm from "@/components/Posts/NewPostForm";
import { Box, Text } from "@chakra-ui/react";

const SubmitPostPage = () => {
    return (
        <PageContent>
            <>
                <Box p="14px 0px" borderBottom="1px solid" borderColor="white">
                    <Text fontSize="11pt" fontWeight={600} color="gray.600">
                        Create a post
                    </Text>
                </Box>
                <NewPostForm />
            </>

            <>{/* <About /> */}</>
        </PageContent>
    );
};

export default SubmitPostPage;
