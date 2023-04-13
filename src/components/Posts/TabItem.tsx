import React from "react";
import { TabItem } from "./NewPostForm";

type Props = { item: TabItem };

const TabItem = ({ item }: Props) => {
    return <div>{item.title}</div>;
};

export default TabItem;
