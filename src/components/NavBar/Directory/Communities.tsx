import CreateCommunityModal from "@/components/Modal/CreateCommunityModal/CreateCommunityModal";
import { Flex, Icon, MenuItem } from "@chakra-ui/react";
import React from "react";
import { GrAdd } from "react-icons/gr";

type Props = {};

const Communities = (props: Props) => {
    return (
        <>
            <CreateCommunityModal />
            <MenuItem>
                <Flex>
                    <Icon as={GrAdd} />
                    Create Community
                </Flex>
            </MenuItem>
        </>
    );
};

export default Communities;
