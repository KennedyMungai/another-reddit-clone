import { Button, Flex } from "@chakra-ui/react";
import React from "react";

type Props = {};

const ImageUpload = (props: Props) => {
    return (
        <Flex justify="center" align="center" width="100%">
            <Flex
                justify="center"
                align="center"
                p={20}
                border="1px dashed"
                borderColor="gray.200"
                width="100%"
            >
                <Button>Image Upload</Button>
            </Flex>
        </Flex>
    );
};

export default ImageUpload;
