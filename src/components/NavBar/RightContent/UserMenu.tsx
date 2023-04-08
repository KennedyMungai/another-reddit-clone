import { ChevronDownIcon } from "@chakra-ui/icons";
import { MenuButton, Button, MenuList, MenuItem, Menu } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";

interface Props {
    user: User;
}

const UserMenu = ({ user }) => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Actions
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
