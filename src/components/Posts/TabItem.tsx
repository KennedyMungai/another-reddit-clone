import React from "react";
import { TabItemType } from "./NewPostForm";

type Props = { item: TabItemType };

const TabItem = ({ item }: Props) => {
    return <div>{item.title}</div>;
};

export default TabItem;
