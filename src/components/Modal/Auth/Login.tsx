import { Button, Input } from "@chakra-ui/react";
import React, { ChangeEvent, FormEvent, useState } from "react";

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

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <form action="" onSubmit={onSubmit}>
            <Input
                name="email"
                placeholder="email"
                type="email"
                mb={2}
                onChange={onChange}
            />
            <Input
                name="password"
                type="password"
                placeholder="password"
                onChange={onChange}
                mb={2}
            />
            <Button type="submit" width="100%">
                Log In
            </Button>
        </form>
    );
};

export default Login;
