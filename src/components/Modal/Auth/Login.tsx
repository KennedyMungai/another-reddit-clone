import { Button, Input } from "@chakra-ui/react";
import React, { FormEvent, useState } from "react";

type Props = {};

const Login = (props: Props) => {
    const [loginForm, setLoginForm] = useState<{
        email: string;
        password: string;
    }>({
        email: "",
        password: "",
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const onChange = () => {};

    return (
        <form action="" onSubmit={onSubmit}>
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
            <Button type="submit">Log In</Button>
        </form>
    );
};

export default Login;
