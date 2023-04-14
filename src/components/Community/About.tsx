import { Community } from "@/atoms/communitiesAtom";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

type Props = {
    communityData: Community;
};

const About = ({ communityData }: Props) => {
    return (
        <Box position={"sticky"} top={"2rem"}>
            <Flex
                justify="space-between"
                align="center"
                bg="blue.400"
                color="white"
                p={3}
                borderRadius="4px 4px 0px 0px"
            >
                <Text fontSize="10pt" fontWeight={700}>
                    About Community
                </Text>
                <Icon as={HiOutlineDotsHorizontal} />
            </Flex>
            <Flex></Flex>
        </Box>
    );
};

export default About;
