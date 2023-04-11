import CreateCommunityModal from "@/components/Modal/CreateCommunityModal/CreateCommunityModal";
import { Flex, Icon, MenuItem } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Communities = (props: Props) => {
    return (
        <>
            <CreateCommunityModal />
            <MenuItem>
                <Flex>
                    <Icon />
                    Create Community
                </Flex>
            </MenuItem>
        </>
    );
};

export default Communities;
