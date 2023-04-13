import React from "react";
import { TabItemType } from "./NewPostForm";

type Props = { item: TabItemType; selected: boolean };

const TabItem = ({ item, selected }: Props) => {
    return <div>{item.title}</div>;
};

export default TabItem;
