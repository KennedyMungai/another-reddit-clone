import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
} from "@chakra-ui/react";
import { Box } from "framer-motion";
import React from "react";

const AuthModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef(null);

    return (
        <>
            <Box
                ref={finalRef}
                tabIndex={-1}
                aria-label="Focus moved to this box"
            >
                Some other content that'll receive focus on close.
            </Box>

            <Button mt={4} onClick={onOpen}>
                Open Modal
            </Button>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Lorem count={2} />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AuthModal;
