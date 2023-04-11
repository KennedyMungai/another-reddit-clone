import CreateCommunityModal from "@/components/Modal/CreateCommunityModal/CreateCommunityModal";
import { Flex, Icon, MenuItem } from "@chakra-ui/react";
import React from "react";
import { GrAdd } from "react-icons/gr";

const Communities = () => {
    return (
        <>
            <CreateCommunityModal />
            <MenuItem
                width="100%"
                fontSize="10pt"
                _hover={{ bg: "gray.100" }}
                onClick={() => {}}
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
