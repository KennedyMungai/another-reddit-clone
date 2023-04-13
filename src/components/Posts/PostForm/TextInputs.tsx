import { Button, Flex, Input, Stack, Textarea } from "@chakra-ui/react";
import React from "react";

type Props = {};

const TextInputs = (props: Props) => {
    return (
        <Stack spacing={3} width="100%">
            <Input
                placeholder="Title"
                name="title"
                // value={}
                fontSize="10pt"
                borderRadius={4}
                onChange={() => {}}
                _placeholder={{ color: "gray.500" }}
            />
            <Textarea placeholder="Post" />
            <Flex>
                <Button>Post</Button>
            </Flex>
        </Stack>
    );
};

export default TextInputs;
