import { Community } from "@/atoms/communitiesAtom";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

type Props = {
    communityData: Community;
};

const Header = ({ communityData }: Props) => {
    return (
        <Flex direction="column" width="100%" height="146px">
            <Box height="50%" bg="blue.400" />
            <Flex justify="center" bg="white" flexGrow={1}></Flex>
        </Flex>
    );
};

export default Header;
