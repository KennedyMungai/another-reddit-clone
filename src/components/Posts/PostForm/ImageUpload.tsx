import { Button, Flex, Image, Stack } from "@chakra-ui/react";
import { ChangeEvent, useRef } from "react";

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
            {selectedFile ? (
                <Flex
                    direction="column"
                    align="center"
                    justify="center"
                    gap={4}
                >
                    <Image
                        src={selectedFile}
                        maxWidth="400px"
                        maxHeight="400px"
                    />
                    <Stack direction="row">
                        <Button
                            onClick={() => setSelectedTab("Post")}
                            height={"28px"}
                        >
                            Back to Post
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => setSelectedFile("")}
                            height={"28px"}
                        >
                            Remove
                        </Button>
                    </Stack>
                </Flex>
            ) : (
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
                        onChange={onSelectImage}
                    />
                    <img src={selectedFile} />
                </Flex>
            )}
        </Flex>
    );
};

export default ImageUpload;
