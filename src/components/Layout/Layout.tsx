import React, { ReactNode } from "react";
import NavBar from "../NavBar/NavBar";

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <>
            <NavBar />
            <main>{children}</main>
        </>
    );
};

export default Layout;
