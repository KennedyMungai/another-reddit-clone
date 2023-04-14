import { Community } from "@/atoms/communitiesAtom";
import { Box, Divider, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiCakeLine } from "react-icons/ri";

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
            <Flex
                direction="column"
                p={3}
                bg={"white"}
                borderRadius="0px 0px 4px 4px"
            >
                <Stack>
                    <Flex
                        width={"100%"}
                        p={2}
                        fontSize={"10pt"}
                        fontWeight={700}
                    >
                        <Flex direction="column" flexGrow={1}>
                            <Text>{communityData.numberOfMembers}</Text>
                            <Text>Members</Text>
                        </Flex>
                        <Flex direction="column" flexGrow={1}>
                            <Text>1</Text>
                            <Text>Online</Text>
                        </Flex>
                    </Flex>
                    <Divider />
                    <Flex
                        align={"center"}
                        width={"100%"}
                        p={1}
                        fontWeight={500}
                        fontSize={"10pt"}
                    >
                        <Icon as={RiCakeLine} />
                        {communityData.createdAt && (
                            <Text>
                                Created at
                                {moment(
                                    new Date(
                                        communityData.createdAt.seconds * 1000
                                    )
                                )}
                            </Text>
                        )}
                    </Flex>
                </Stack>
            </Flex>
        </Box>
    );
};

export default About;
