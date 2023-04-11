import CreateCommunityModal from "@/components/Modal/CreateCommunityModal/CreateCommunityModal";
import { Flex, MenuItem } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Communities = (props: Props) => {
    return (
        <>
            <CreateCommunityModal />
            <MenuItem>
                <Flex></Flex>
            </MenuItem>
        </>
    );
};

export default Communities;
