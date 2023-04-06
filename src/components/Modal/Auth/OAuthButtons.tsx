import { Button, Flex } from "@chakra-ui/react";
import React from "react";

type Props = {};

const OAuthButtons = (props: Props) => {
    return (
        <Flex flexDirection="column">
            <Button>Continue with Google</Button>
        </Flex>
    );
};

export default OAuthButtons;
