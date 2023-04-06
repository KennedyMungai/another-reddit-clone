import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";

const OAuthButtons = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <Flex flexDirection="column" gap={1} width="100%">
            <Button variant="oauth" isLoading={loading}>
                <Image src="./images/googlelogo.png" height="20px" mr={4} />
                Continue with Google
            </Button>
            <Button variant="oauth">Some Other Provider</Button>
        </Flex>
    );
};

export default OAuthButtons;
