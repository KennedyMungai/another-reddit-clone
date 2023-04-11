import {
    Box,
    Button,
    Checkbox,
    Divider,
    Flex,
    Icon,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
} from "@chakra-ui/react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { validateConfig } from "next/dist/server/config-shared";
import { ChangeEvent, useState } from "react";
import { BsFillEyeFill, BsFillPersonFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import { auth, firestore } from "../../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";

type Prop = {
    open: boolean;
    handleClose: () => void;
};

const CreateCommunityModal = ({ open, handleClose }: Prop) => {
    const [user] = useAuthState(auth);
    const [communityName, setCommunityName] = useState<string>("");
    const [charsRemaining, setCharsRemaining] = useState<number>(21);
    const [communityType, setCommunityType] = useState("public");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 21) {
            return;
        }
        setCommunityName(e.target.value);
        setCharsRemaining(21 - e.target.value.length);
    };

    const onCommunityTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCommunityType(e.target.name);
    };

    const handleCreateCommunity = async () => {
        const format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;

        if (format.test(communityName) || communityName.length < 3) {
            setError(
                "Community names must be between 3-21 characters, and can only contain letters, numbers or underscores"
            );

            return;
        }

        setLoading(true);

        try {
            // Create the community document in firestore
            // Check that the name is not taken
            // If name is valid, create the community
            const communityDocRef = doc(
                firestore,
                "communities",
                communityName
            );

            const communityDoc = await getDoc(communityDocRef);

            if (communityDoc.exists()) {
                setError(`Sorry, r/${communityName} is taken. Try another`);
                return;
            }

            // Create a community
            await setDoc(communityDocRef, {
                // creatorId
                // createdAt
                // numberOfMembers
                // privacyType

                creatorId: user?.uid,
                createdAt: serverTimestamp(),
                numberOfMembers: 1,
                privacyType: communityType,
            });
        } catch (error: any) {
            console.log("handleCreateCommunity error", error);
            setError(error.message);
        }

        setLoading(false);
    };

    return (
        <>
            <Modal isOpen={open} onClose={handleClose} size="lg">
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
                            <Text
                                position="relative"
                                top="28px"
                                left="10px"
                                width="20px"
                                color="gray.400"
                            >
                                r/
                            </Text>
                            <Input
                                position="relative"
                                value={communityName}
                                size="sm"
                                pl="22px"
                                onChange={handleChange}
                            />
                            <Text
                                color={
                                    charsRemaining === 0 ? "red" : "gray.500"
                                }
                                fontSize="9pt"
                            >
                                {charsRemaining} Characters Remaining
                            </Text>
                            {error && (
                                <Text color="red" fontSize="9pt" pt={1}>
                                    {error}
                                </Text>
                            )}
                            <Box mt={4} mb={4}>
                                <Text fontWeight={600} fontSize={15}>
                                    Community Type
                                </Text>
                                <Stack spacing={2}>
                                    <Checkbox
                                        name="public"
                                        isChecked={communityType === "public"}
                                        onChange={onCommunityTypeChange}
                                    >
                                        <Flex align="center" gap={3}>
                                            <Icon
                                                as={BsFillPersonFill}
                                                color="gray.500"
                                                mr={2}
                                            />
                                            <Text fontSize="10pt" mr={1}>
                                                Public
                                            </Text>
                                            <Text
                                                fontSize="8pt"
                                                color="gray.500"
                                            >
                                                Anyone can view, post and
                                                comment to this community
                                            </Text>
                                        </Flex>
                                    </Checkbox>
                                    <Checkbox
                                        name="restricted"
                                        isChecked={
                                            communityType === "restricted"
                                        }
                                        onChange={onCommunityTypeChange}
                                    >
                                        <Flex align="center" gap={3}>
                                            <Icon
                                                as={BsFillEyeFill}
                                                color="gray.500"
                                                mr={2}
                                            />
                                            <Text fontSize="10pt" mr={1}>
                                                Restricted
                                            </Text>
                                            <Text
                                                fontSize="8pt"
                                                color="gray.500"
                                            >
                                                Anyone can view these
                                                communities but only approved
                                                users can post
                                            </Text>
                                        </Flex>
                                    </Checkbox>
                                    <Checkbox
                                        name="private"
                                        isChecked={communityType === "private"}
                                        onChange={onCommunityTypeChange}
                                    >
                                        <Flex align="center" gap={3}>
                                            <Icon
                                                as={HiLockClosed}
                                                color="gray.500"
                                                mr={2}
                                            />
                                            <Text fontSize="10pt" mr={1}>
                                                Private
                                            </Text>
                                            <Text
                                                fontSize="8pt"
                                                color="gray.500"
                                            >
                                                Only approved users can view and
                                                submit to this community
                                            </Text>
                                        </Flex>
                                    </Checkbox>
                                </Stack>
                            </Box>
                        </ModalBody>
                    </Box>

                    <ModalFooter bg="gray.100" borderRadius="0px 0px 10px 10px">
                        <Button
                            variant="outline"
                            mr={3}
                            onClick={handleClose}
                            height="30px"
                        >
                            Cancel
                        </Button>
                        <Button height="30px" onClick={handleCreateCommunity}>
                            Create Community
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreateCommunityModal;
