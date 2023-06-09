import React, { SetStateAction } from "react";
import { TabItemType } from "./NewPostForm";
import { Flex, Icon, Text } from "@chakra-ui/react";

type Props = {
    item: TabItemType;
    selected: boolean;
    setSelectedTab: (value: string) => void;
};

const TabItem = ({ item, selected, setSelectedTab }: Props) => {
    return (
        <Flex
            justify="center"
            align="center"
            flexGrow={1}
            p="14px 0px"
            cursor="pointer"
            _hover={{ bg: "gray.50" }}
            color={selected ? "blue.500" : "gray.500"}
            borderWidth={selected ? "0px 0px 3px 0px" : ""}
            borderColor="blue.500"
            fontWeight={700}
            onClick={() => setSelectedTab(item.title)}
        >
            <Flex align="center" height="20px" mr={2}>
                <Icon as={item.icon} />
            </Flex>
            <Text fontSize="10pt">{item.title}</Text>
        </Flex>
    );
};

export default TabItem;
