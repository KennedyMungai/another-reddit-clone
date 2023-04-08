import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Flex,
    Icon,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";
import { User, signOut } from "firebase/auth";
import { CgProfile } from "react-icons/cg";
import { FaRedditSquare } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { MdOutlineLogin } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { auth } from "../../../firebase/clientApp";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/AuthModalAtom";

const Directory = () => {
    const setAuthModalState = useSetRecoilState(authModalState);

    return (
        <Menu>
            <MenuButton
                cursor="pointer"
                padding="0px 6px"
                borderRadius={4}
                mr={1}
                _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
            >
                <Flex align="center">
                    <Flex align="center">
                        <ChevronDownIcon />
                    </Flex>
                </Flex>
            </MenuButton>
            <MenuList></MenuList>
        </Menu>
    );
};

export default Directory;
