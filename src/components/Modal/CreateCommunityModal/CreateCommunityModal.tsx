import {
    Box,
    Button,
    Divider,
    Flex,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

type Prop = {
    open: boolean;
    handleClose: () => void;
};

const CreateCommunityModal = ({ open, handleClose }: Prop) => {
    const [communityName, setCommunityName] = useState<string>("");

    return (
        <>
            <Modal isOpen={open} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader
                        display="flex"
                        flexDirection="column"
                        fontSize={15}
                        padding={3}
                    >
                        Create a community
                    </ModalHeader>
                    <Box pl={3} pr={3}>
                        <Divider />
                        <ModalCloseButton />
                        <ModalBody
                            display="flex"
                            flexDirection="column"
                            padding="10px 0px"
                        >
                            <Text fontWeight={600} fontSize="15">
                                Name:{" "}
                            </Text>
                            <Text fontSize={11} color="gray.500">
                                Community name, including capitalization, cannot
                                be changed!
                            </Text>
                            <Text>r/</Text>
                            <Input value={communityName} />
                        </ModalBody>
                    </Box>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Create Community</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreateCommunityModal;
