import { Button, Flex, Input, Stack, Textarea } from "@chakra-ui/react";
import React, { ChangeEvent } from "react";

type Props = {
    textInputs: { title: string; body: string };
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleCreatePost: () => {};
};

const TextInputs = ({ textInputs, onChange, handleCreatePost }: Props) => {
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
                _focus={{
                    outline: "none",
                    bg: "white",
                    border: "1px solid",
                    borderColor: "black",
                }}
            />
            <Textarea
                placeholder="Text (Optional)"
                name="body"
                // value={}
                fontSize="10pt"
                height="100px"
                borderRadius={4}
                onChange={() => {}}
                _placeholder={{ color: "gray.500" }}
                _focus={{
                    outline: "none",
                    bg: "white",
                    border: "1px solid",
                    borderColor: "black",
                }}
            />
            <Flex justify="flex-end">
                <Button
                    height="34px"
                    padding="0px 30px"
                    // disabled={}
                    onClick={() => {}}
                >
                    Post
                </Button>
            </Flex>
        </Stack>
    );
};

export default TextInputs;
