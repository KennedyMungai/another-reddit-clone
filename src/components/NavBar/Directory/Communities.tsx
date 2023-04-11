import CreateCommunityModal from "@/components/Modal/CreateCommunityModal/CreateCommunityModal";
import { MenuItem } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Communities = (props: Props) => {
    return (
        <>
            <CreateCommunityModal />
            <MenuItem></MenuItem>
        </>
    );
};

export default Communities;
