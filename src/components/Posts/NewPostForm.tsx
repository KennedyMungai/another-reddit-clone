import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { BiPoll } from "react-icons/bi";
import { BsLink45Deg, BsMic } from "react-icons/bs";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import TabItem from "./TabItem";

const formTabs = [
    { title: "Post", icon: IoDocumentText },
    { title: "Images & Video", icon: IoImageOutline },
    { title: "Link", icon: BsLink45Deg },
    { title: "Poll", icon: BiPoll },
    { title: "Talk", icon: BsMic },
];

export type TabItem = {
    title: string;
    icon: typeof Icon.arguments;
};

const NewPostForm = () => {
    return (
        <Flex direction="column" bg="white" borderRadius={4} mt={2}>
            <Flex width="100%">
                {formTabs.map((tab) => (
                    <TabItem item={tab} />
                ))}
            </Flex>
        </Flex>
    );
};

export default NewPostForm;