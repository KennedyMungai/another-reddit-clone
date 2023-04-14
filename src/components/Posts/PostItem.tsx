import { Post } from "@/atoms/postsAtom";
import { Flex, Icon, Stack, Text } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChat, BsDot } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import
{
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
    onDeletePost: () => {};
    onSelectPost: () => void;
};

const PostItem = ({
    post,
    userIsCreator,
    userVoteValue,
    onVote,
    onDeletePost,
    onSelectPost,
}: Props) =>
{
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
                            {(moment(new Date(post.createdAt?.seconds * 1000)).fromNow())}
                        </Text>
                    </Stack>
                    <Text>{post.title}</Text>
                </Stack>
            </Flex>
            {post.title}
        </Flex>
    );
};

export default PostItem;
