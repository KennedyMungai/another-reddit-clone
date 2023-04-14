import { Community } from "@/atoms/communitiesAtom";
import { auth } from "@/firebase/clientApp";
import useSelectFile from "@/hooks/useSelectFile";
import {
    Box,
    Button,
    Divider,
    Flex,
    Icon,
    Image,
    Spinner,
    Stack,
    Text,
} from "@chakra-ui/react";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaReddit } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiCakeLine } from "react-icons/ri";

type Props = {
    communityData: Community;
};

const About = ({ communityData }: Props) => {
    const router = useRouter();
    const [user] = useAuthState(auth);
    const selectedFileRef = useRef<string>();
    const { selectedFile, setSelectedFile, onSelectFile } = useSelectFile();
    const [uploadingImage, setUploadingImage] = useState<boolean>(false);

    const onUpdateImage = async () => {};

    return (
        <Box position={"sticky"} top={"2rem"}>
            <Flex
                justify="space-between"
                align="center"
                bg="blue.400"
                color="white"
                p={3}
                borderRadius="4px 4px 0px 0px"
            >
                <Text fontSize="10pt" fontWeight={700}>
                    About Community
                </Text>
                <Icon as={HiOutlineDotsHorizontal} />
            </Flex>
            <Flex
                direction="column"
                p={3}
                bg={"white"}
                borderRadius="0px 0px 4px 4px"
            >
                <Stack>
                    <Flex
                        width={"100%"}
                        p={2}
                        fontSize={"10pt"}
                        fontWeight={700}
                    >
                        <Flex direction="column" flexGrow={1}>
                            <Text>{communityData.numberOfMembers}</Text>
                            <Text>Members</Text>
                        </Flex>
                        <Flex direction="column" flexGrow={1}>
                            <Text>1</Text>
                            <Text>Online</Text>
                        </Flex>
                    </Flex>
                    <Divider />
                    <Flex
                        align={"center"}
                        width={"100%"}
                        p={1}
                        fontWeight={500}
                        fontSize={"10pt"}
                    >
                        <Icon as={RiCakeLine} />
                        {communityData.createdAt && (
                            <Text>
                                Created at
                                {moment(
                                    new Date(
                                        communityData.createdAt.seconds * 1000
                                    )
                                ).format("MMM DDD, YYYY")}
                            </Text>
                        )}
                    </Flex>
                    <Link href={`/r/${router.query.communityId}/submit`}>
                        <Button height="30px" width="100%">
                            Create Post
                        </Button>
                    </Link>
                    {user?.uid === communityData.creatorId && (
                        <>
                            <Divider />
                            <Stack spacing={1} fontSize="10pt">
                                <Text fontWeight={600}>Admin</Text>
                                <Flex align="center" justify="space-between">
                                    <Text
                                        color="blue.500"
                                        cursor="pointer"
                                        _hover={{ textDecoration: "underline" }}
                                    >
                                        Change Image
                                    </Text>
                                    {communityData.imageURL || selectedFile ? (
                                        <Image
                                            src={
                                                selectedFile ||
                                                communityData.imageURL
                                            }
                                            borderRadius={"full"}
                                            boxSize="40px"
                                            alt="Community Image"
                                        />
                                    ) : (
                                        <Icon
                                            as={FaReddit}
                                            fontSize={40}
                                            color="brand.100"
                                            mr={2}
                                        />
                                    )}
                                </Flex>
                                {selectedFile &&
                                    (uploadingImage ? (
                                        <Spinner />
                                    ) : (
                                        <Text
                                            cursor="pointer"
                                            onClick={() => {}}
                                        >
                                            Save Changes
                                        </Text>
                                    ))}
                            </Stack>
                        </>
                    )}
                </Stack>
            </Flex>
        </Box>
    );
};

export default About;
