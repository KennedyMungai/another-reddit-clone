import AuthModal from "@/components/Modal/Auth/AuthModal";
import { Button, Flex } from "@chakra-ui/react";
import { User, signOut } from "firebase/auth";
import { auth } from "../../../firebase/clientApp";
import AuthButtons from "./AuthButtons";

type Props = {
    user: User;
};

const RightContent = (props: Props) => {
    return (
        <>
            <AuthModal />
            <Flex justify="center" align="center">
                {props.user ? (
                    <Button onClick={() => signOut(auth)}>Logout</Button>
                ) : (
                    <AuthButtons />
                )}
                {/* <Menu /> */}
            </Flex>
        </>
    );
};

export default RightContent;
