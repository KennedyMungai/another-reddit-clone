import PageContent from "@/components/Layout/PageContent";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const SubmitPostPage = () => {
    return (
        <PageContent>
            <Box>
                <Text>Create a post</Text>
            </Box>
            <>{/* <NewPostForm /> */}</>
            <>{/* <About /> */}</>
        </PageContent>
    );
};

export default SubmitPostPage;
