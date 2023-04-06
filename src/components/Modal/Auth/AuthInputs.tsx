import { authModalState } from "@/atoms/AuthModalAtom";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";

const AuthInputs = () => {
    const modalState = useRecoilValue(authModalState);

    return (
        <Flex flexDirection="column" align="center" width="100%" mt={4}>
            {modalState.view === "login" && <Login />}
            {modalState.view === "SignUp" && <SignUp />}
        </Flex>
    );
};

export default AuthInputs;
