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
                borderRadius={4}
            >
                <Button variant={"outline"} height={"28px"} onClick={() => {}}>
                    Image Upload
                </Button>
                <input type="file" />
            </Flex>
        </Flex>
    );
};

export default ImageUpload;
