import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const PageContent = ({ children }: Props) => {
    return (
        <Flex border="1px solid red">
            <Flex border="1px solid orange">
                {/* LHS */}
                <Flex border="1px solid green">
                    {children && children[0 as keyof typeof children]}
                </Flex>
                {/* RHS */}
                <Flex border="1px solid blue">
                    {children && children[1 as keyof typeof children]}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default PageContent;