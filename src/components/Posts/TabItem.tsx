import React from "react";
import { TabItemType } from "./NewPostForm";
import { Flex, Icon, Text } from "@chakra-ui/react";

type Props = { item: TabItemType; selected: boolean };

const TabItem = ({ item, selected }: Props) => {
    return (
        <Flex>
            <Flex align="center" height="20px" mr={2}>
                <Icon as={item.icon} />
            </Flex>
            <Text fontSize="10pt">{item.title}</Text>
        </Flex>
    );
};

export default TabItem;
