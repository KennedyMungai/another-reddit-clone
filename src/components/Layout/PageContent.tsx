import { Flex } from "@chakra-ui/react";
import React from "react";

type Props = {};

const PageContent = (props: Props) => {
    return (
        <Flex>
            <Flex>
                {/* LHS */}
                <Flex></Flex>
                {/* RHS */}
                <Flex></Flex>
            </Flex>
        </Flex>
    );
};

export default PageContent;
