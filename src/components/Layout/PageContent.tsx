import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const PageContent = ({ children }: Props) => {
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
