import CreateCommunityModal from "@/components/Modal/CreateCommunityModal/CreateCommunityModal";
import { Flex, Icon, MenuItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";

const Communities = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <CreateCommunityModal
                open={open}
                handleClose={() => setOpen(false)}
            />
            <MenuItem
                width="100%"
                fontSize="10pt"
                _hover={{ bg: "gray.100" }}
                onClick={() => setOpen(true)}
            >
                <Flex gap={2} alignItems="center">
                    <Icon as={GrAdd} fontSize={20} />
                    Create Community
                </Flex>
            </MenuItem>
        </>
    );
};

export default Communities;
