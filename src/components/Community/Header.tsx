import { Community } from "@/atoms/communitiesAtom";
import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaReddit } from "react-icons/fa";

type Props = {
    communityData: Community;
};

const Header = ({ communityData }: Props) => {
    // Dummy identifier for a value that will be replaced by community snippets
    const isJoined = false;

    return (
        <Flex direction="column" width="100%" height="146px">
            <Box height="50%" bg="blue.400" />
            <Flex justify="center" bg="white" flexGrow={1}>
                <Flex width="95%" maxWidth="860px">
                    {communityData.imageURL ? (
                        <Image />
                    ) : (
                        <Icon
                            as={FaReddit}
                            fontSize={64}
                            position="relative"
                            top={-3}
                            color="blue.500"
                            border="4px solid white"
                            borderRadius="50%"
                        />
                    )}
                    <Flex padding="10px 16px">
                        <Flex direction="column" mr={6}>
                            <Text fontWeight={800} fontSize="16pt">
                                {communityData.id}
                            </Text>
                            <Text
                                fontWeight={600}
                                fontSize="10pt"
                                color="gray.400"
                            >
                                r/{communityData.id}
                            </Text>
                        </Flex>
                        <Button
                            height="30px"
                            variant={isJoined ? "outline" : "solid"}
                            pr={6}
                            pl={6}
                            onClick={() => {}}
                        >
                            {isJoined ? "Joined" : "Join"}
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Header;
