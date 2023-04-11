import {
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
} from "@chakra-ui/react";
import React from "react";

type Prop = {
    open: boolean;
    handleClose: () => void;
};

const CreateCommunityModal = ({ open, handleClose }: Prop) => {
    return (
        <>
            <Modal isOpen={open} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>Here is the modal body</ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreateCommunityModal;
