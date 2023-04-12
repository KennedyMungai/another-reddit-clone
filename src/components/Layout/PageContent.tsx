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
                <Flex>{children && children[0 as keyof typeof children]}</Flex>
                {/* RHS */}
                <Flex>{children && children[1 as keyof typeof children]}</Flex>
            </Flex>
        </Flex>
    );
};

export default PageContent;
