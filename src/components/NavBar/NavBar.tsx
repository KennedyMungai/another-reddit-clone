import { Flex, Image } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";
import Directory from "./Directory/Directory";

const NavBar = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <Flex
            bg="white"
            border="1px solid red"
            height="44px"
            padding="6px 12px"
            justify={{ md: "space-between" }}
        >
            <Flex align="center" width={{ base: "40px", md: "auto" }}>
                <Image src="/images/redditFace.svg" height="30px" />
                <Image
                    src="/images/redditText.svg"
                    height="46px"
                    display={{
                        base: "none",
                        md: "unset",
                    }}
                />
                {user && <Directory />}
                <SearchInput user={user} />
                <RightContent user={user} />
            </Flex>
        </Flex>
    );
};

export default NavBar;
