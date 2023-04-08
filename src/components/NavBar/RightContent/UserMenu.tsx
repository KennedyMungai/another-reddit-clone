import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    MenuButton,
    Button,
    MenuList,
    MenuItem,
    Menu,
    Icon,
    Flex,
} from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";
import { FaRedditSquare } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { IoSparkles } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

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
                {user ? (
                    <Flex align="center">
                        <Flex align="center">
                            <>
                                <Icon
                                    as={FaRedditSquare}
                                    fontSize={24}
                                    color="gray.300"
                                />
                            </>
                            <ChevronDownIcon />
                        </Flex>
                    </Flex>
                ) : (
                    <Icon
                        as={VscAccount}
                        fontSize={24}
                        color="gray.400"
                        mr={1}
                    />
                )}
            </MenuButton>
            <MenuList>
                <MenuItem>
                    <Flex align="center" gap={2}>
                        <Icon as={CgProfile} fontSize={20} />
                        Profile
                    </Flex>
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export default UserMenu;
