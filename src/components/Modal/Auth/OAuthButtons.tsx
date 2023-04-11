import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../../firebase/clientApp";
import { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const OAuthButtons = () => {
    const [signInWithGoogle, userCred, loading, error] =
        useSignInWithGoogle(auth);

    const createUserDocument = async (user: User) => {
        const userDocRef = doc(firestore, "users", user.uid);
        await setDoc(userDocRef, JSON.parse(JSON.stringify(user)));
    };

    useEffect(() => {
        if (userCred) {
            createUserDocument(userCred.user);
        }
    }, [userCred]);

    return (
        <Flex flexDirection="column" gap={1} width="100%">
            <Button
                variant="oauth"
                isLoading={loading}
                onClick={() => signInWithGoogle()}
            >
                <Image src="./images/googlelogo.png" height="20px" mr={4} />
                Continue with Google
            </Button>
            <Button variant="oauth">Some Other Provider</Button>
            {error && (
                <Text textAlign="center" fontSize="10pt" color="red" mt={2}>
                    {error}
                </Text>
            )}
        </Flex>
    );
};

export default OAuthButtons;
