import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { BsArrowUpRightCircle, BsChatDots } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import {
    IoFilterCircleOutline,
    IoNotificationsOutline,
    IoVideocamOutline,
} from "react-icons/io5";

const Icons = () => {
    return (
        <Flex>
            <Flex
                display={{ base: "none", md: "flex" }}
                align="center"
                borderRight="1px solid"
                borderColor="gray.200"
                gap={1}
            >
                <Flex
                    cursor="pointer"
                    borderRadius={4}
                    _hover={{ bg: "gray.200" }}
                >
                    <Icon as={BsArrowUpRightCircle} fontSize={22} />
                </Flex>
                <Flex
                    cursor="pointer"
                    borderRadius={4}
                    _hover={{ bg: "gray.200" }}
                >
                    <Icon as={IoFilterCircleOutline} fontSize={20} />
                </Flex>
                <Flex
                    cursor="pointer"
                    borderRadius={4}
                    _hover={{ bg: "gray.200" }}
                >
                    <Icon as={IoVideocamOutline} fontSize={20} />
                </Flex>
            </Flex>
            <></>
        </Flex>
    );
};

export default Icons;
