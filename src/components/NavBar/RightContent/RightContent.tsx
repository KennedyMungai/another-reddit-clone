import AuthModal from "@/components/Modal/Auth/AuthModal";
import { Button, Flex } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/clientApp";
import AuthButtons from "./AuthButtons";

type Props = {
    user: any;
};

const RightContent = ({ user }) => {
    return (
        <>
            <AuthModal />
            <Flex justify="center" align="center">
                {user ? (
                    <Button onClick={() => signOut(auth)}>Logout</Button>
                ) : (
                    <AuthButtons />
                )}
            </Flex>
        </>
    );
};

export default RightContent;
