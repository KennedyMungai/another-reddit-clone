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
                <Flex>{children[0]}</Flex>
                {/* RHS */}
                <Flex>{children[1]}</Flex>
            </Flex>
        </Flex>
    );
};

export default PageContent;
