import { Flex } from "@chakra-ui/react";
import React from "react";

const PageContent = ({ children }) => {
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
