import { ChevronDownIcon } from "@chakra-ui/icons";
import { MenuButton, Button, MenuList, MenuItem, Menu } from "@chakra-ui/react";
import React from "react";

const UserMenu = () => {
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
