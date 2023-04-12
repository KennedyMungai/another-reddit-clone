import { Button, Flex, Link } from "@chakra-ui/react";
import React from "react";

const NotFound = () => {
    return (
        <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            minHeight="60vh"
        >
            Sorry, that community does not exist or has been banned
            <Link>
                <Button mt={4}>GO HOME</Button>
            </Link>
        </Flex>
    );
};

export default NotFound;
