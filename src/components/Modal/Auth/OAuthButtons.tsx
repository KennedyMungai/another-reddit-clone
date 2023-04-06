import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

type Props = {};

const OAuthButtons = (props: Props) => {
    return (
        <Flex flexDirection="column" gap={1} width="100%">
            <Button variant="oauth">
                <Image src="./images/googlelogo.png" height="20px" mr={4} />
                Continue with Google
            </Button>
        </Flex>
    );
};

export default OAuthButtons;
