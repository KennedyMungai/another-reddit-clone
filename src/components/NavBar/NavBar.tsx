import { Flex, Image } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import Directory from "./Directory/Directory";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";
import { useRouter } from "next/router";

const NavBar = () => {
    const [user, loading, error] = useAuthState(auth);

    const router = useRouter();

    return (
        <Flex
            bg="white"
            height="44px"
            padding="6px 12px"
            justify={{ md: "space-between" }}
        >
            <Flex
                align="center"
                width={{ base: "40px", md: "auto" }}
                mr={{ base: 0, md: 2 }}
                _hover={{ cursor: "pointer" }}
            >
                <Image
                    src="/images/redditFace.svg"
                    height="30px"
                    onClick={() => router.push("/")}
                />
                <Image
                    src="/images/redditText.svg"
                    height="46px"
                    display={{
                        base: "none",
                        md: "unset",
                    }}
                    onClick={() => router.push("/")}
                />
                {user && <Directory />}
                <SearchInput user={user} />
                <RightContent user={user} />
            </Flex>
        </Flex>
    );
};

export default NavBar;
