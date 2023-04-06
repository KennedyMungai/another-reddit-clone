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

    return <form action=""></form>;
};

export default Login;
