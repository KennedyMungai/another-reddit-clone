import { Input } from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {};

const Login = (props: Props) => {
    const [loginForm, setLoginForm] = useState<{
        email: string;
        password: string;
    }>({
        email: "",
        password: "",
    });

    return (
        <form action="">
            <Input
                name="email"
                placeholder="email"
                type="email"
                mb={2}
                onChange={() => {}}
            />
            <Input
                name="password"
                type="password"
                placeholder="password"
                onChange={() => {}}
            />
        </form>
    );
};

export default Login;
