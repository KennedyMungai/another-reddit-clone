import { Community } from "@/atoms/communitiesAtom";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

type Props = {
    communityData: Community;
};

const About = ({ communityData }: Props) => {
    return (
        <Box position={"sticky"} top={"2rem"}>
            <Flex></Flex>
            <Flex></Flex>
        </Box>
    );
};

export default About;
