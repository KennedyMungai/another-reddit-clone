import { authModalState } from "@/atoms/AuthModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import { auth } from "../../../firebase/clientApp";

const SignUp = () => {
    const setAuthModalState = useSetRecoilState(authModalState);

    const [signupForm, setSignupForm] = useState<{
        email: string;
        password: string;
        confirmPassword: string;
    }>({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState<string>("");

    const [createUserWithEmailAndPassword, user, loading, userError] =
        useCreateUserWithEmailAndPassword(auth);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (signupForm.password !== signupForm.confirmPassword) {
            setError("Passwords do not match!!!!!");
            return;
        }

        createUserWithEmailAndPassword(signupForm.email, signupForm.password);
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSignupForm((prev) => ({
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
            <Input
                name="confirmPassword"
                type="password"
                placeholder="confirm password"
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
            {error && (
                <Text color="red" textAlign="center" fontSize="15pt">
                    {error}
                </Text>
            )}
            <Button type="submit" width="100%" height="36px" mb={2}>
                Sign Up
            </Button>
            <Flex fontSize="9pt" justifyContent="center">
                <Text mr={1}>Already a Member?</Text>
                <Text
                    color="blue.500"
                    fontWeight={700}
                    cursor="pointer"
                    onClick={() =>
                        setAuthModalState((prev) => ({
                            ...prev,
                            view: "login",
                        }))
                    }
                >
                    LOGIN
                </Text>
            </Flex>
        </form>
    );
};

export default SignUp;
