import { Flex, Text } from "@chakra-ui/react";
import React from "react";

type Prop = {
    open: boolean;
};

const CreateCommunityModal = ({ open }) => {
    return (
        <Flex align="center" justify="center">
            <Text>Communities</Text>
        </Flex>
    );
};

export default CreateCommunityModal;
