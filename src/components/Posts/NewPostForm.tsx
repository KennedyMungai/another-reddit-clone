import { Flex, Icon } from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";
import { BiPoll } from "react-icons/bi";
import { BsLink45Deg, BsMic } from "react-icons/bs";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import TabItem from "./TabItem";
import TextInputs from "./PostForm/TextInputs";
import ImageUpload from "./PostForm/ImageUpload";
import { Post } from "@/atoms/postsAtom";
import { User } from "firebase/auth";
import { useRouter } from "next/router";
import {
    Timestamp,
    addDoc,
    collection,
    serverTimestamp,
    updateDoc,
} from "firebase/firestore";
import { firestore, storage } from "@/firebase/clientApp";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

type Props = {
    user: User;
};

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

const NewPostForm = ({ user }: Props) => {
    const router = useRouter();
    const [selectedTab, setSelectedTab] = useState<string>(formTabs[0].title);
    const [textInputs, setTextInputs] = useState<{
        title: string;
        body: string;
    }>({ title: "", body: "" });
    const [selectedFile, setSelectedFile] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const handleCreatePost = async () => {
        const { communityId } = router.query;

        const newPost: Post = {
            communityId: communityId as string,
            creatorId: user.uid,
            creatorDisplayName: user.email!.split("@")[0],
            title: textInputs.title,
            body: textInputs.body,
            numberOfComments: 0,
            voteStatus: 0,
            createdAt: serverTimestamp() as Timestamp,
        };

        setLoading(true);

        try {
            const postDocRef = await addDoc(
                collection(firestore, "posts"),
                newPost
            );

            if (selectedFile) {
                const imageRef = ref(storage, `posts/${postDocRef.id}/image`);
                await uploadString(imageRef, selectedFile, "data_url");
                const downloadURL = await getDownloadURL(imageRef);

                await updateDoc(postDocRef, { imageURL: downloadURL });
            }
        } catch (error: any) {
            console.log("Handle Create Post error", error);
            setError(true);
        }

        setLoading(false);

        // router.back();
    };

    const onSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();

        if (e.target.files?.[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            if (readerEvent.target?.result) {
                setSelectedFile(readerEvent.target.result as string);
            }
        };
    };

    const onTextChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const {
            target: { name, value },
        } = e;

        setTextInputs((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <Flex direction="column" bg="white" borderRadius={4} mt={2}>
            <Flex width="100%">
                {formTabs.map((item) => (
                    <TabItem
                        key={item.title}
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
                        loading={loading}
                    />
                )}
                {selectedTab === "Images & Video" && (
                    <ImageUpload
                        selectedFile={selectedFile}
                        onSelectImage={onSelectImage}
                        setSelectedTab={setSelectedTab}
                        setSelectedFile={setSelectedFile}
                    />
                )}
            </Flex>
        </Flex>
    );
};

export default NewPostForm;
