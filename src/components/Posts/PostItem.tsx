import { Post } from "@/atoms/postsAtom";
import { Flex, Icon, Image, Skeleton, Stack, Text } from "@chakra-ui/react";
import moment from "moment";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChat, BsDot } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import {
    IoArrowDownCircleOutline,
    IoArrowDownCircleSharp,
    IoArrowRedoCircleOutline,
    IoArrowUpCircleOutline,
    IoArrowUpCircleSharp,
    IoBookmarkOutline,
} from "react-icons/io5";

type Props = {
    post: Post;
    userIsCreator: boolean;
    userVoteValue?: number;
    onVote: () => {};
    onDeletePost: (post: Post) => Promise<boolean>;
    onSelectPost: () => void;
};

const PostItem = ({
    post,
    userIsCreator,
    userVoteValue,
    onVote,
    onDeletePost,
    onSelectPost,
}: Props) => {
    const [loadingImage, setLoadingImage] = useState<boolean>(false);

    const handleDelete = async () => {
        try {
            const success = await onDeletePost(post);
        } catch (error: any) {}
    };

    return (
        <Flex
            border="1px solid"
            bg="white"
            borderColor={"gray.300"}
            borderRadius={4}
            _hover={{ borderColor: "gray.500" }}
            cursor="pointer"
            onClick={onSelectPost}
        >
            <Flex
                direction="column"
                align="center"
                bg="gray.100"
                p={2}
                width={"40px"}
                borderRadius={4}
            >
                <Icon
                    as={
                        userVoteValue === 1
                            ? IoArrowUpCircleSharp
                            : IoArrowUpCircleOutline
                    }
                    color={userVoteValue === 1 ? "brand.100" : "gray.400"}
                    fontSize={22}
                    onClick={onVote}
                    cursor="pointer"
                />
                <Text fontSize={"9pt"}>{post.voteStatus}</Text>
                <Icon
                    as={
                        userVoteValue === -1
                            ? IoArrowDownCircleSharp
                            : IoArrowDownCircleOutline
                    }
                    color={userVoteValue === -1 ? "#4379ff" : "gray.400"}
                    fontSize={22}
                    onClick={onVote}
                    cursor="pointer"
                />
            </Flex>
            <Flex direction="column" width={"100%"}>
                <Stack spacing={1} padding={"2rem"}>
                    <Stack
                        direction="row"
                        spacing={0.6}
                        align={"center"}
                        fontSize={"9pt"}
                    >
                        {/* Home Page check for selective rendering */}
                        <Text>
                            Posted By u/{post.creatorDisplayName}
                            {moment(
                                new Date(post.createdAt?.seconds * 1000)
                            ).fromNow()}
                        </Text>
                    </Stack>
                    <Text fontSize={"12pt"} fontWeight={600}>
                        {post.title}
                    </Text>
                    <Text fontSize={"10pt"}>{post.body}</Text>
                    {post.imageURL && (
                        <Flex justify="center" align="center" p={2}>
                            {loadingImage && (
                                <Skeleton
                                    height={"200px"}
                                    width="100%"
                                    borderRadius={4}
                                ></Skeleton>
                            )}
                            <Image
                                src={post.imageURL}
                                maxHeight="460px"
                                alt="Post Image"
                                display={loadingImage ? "none" : "unset"}
                                onLoad={() => setLoadingImage(false)}
                            />
                        </Flex>
                    )}
                </Stack>
                <Flex
                    justify="center"
                    align="center"
                    gap={3}
                    color={"gray.50"}
                    p="8px 10px"
                    borderRadius={4}
                    _hover={{ bg: "gray.200" }}
                    cursor="pointer"
                >
                    <Icon as={BsChat} />
                    <Text fontSize={"9pt"}>{post.numberOfComments}</Text>
                </Flex>
                <Flex
                    justify="center"
                    align="center"
                    gap={3}
                    color={"gray.50"}
                    p="8px 10px"
                    borderRadius={4}
                    _hover={{ bg: "gray.200" }}
                    cursor="pointer"
                >
                    <Icon as={IoArrowRedoCircleOutline} />
                    <Text fontSize={"9pt"}>Share</Text>
                </Flex>
                <Flex
                    justify="center"
                    align="center"
                    gap={3}
                    color={"gray.50"}
                    p="8px 10px"
                    borderRadius={4}
                    _hover={{ bg: "gray.200" }}
                    cursor="pointer"
                >
                    <Icon as={IoBookmarkOutline} />
                    <Text fontSize={"9pt"}>Save</Text>
                </Flex>
                {userIsCreator && (
                    <Flex
                        justify="center"
                        align="center"
                        gap={3}
                        color={"gray.50"}
                        p="8px 10px"
                        borderRadius={4}
                        _hover={{ bg: "gray.200" }}
                        cursor="pointer"
                    >
                        <Icon as={AiOutlineDelete} />
                        <Text fontSize={"9pt"}>Delete</Text>
                    </Flex>
                )}
            </Flex>
        </Flex>
    );
};

export default PostItem;
