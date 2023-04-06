import { authModalState } from "@/atoms/AuthModalAtom";
import {
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
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
                    <ModalHeader>
                        {modalState.view === "login" && "Login"}
                        {modalState.view === "SignUp" && "Sign Up"}
                        {modalState.view === "ResetPassword" &&
                            "Reset Password"}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Flex
                            direction="column"
                            justify="center"
                            align="center"
                            width="70%"
                            border="1px solid red"
                        >
                            {/* <OAuthButtons /> */}
                            {/* <AuthInputs /> */}
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AuthModal;
