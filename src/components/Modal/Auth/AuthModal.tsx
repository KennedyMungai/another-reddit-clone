import { authModalState } from "@/atoms/AuthModalAtom";
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";

const AuthModal = () => {
    const [modalState, setModalState] = useRecoilState(authModalState);

    const finalRef = React.useRef(null);

    const handleClose = () => {
        setModalState((prev) => ({
            ...prev,
            open: false,
        }));
    };

    return (
        <>
            <Modal
                finalFocusRef={finalRef}
                isOpen={modalState.open}
                onClose={handleClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>Some text inside a modal body</ModalBody>

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
