import { Community } from "@/atoms/communitiesAtom";
import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
    communityData: Community;
};

const About = ({ communityData }: Props) => {
    return (
        <Box position={"sticky"} top={"2rem"}>
            About
        </Box>
    );
};

export default About;
