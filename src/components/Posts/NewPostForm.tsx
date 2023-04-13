import { Flex, Icon } from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";
import { BiPoll } from "react-icons/bi";
import { BsLink45Deg, BsMic } from "react-icons/bs";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import TabItem from "./TabItem";
import TextInputs from "./PostForm/TextInputs";

export type TabItemType = {
    title: string;
    icon: typeof Icon.arguments;
};

const formTabs: TabItemType[] = [
    { title: "Post", icon: IoDocumentText },
    { title: "Images & Video", icon: IoImageOutline },
    { title: "Link", icon: BsLink45Deg },
    { title: "Poll", icon: BiPoll },
    { title: "Talk", icon: BsMic },
];

const NewPostForm = () => {
    const [selectedTab, setSelectedTab] = useState<string>(formTabs[0].title);
    const [textInputs, setTextInputs] = useState<{
        title: string;
        body: string;
    }>({ title: "", body: "" });
    const [selectedFile, setSelectedFile] = useState<string>("");

    const handleCreatePost = async () => {};

    const onSelectImage = () => {};

    const onTextChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {};

    return (
        <Flex direction="column" bg="white" borderRadius={4} mt={2}>
            <Flex width="100%">
                {formTabs.map((item) => (
                    <TabItem
                        item={item}
                        selected={item.title === selectedTab}
                        setSelectedTab={setSelectedTab}
                    />
                ))}
            </Flex>
            <Flex p="1rem 2rem">
                {selectedTab === "Post" && (
                    <TextInputs
                        textInputs={textInputs}
                        onChange={onTextChange}
                        handleCreatePost={handleCreatePost}
                        loading={false}
                    />
                )}
            </Flex>
        </Flex>
    );
};

export default NewPostForm;
