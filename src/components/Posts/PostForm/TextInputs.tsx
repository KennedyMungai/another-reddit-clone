import { Button, Flex, Input, Stack, Textarea } from "@chakra-ui/react";
import React from "react";

type Props = {};

const TextInputs = (props: Props) => {
    return (
        <Stack spacing={3} width="100%">
            <Input />
            <Textarea />
            <Flex>
                <Button>Post</Button>
            </Flex>
        </Stack>
    );
};

export default TextInputs;
