import React from "react";
import { TabItemType } from "./NewPostForm";
import { Flex, Icon, Text } from "@chakra-ui/react";

type Props = { item: TabItemType; selected: boolean };

const TabItem = ({ item, selected }: Props) => {
    return (
        <Flex>
            <Flex>
                <Icon as={item.icon} />
            </Flex>
            <Text>{item.title}</Text>
        </Flex>
    );
};

export default TabItem;
