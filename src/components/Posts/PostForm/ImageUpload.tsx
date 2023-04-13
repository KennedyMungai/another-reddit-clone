import { Button, Flex } from "@chakra-ui/react";
import React, { ChangeEvent, useRef } from "react";

type Props = {
    selectedFile?: string;
    onSelectImage: (e: ChangeEvent<HTMLInputElement>) => void;
    setSelectedTab: (value: string) => void;
    setSelectedFile: (value: string) => void;
};

const ImageUpload = ({
    selectedFile,
    onSelectImage,
    setSelectedFile,
    setSelectedTab,
}: Props) => {
    const selectedFileRef = useRef<HTMLInputElement>(null);

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
                <Button
                    variant={"outline"}
                    height={"28px"}
                    onClick={() => selectedFileRef.current?.click()}
                >
                    Image Upload
                </Button>
                <input
                    type="file"
                    style={{ display: "none" }}
                    ref={selectedFileRef}
                    // onChange={onSelectImage}
                />
            </Flex>
        </Flex>
    );
};

export default ImageUpload;
