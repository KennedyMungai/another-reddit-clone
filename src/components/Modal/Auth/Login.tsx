import { Button, Flex, Input } from "@chakra-ui/react";
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
                required
                fontSize="10pt"
                _placeholder={{ color: "gray.500" }}
                _hover={{
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                _focus={{
                    outline: "none",
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                bg="gray.50"
            />
            <Input
                name="password"
                type="password"
                placeholder="password"
                onChange={onChange}
                mb={2}
                required
                fontSize="10pt"
                _placeholder={{ color: "gray.500" }}
                _hover={{
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                _focus={{
                    outline: "none",
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                bg="gray.50"
            />
            <Button type="submit" width="100%" height="36px" mb={2}>
                Log In
            </Button>
            <Flex fontSize="9pt" justifyContent="center"></Flex>
        </form>
    );
};

export default Login;
