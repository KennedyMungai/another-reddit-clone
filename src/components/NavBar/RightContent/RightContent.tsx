import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthButtons from "./AuthButtons";
import AuthModal from "@/components/Modal/Auth/AuthModal";

type Props = {
    user: any;
};

const RightContent = (props: Props) => {
    return (
        <>
            <AuthModal />
            <Flex justify="center" align="center">
                {props.user ? <div>You have logged in</div> : <AuthButtons />}
            </Flex>
        </>
    );
};

export default RightContent;
