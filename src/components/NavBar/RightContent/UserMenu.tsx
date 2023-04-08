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

type Props = {
    user: User;
};

const UserMenu = ({ user }) => {
    return (
        <Menu>
            <MenuButton>
                {user ? (
                    <Flex>
                        <>
                            <Icon
                                as={FaRedditSquare}
                                fontSize={24}
                                color="gray.300"
                            />
                        </>
                        <ChevronDownIcon />
                    </Flex>
                ) : (
                    <div>No User</div>
                )}
            </MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default UserMenu;
