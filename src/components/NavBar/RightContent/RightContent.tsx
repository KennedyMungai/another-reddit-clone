import AuthModal from "@/components/Modal/Auth/AuthModal";
import { Button, Flex } from "@chakra-ui/react";
import { User, signOut } from "firebase/auth";
import { auth } from "../../../firebase/clientApp";
import AuthButtons from "./AuthButtons";
import Icons from "./Icons";
import UserMenu from "./UserMenu";

type Props = {
    user: User;
};

const RightContent = ({ user }) => {
    return (
        <>
            <AuthModal />
            <Flex justify="center" align="center">
                {user ? <Icons /> : <AuthButtons />}
                <UserMenu />
            </Flex>
        </>
    );
};

export default RightContent;
