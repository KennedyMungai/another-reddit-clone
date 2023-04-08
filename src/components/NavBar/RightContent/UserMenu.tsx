import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    MenuButton,
    Button,
    MenuList,
    MenuItem,
    Menu,
    Icon,
    Flex,
    MenuDivider,
} from "@chakra-ui/react";
import { User, signOut } from "firebase/auth";
import React from "react";
import { FaRedditSquare } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { IoSparkles } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";
import { auth } from "../../../firebase/clientApp";

type Props = {
    user: User;
};

const UserMenu = ({ user }) => {
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
                        {user ? (
                            <>
                                <Icon
                                    as={FaRedditSquare}
                                    fontSize={24}
                                    color="gray.300"
                                />
                            </>
                        ) : (
                            <Icon
                                as={VscAccount}
                                fontSize={24}
                                color="gray.400"
                                mr={1}
                            />
                        )}
                        <ChevronDownIcon />
                    </Flex>
                </Flex>
            </MenuButton>
            <MenuList>
                <MenuItem
                    fontSize="10pt"
                    fontWeight={700}
                    _hover={{ bg: "blue.500", color: "white" }}
                >
                    <Flex align="center" gap={2}>
                        <Icon as={CgProfile} fontSize={20} />
                        Profile
                    </Flex>
                </MenuItem>
                <MenuDivider />
                <MenuItem
                    fontSize="10pt"
                    fontWeight={700}
                    _hover={{ bg: "blue.500", color: "white" }}
                    onClick={() => signOut(auth)}
                >
                    <Flex align="center" gap={2}>
                        <Icon as={MdOutlineLogin} fontSize={20} />
                        Log Out
                    </Flex>
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export default UserMenu;
