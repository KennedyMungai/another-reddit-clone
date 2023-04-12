import { Community } from "@/atoms/communitiesAtom";
import { Flex } from "@chakra-ui/react";
import React from "react";

type Props = {
    communityData: Community;
};

const Header = ({ communityData }: Props) => {
    return (
        <Flex direction="column" width="100%" height="146px">
            Header
        </Flex>
    );
};

export default Header;
