import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthButtons from "./AuthButtons";
import AuthModal from "@/components/Modal/Auth/AuthModal";

type Props = {
    user: any;
};

const RightContent = ({ user }) => {
    return (
        <>
            <AuthModal />
            <Flex justify="center" align="center">
                {user ? <div>You have logged in</div> : <AuthButtons />}
            </Flex>
        </>
    );
};

export default RightContent;
